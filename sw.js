// sw.js — 타이어게러지 푸시 수신 + 알림 클릭 처리 (재구성본 2026-07-13)
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });

// Edge Function이 보내는 형식: {title, body, url, tag}
self.addEventListener('push', function(e){
  var d = {};
  try { d = e.data ? e.data.json() : {}; }
  catch (err) { d = { title: '타이어게러지', body: e.data ? e.data.text() : '' }; }
  e.waitUntil(self.registration.showNotification(d.title || '타이어게러지 알림', {
    body: d.body || '',
    tag: d.tag || undefined,   // 같은 예약의 반복 알림은 1장으로 갱신
    renotify: true,            // 갱신될 때마다 다시 소리/진동
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    data: { url: d.url || '/' }
  }));
});

self.addEventListener('notificationclick', function(e){
  e.notification.close();
  var url = (e.notification.data && e.notification.data.url) || '/';
  e.waitUntil((async function(){
    var list = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (var i = 0; i < list.length; i++) {
      var c = list[i];
      if ('focus' in c) { try { await c.focus(); if (c.navigate) await c.navigate(url); return; } catch (err) {} }
    }
    await self.clients.openWindow(url);
  })());
});
