const encodingToEucKr = (input) => {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        const unicodeHex = input.charCodeAt(i).toString(16).toUpperCase().padStart(2, '0');
        const eucKrHex = mappingTable.get(unicodeHex);
        if (eucKrHex) {
            result += eucKrHex;
        } else {
            result += unicodeHex; // 매핑 테이블에 없는 문자는 그대로 추가
        }
    }
    result += "0d0a"

    return result;
}

const mappingTable = new Map();
mappingTable.set("AC02", "8141");
mappingTable.set("AC03", "8142");
mappingTable.set("AC05", "8143");
mappingTable.set("AC06", "8144");
mappingTable.set("AC0B", "8145");
mappingTable.set("AC0C", "8146");
mappingTable.set("AC0D", "8147");
mappingTable.set("AC0E", "8148");
mappingTable.set("AC0F", "8149");
mappingTable.set("AC18", "814A");
mappingTable.set("AC1E", "814B");
mappingTable.set("AC1F", "814C");
mappingTable.set("AC21", "814D");
mappingTable.set("AC22", "814E");
mappingTable.set("AC23", "814F");
mappingTable.set("AC25", "8150");
mappingTable.set("AC26", "8151");
mappingTable.set("AC27", "8152");
mappingTable.set("AC28", "8153");
mappingTable.set("AC29", "8154");
mappingTable.set("AC2A", "8155");
mappingTable.set("AC2B", "8156");
mappingTable.set("AC2E", "8157");
mappingTable.set("AC32", "8158");
mappingTable.set("AC33", "8159");
mappingTable.set("AC34", "815A");
mappingTable.set("AC35", "8161");
mappingTable.set("AC36", "8162");
mappingTable.set("AC37", "8163");
mappingTable.set("AC3A", "8164");
mappingTable.set("AC3B", "8165");
mappingTable.set("AC3D", "8166");
mappingTable.set("AC3E", "8167");
mappingTable.set("AC3F", "8168");
mappingTable.set("AC41", "8169");
mappingTable.set("AC42", "816A");
mappingTable.set("AC43", "816B");
mappingTable.set("AC44", "816C");
mappingTable.set("AC45", "816D");
mappingTable.set("AC46", "816E");
mappingTable.set("AC47", "816F");
mappingTable.set("AC48", "8170");
mappingTable.set("AC49", "8171");
mappingTable.set("AC4A", "8172");
mappingTable.set("AC4C", "8173");
mappingTable.set("AC4E", "8174");
mappingTable.set("AC4F", "8175");
mappingTable.set("AC50", "8176");
mappingTable.set("AC51", "8177");
mappingTable.set("AC52", "8178");
mappingTable.set("AC53", "8179");
mappingTable.set("AC55", "817A");
mappingTable.set("AC56", "8181");
mappingTable.set("AC57", "8182");
mappingTable.set("AC59", "8183");
mappingTable.set("AC5A", "8184");
mappingTable.set("AC5B", "8185");
mappingTable.set("AC5D", "8186");
mappingTable.set("AC5E", "8187");
mappingTable.set("AC5F", "8188");
mappingTable.set("AC60", "8189");
mappingTable.set("AC61", "818A");
mappingTable.set("AC62", "818B");
mappingTable.set("AC63", "818C");
mappingTable.set("AC64", "818D");
mappingTable.set("AC65", "818E");
mappingTable.set("AC66", "818F");
mappingTable.set("AC67", "8190");
mappingTable.set("AC68", "8191");
mappingTable.set("AC69", "8192");
mappingTable.set("AC6A", "8193");
mappingTable.set("AC6B", "8194");
mappingTable.set("AC6C", "8195");
mappingTable.set("AC6D", "8196");
mappingTable.set("AC6E", "8197");
mappingTable.set("AC6F", "8198");
mappingTable.set("AC72", "8199");
mappingTable.set("AC73", "819A");
mappingTable.set("AC75", "819B");
mappingTable.set("AC76", "819C");
mappingTable.set("AC79", "819D");
mappingTable.set("AC7B", "819E");
mappingTable.set("AC7C", "819F");
mappingTable.set("AC7D", "81A0");
mappingTable.set("AC7E", "81A1");
mappingTable.set("AC7F", "81A2");
mappingTable.set("AC82", "81A3");
mappingTable.set("AC87", "81A4");
mappingTable.set("AC88", "81A5");
mappingTable.set("AC8D", "81A6");
mappingTable.set("AC8E", "81A7");
mappingTable.set("AC8F", "81A8");
mappingTable.set("AC91", "81A9");
mappingTable.set("AC92", "81AA");
mappingTable.set("AC93", "81AB");
mappingTable.set("AC95", "81AC");
mappingTable.set("AC96", "81AD");
mappingTable.set("AC97", "81AE");
mappingTable.set("AC98", "81AF");
mappingTable.set("AC99", "81B0");
mappingTable.set("AC9A", "81B1");
mappingTable.set("AC9B", "81B2");
mappingTable.set("AC9E", "81B3");
mappingTable.set("ACA2", "81B4");
mappingTable.set("ACA3", "81B5");
mappingTable.set("ACA4", "81B6");
mappingTable.set("ACA5", "81B7");
mappingTable.set("ACA6", "81B8");
mappingTable.set("ACA7", "81B9");
mappingTable.set("ACAB", "81BA");
mappingTable.set("ACAD", "81BB");
mappingTable.set("ACAE", "81BC");
mappingTable.set("ACB1", "81BD");
mappingTable.set("ACB2", "81BE");
mappingTable.set("ACB3", "81BF");
mappingTable.set("ACB4", "81C0");
mappingTable.set("ACB5", "81C1");
mappingTable.set("ACB6", "81C2");
mappingTable.set("ACB7", "81C3");
mappingTable.set("ACBA", "81C4");
mappingTable.set("ACBE", "81C5");
mappingTable.set("ACBF", "81C6");
mappingTable.set("ACC0", "81C7");
mappingTable.set("ACC2", "81C8");
mappingTable.set("ACC3", "81C9");
mappingTable.set("ACC5", "81CA");
mappingTable.set("ACC6", "81CB");
mappingTable.set("ACC7", "81CC");
mappingTable.set("ACC9", "81CD");
mappingTable.set("ACCA", "81CE");
mappingTable.set("ACCB", "81CF");
mappingTable.set("ACCD", "81D0");
mappingTable.set("ACCE", "81D1");
mappingTable.set("ACCF", "81D2");
mappingTable.set("ACD0", "81D3");
mappingTable.set("ACD1", "81D4");
mappingTable.set("ACD2", "81D5");
mappingTable.set("ACD3", "81D6");
mappingTable.set("ACD4", "81D7");
mappingTable.set("ACD6", "81D8");
mappingTable.set("ACD8", "81D9");
mappingTable.set("ACD9", "81DA");
mappingTable.set("ACDA", "81DB");
mappingTable.set("ACDB", "81DC");
mappingTable.set("ACDC", "81DD");
mappingTable.set("ACDD", "81DE");
mappingTable.set("ACDE", "81DF");
mappingTable.set("ACDF", "81E0");
mappingTable.set("ACE2", "81E1");
mappingTable.set("ACE3", "81E2");
mappingTable.set("ACE5", "81E3");
mappingTable.set("ACE6", "81E4");
mappingTable.set("ACE9", "81E5");
mappingTable.set("ACEB", "81E6");
mappingTable.set("ACED", "81E7");
mappingTable.set("ACEE", "81E8");
mappingTable.set("ACF2", "81E9");
mappingTable.set("ACF4", "81EA");
mappingTable.set("ACF7", "81EB");
mappingTable.set("ACF8", "81EC");
mappingTable.set("ACF9", "81ED");
mappingTable.set("ACFA", "81EE");
mappingTable.set("ACFB", "81EF");
mappingTable.set("ACFE", "81F0");
mappingTable.set("ACFF", "81F1");
mappingTable.set("AD01", "81F2");
mappingTable.set("AD02", "81F3");
mappingTable.set("AD03", "81F4");
mappingTable.set("AD05", "81F5");
mappingTable.set("AD07", "81F6");
mappingTable.set("AD08", "81F7");
mappingTable.set("AD09", "81F8");
mappingTable.set("AD0A", "81F9");
mappingTable.set("AD0B", "81FA");
mappingTable.set("AD0E", "81FB");
mappingTable.set("AD10", "81FC");
mappingTable.set("AD12", "81FD");
mappingTable.set("AD13", "81FE");
mappingTable.set("AD14", "8241");
mappingTable.set("AD15", "8242");
mappingTable.set("AD16", "8243");
mappingTable.set("AD17", "8244");
mappingTable.set("AD19", "8245");
mappingTable.set("AD1A", "8246");
mappingTable.set("AD1B", "8247");
mappingTable.set("AD1D", "8248");
mappingTable.set("AD1E", "8249");
mappingTable.set("AD1F", "824A");
mappingTable.set("AD21", "824B");
mappingTable.set("AD22", "824C");
mappingTable.set("AD23", "824D");
mappingTable.set("AD24", "824E");
mappingTable.set("AD25", "824F");
mappingTable.set("AD26", "8250");
mappingTable.set("AD27", "8251");
mappingTable.set("AD28", "8252");
mappingTable.set("AD2A", "8253");
mappingTable.set("AD2B", "8254");
mappingTable.set("AD2E", "8255");
mappingTable.set("AD2F", "8256");
mappingTable.set("AD30", "8257");
mappingTable.set("AD31", "8258");
mappingTable.set("AD32", "8259");
mappingTable.set("AD33", "825A");
mappingTable.set("AD36", "8261");
mappingTable.set("AD37", "8262");
mappingTable.set("AD39", "8263");
mappingTable.set("AD3A", "8264");
mappingTable.set("AD3B", "8265");
mappingTable.set("AD3D", "8266");
mappingTable.set("AD3E", "8267");
mappingTable.set("AD3F", "8268");
mappingTable.set("AD40", "8269");
mappingTable.set("AD41", "826A");
mappingTable.set("AD42", "826B");
mappingTable.set("AD43", "826C");
mappingTable.set("AD46", "826D");
mappingTable.set("AD48", "826E");
mappingTable.set("AD4A", "826F");
mappingTable.set("AD4B", "8270");
mappingTable.set("AD4C", "8271");
mappingTable.set("AD4D", "8272");
mappingTable.set("AD4E", "8273");
mappingTable.set("AD4F", "8274");
mappingTable.set("AD51", "8275");
mappingTable.set("AD52", "8276");
mappingTable.set("AD53", "8277");
mappingTable.set("AD55", "8278");
mappingTable.set("AD56", "8279");
mappingTable.set("AD57", "827A");
mappingTable.set("AD59", "8281");
mappingTable.set("AD5A", "8282");
mappingTable.set("AD5B", "8283");
mappingTable.set("AD5C", "8284");
mappingTable.set("AD5D", "8285");
mappingTable.set("AD5E", "8286");
mappingTable.set("AD5F", "8287");
mappingTable.set("AD60", "8288");
mappingTable.set("AD62", "8289");
mappingTable.set("AD64", "828A");
mappingTable.set("AD65", "828B");
mappingTable.set("AD66", "828C");
mappingTable.set("AD67", "828D");
mappingTable.set("AD68", "828E");
mappingTable.set("AD69", "828F");
mappingTable.set("AD6A", "8290");
mappingTable.set("AD6B", "8291");
mappingTable.set("AD6E", "8292");
mappingTable.set("AD6F", "8293");
mappingTable.set("AD71", "8294");
mappingTable.set("AD72", "8295");
mappingTable.set("AD77", "8296");
mappingTable.set("AD78", "8297");
mappingTable.set("AD79", "8298");
mappingTable.set("AD7A", "8299");
mappingTable.set("AD7E", "829A");
mappingTable.set("AD80", "829B");
mappingTable.set("AD83", "829C");
mappingTable.set("AD84", "829D");
mappingTable.set("AD85", "829E");
mappingTable.set("AD86", "829F");
mappingTable.set("AD87", "82A0");
mappingTable.set("AD8A", "82A1");
mappingTable.set("AD8B", "82A2");
mappingTable.set("AD8D", "82A3");
mappingTable.set("AD8E", "82A4");
mappingTable.set("AD8F", "82A5");
mappingTable.set("AD91", "82A6");
mappingTable.set("AD92", "82A7");
mappingTable.set("AD93", "82A8");
mappingTable.set("AD94", "82A9");
mappingTable.set("AD95", "82AA");
mappingTable.set("AD96", "82AB");
mappingTable.set("AD97", "82AC");
mappingTable.set("AD98", "82AD");
mappingTable.set("AD99", "82AE");
mappingTable.set("AD9A", "82AF");
mappingTable.set("AD9B", "82B0");
mappingTable.set("AD9E", "82B1");
mappingTable.set("AD9F", "82B2");
mappingTable.set("ADA0", "82B3");
mappingTable.set("ADA1", "82B4");
mappingTable.set("ADA2", "82B5");
mappingTable.set("ADA3", "82B6");
mappingTable.set("ADA5", "82B7");
mappingTable.set("ADA6", "82B8");
mappingTable.set("ADA7", "82B9");
mappingTable.set("ADA8", "82BA");
mappingTable.set("ADA9", "82BB");
mappingTable.set("ADAA", "82BC");
mappingTable.set("ADAB", "82BD");
mappingTable.set("ADAC", "82BE");
mappingTable.set("ADAD", "82BF");
mappingTable.set("ADAE", "82C0");
mappingTable.set("ADAF", "82C1");
mappingTable.set("ADB0", "82C2");
mappingTable.set("ADB1", "82C3");
mappingTable.set("ADB2", "82C4");
mappingTable.set("ADB3", "82C5");
mappingTable.set("ADB4", "82C6");
mappingTable.set("ADB5", "82C7");
mappingTable.set("ADB6", "82C8");
mappingTable.set("ADB8", "82C9");
mappingTable.set("ADB9", "82CA");
mappingTable.set("ADBA", "82CB");
mappingTable.set("ADBB", "82CC");
mappingTable.set("ADBC", "82CD");
mappingTable.set("ADBD", "82CE");
mappingTable.set("ADBE", "82CF");
mappingTable.set("ADBF", "82D0");
mappingTable.set("ADC2", "82D1");
mappingTable.set("ADC3", "82D2");
mappingTable.set("ADC5", "82D3");
mappingTable.set("ADC6", "82D4");
mappingTable.set("ADC7", "82D5");
mappingTable.set("ADC9", "82D6");
mappingTable.set("ADCA", "82D7");
mappingTable.set("ADCB", "82D8");
mappingTable.set("ADCC", "82D9");
mappingTable.set("ADCD", "82DA");
mappingTable.set("ADCE", "82DB");
mappingTable.set("ADCF", "82DC");
mappingTable.set("ADD2", "82DD");
mappingTable.set("ADD4", "82DE");
mappingTable.set("ADD5", "82DF");
mappingTable.set("ADD6", "82E0");
mappingTable.set("ADD7", "82E1");
mappingTable.set("ADD8", "82E2");
mappingTable.set("ADD9", "82E3");
mappingTable.set("ADDA", "82E4");
mappingTable.set("ADDB", "82E5");
mappingTable.set("ADDD", "82E6");
mappingTable.set("ADDE", "82E7");
mappingTable.set("ADDF", "82E8");
mappingTable.set("ADE1", "82E9");
mappingTable.set("ADE2", "82EA");
mappingTable.set("ADE3", "82EB");
mappingTable.set("ADE5", "82EC");
mappingTable.set("ADE6", "82ED");
mappingTable.set("ADE7", "82EE");
mappingTable.set("ADE8", "82EF");
mappingTable.set("ADE9", "82F0");
mappingTable.set("ADEA", "82F1");
mappingTable.set("ADEB", "82F2");
mappingTable.set("ADEC", "82F3");
mappingTable.set("ADED", "82F4");
mappingTable.set("ADEE", "82F5");
mappingTable.set("ADEF", "82F6");
mappingTable.set("ADF0", "82F7");
mappingTable.set("ADF1", "82F8");
mappingTable.set("ADF2", "82F9");
mappingTable.set("ADF3", "82FA");
mappingTable.set("ADF4", "82FB");
mappingTable.set("ADF5", "82FC");
mappingTable.set("ADF6", "82FD");
mappingTable.set("ADF7", "82FE");
mappingTable.set("ADFA", "8341");
mappingTable.set("ADFB", "8342");
mappingTable.set("ADFD", "8343");
mappingTable.set("ADFE", "8344");
mappingTable.set("AE02", "8345");
mappingTable.set("AE03", "8346");
mappingTable.set("AE04", "8347");
mappingTable.set("AE05", "8348");
mappingTable.set("AE06", "8349");
mappingTable.set("AE07", "834A");
mappingTable.set("AE0A", "834B");
mappingTable.set("AE0C", "834C");
mappingTable.set("AE0E", "834D");
mappingTable.set("AE0F", "834E");
mappingTable.set("AE10", "834F");
mappingTable.set("AE11", "8350");
mappingTable.set("AE12", "8351");
mappingTable.set("AE13", "8352");
mappingTable.set("AE15", "8353");
mappingTable.set("AE16", "8354");
mappingTable.set("AE17", "8355");
mappingTable.set("AE18", "8356");
mappingTable.set("AE19", "8357");
mappingTable.set("AE1A", "8358");
mappingTable.set("AE1B", "8359");
mappingTable.set("AE1C", "835A");
mappingTable.set("AE1D", "8361");
mappingTable.set("AE1E", "8362");
mappingTable.set("AE1F", "8363");
mappingTable.set("AE20", "8364");
mappingTable.set("AE21", "8365");
mappingTable.set("AE22", "8366");
mappingTable.set("AE23", "8367");
mappingTable.set("AE24", "8368");
mappingTable.set("AE25", "8369");
mappingTable.set("AE26", "836A");
mappingTable.set("AE27", "836B");
mappingTable.set("AE28", "836C");
mappingTable.set("AE29", "836D");
mappingTable.set("AE2A", "836E");
mappingTable.set("AE2B", "836F");
mappingTable.set("AE2C", "8370");
mappingTable.set("AE2D", "8371");
mappingTable.set("AE2E", "8372");
mappingTable.set("AE2F", "8373");
mappingTable.set("AE32", "8374");
mappingTable.set("AE33", "8375");
mappingTable.set("AE35", "8376");
mappingTable.set("AE36", "8377");
mappingTable.set("AE39", "8378");
mappingTable.set("AE3B", "8379");
mappingTable.set("AE3C", "837A");
mappingTable.set("AE3D", "8381");
mappingTable.set("AE3E", "8382");
mappingTable.set("AE3F", "8383");
mappingTable.set("AE42", "8384");
mappingTable.set("AE44", "8385");
mappingTable.set("AE47", "8386");
mappingTable.set("AE48", "8387");
mappingTable.set("AE49", "8388");
mappingTable.set("AE4B", "8389");
mappingTable.set("AE4F", "838A");
mappingTable.set("AE51", "838B");
mappingTable.set("AE52", "838C");
mappingTable.set("AE53", "838D");
mappingTable.set("AE55", "838E");
mappingTable.set("AE57", "838F");
mappingTable.set("AE58", "8390");
mappingTable.set("AE59", "8391");
mappingTable.set("AE5A", "8392");
mappingTable.set("AE5B", "8393");
mappingTable.set("AE5E", "8394");
mappingTable.set("AE62", "8395");
mappingTable.set("AE63", "8396");
mappingTable.set("AE64", "8397");
mappingTable.set("AE66", "8398");
mappingTable.set("AE67", "8399");
mappingTable.set("AE6A", "839A");
mappingTable.set("AE6B", "839B");
mappingTable.set("AE6D", "839C");
mappingTable.set("AE6E", "839D");
mappingTable.set("AE6F", "839E");
mappingTable.set("AE71", "839F");
mappingTable.set("AE72", "83A0");
mappingTable.set("AE73", "83A1");
mappingTable.set("AE74", "83A2");
mappingTable.set("AE75", "83A3");
mappingTable.set("AE76", "83A4");
mappingTable.set("AE77", "83A5");
mappingTable.set("AE7A", "83A6");
mappingTable.set("AE7E", "83A7");
mappingTable.set("AE7F", "83A8");
mappingTable.set("AE80", "83A9");
mappingTable.set("AE81", "83AA");
mappingTable.set("AE82", "83AB");
mappingTable.set("AE83", "83AC");
mappingTable.set("AE86", "83AD");
mappingTable.set("AE87", "83AE");
mappingTable.set("AE88", "83AF");
mappingTable.set("AE89", "83B0");
mappingTable.set("AE8A", "83B1");
mappingTable.set("AE8B", "83B2");
mappingTable.set("AE8D", "83B3");
mappingTable.set("AE8E", "83B4");
mappingTable.set("AE8F", "83B5");
mappingTable.set("AE90", "83B6");
mappingTable.set("AE91", "83B7");
mappingTable.set("AE92", "83B8");
mappingTable.set("AE93", "83B9");
mappingTable.set("AE94", "83BA");
mappingTable.set("AE95", "83BB");
mappingTable.set("AE96", "83BC");
mappingTable.set("AE97", "83BD");
mappingTable.set("AE98", "83BE");
mappingTable.set("AE99", "83BF");
mappingTable.set("AE9A", "83C0");
mappingTable.set("AE9B", "83C1");
mappingTable.set("AE9C", "83C2");
mappingTable.set("AE9D", "83C3");
mappingTable.set("AE9E", "83C4");
mappingTable.set("AE9F", "83C5");
mappingTable.set("AEA0", "83C6");
mappingTable.set("AEA1", "83C7");
mappingTable.set("AEA2", "83C8");
mappingTable.set("AEA3", "83C9");
mappingTable.set("AEA4", "83CA");
mappingTable.set("AEA5", "83CB");
mappingTable.set("AEA6", "83CC");
mappingTable.set("AEA7", "83CD");
mappingTable.set("AEA8", "83CE");
mappingTable.set("AEA9", "83CF");
mappingTable.set("AEAA", "83D0");
mappingTable.set("AEAB", "83D1");
mappingTable.set("AEAC", "83D2");
mappingTable.set("AEAD", "83D3");
mappingTable.set("AEAE", "83D4");
mappingTable.set("AEAF", "83D5");
mappingTable.set("AEB0", "83D6");
mappingTable.set("AEB1", "83D7");
mappingTable.set("AEB2", "83D8");
mappingTable.set("AEB3", "83D9");
mappingTable.set("AEB4", "83DA");
mappingTable.set("AEB5", "83DB");
mappingTable.set("AEB6", "83DC");
mappingTable.set("AEB7", "83DD");
mappingTable.set("AEB8", "83DE");
mappingTable.set("AEB9", "83DF");
mappingTable.set("AEBA", "83E0");
mappingTable.set("AEBB", "83E1");
mappingTable.set("AEBF", "83E2");
mappingTable.set("AEC1", "83E3");
mappingTable.set("AEC2", "83E4");
mappingTable.set("AEC3", "83E5");
mappingTable.set("AEC5", "83E6");
mappingTable.set("AEC6", "83E7");
mappingTable.set("AEC7", "83E8");
mappingTable.set("AEC8", "83E9");
mappingTable.set("AEC9", "83EA");
mappingTable.set("AECA", "83EB");
mappingTable.set("AECB", "83EC");
mappingTable.set("AECE", "83ED");
mappingTable.set("AED2", "83EE");
mappingTable.set("AED3", "83EF");
mappingTable.set("AED4", "83F0");
mappingTable.set("AED5", "83F1");
mappingTable.set("AED6", "83F2");
mappingTable.set("AED7", "83F3");
mappingTable.set("AEDA", "83F4");
mappingTable.set("AEDB", "83F5");
mappingTable.set("AEDD", "83F6");
mappingTable.set("AEDE", "83F7");
mappingTable.set("AEDF", "83F8");
mappingTable.set("AEE0", "83F9");
mappingTable.set("AEE1", "83FA");
mappingTable.set("AEE2", "83FB");
mappingTable.set("AEE3", "83FC");
mappingTable.set("AEE4", "83FD");
mappingTable.set("AEE5", "83FE");
mappingTable.set("AEE6", "8441");
mappingTable.set("AEE7", "8442");
mappingTable.set("AEE9", "8443");
mappingTable.set("AEEA", "8444");
mappingTable.set("AEEC", "8445");
mappingTable.set("AEEE", "8446");
mappingTable.set("AEEF", "8447");
mappingTable.set("AEF0", "8448");
mappingTable.set("AEF1", "8449");
mappingTable.set("AEF2", "844A");
mappingTable.set("AEF3", "844B");
mappingTable.set("AEF5", "844C");
mappingTable.set("AEF6", "844D");
mappingTable.set("AEF7", "844E");
mappingTable.set("AEF9", "844F");
mappingTable.set("AEFA", "8450");
mappingTable.set("AEFB", "8451");
mappingTable.set("AEFD", "8452");
mappingTable.set("AEFE", "8453");
mappingTable.set("AEFF", "8454");
mappingTable.set("AF00", "8455");
mappingTable.set("AF01", "8456");
mappingTable.set("AF02", "8457");
mappingTable.set("AF03", "8458");
mappingTable.set("AF04", "8459");
mappingTable.set("AF05", "845A");
mappingTable.set("AF06", "8461");
mappingTable.set("AF09", "8462");
mappingTable.set("AF0A", "8463");
mappingTable.set("AF0B", "8464");
mappingTable.set("AF0C", "8465");
mappingTable.set("AF0E", "8466");
mappingTable.set("AF0F", "8467");
mappingTable.set("AF11", "8468");
mappingTable.set("AF12", "8469");
mappingTable.set("AF13", "846A");
mappingTable.set("AF14", "846B");
mappingTable.set("AF15", "846C");
mappingTable.set("AF16", "846D");
mappingTable.set("AF17", "846E");
mappingTable.set("AF18", "846F");
mappingTable.set("AF19", "8470");
mappingTable.set("AF1A", "8471");
mappingTable.set("AF1B", "8472");
mappingTable.set("AF1C", "8473");
mappingTable.set("AF1D", "8474");
mappingTable.set("AF1E", "8475");
mappingTable.set("AF1F", "8476");
mappingTable.set("AF20", "8477");
mappingTable.set("AF21", "8478");
mappingTable.set("AF22", "8479");
mappingTable.set("AF23", "847A");
mappingTable.set("AF24", "8481");
mappingTable.set("AF25", "8482");
mappingTable.set("AF26", "8483");
mappingTable.set("AF27", "8484");
mappingTable.set("AF28", "8485");
mappingTable.set("AF29", "8486");
mappingTable.set("AF2A", "8487");
mappingTable.set("AF2B", "8488");
mappingTable.set("AF2E", "8489");
mappingTable.set("AF2F", "848A");
mappingTable.set("AF31", "848B");
mappingTable.set("AF33", "848C");
mappingTable.set("AF35", "848D");
mappingTable.set("AF36", "848E");
mappingTable.set("AF37", "848F");
mappingTable.set("AF38", "8490");
mappingTable.set("AF39", "8491");
mappingTable.set("AF3A", "8492");
mappingTable.set("AF3B", "8493");
mappingTable.set("AF3E", "8494");
mappingTable.set("AF40", "8495");
mappingTable.set("AF44", "8496");
mappingTable.set("AF45", "8497");
mappingTable.set("AF46", "8498");
mappingTable.set("AF47", "8499");
mappingTable.set("AF4A", "849A");
mappingTable.set("AF4B", "849B");
mappingTable.set("AF4C", "849C");
mappingTable.set("AF4D", "849D");
mappingTable.set("AF4E", "849E");
mappingTable.set("AF4F", "849F");
mappingTable.set("AF51", "84A0");
mappingTable.set("AF52", "84A1");
mappingTable.set("AF53", "84A2");
mappingTable.set("AF54", "84A3");
mappingTable.set("AF55", "84A4");
mappingTable.set("AF56", "84A5");
mappingTable.set("AF57", "84A6");
mappingTable.set("AF58", "84A7");
mappingTable.set("AF59", "84A8");
mappingTable.set("AF5A", "84A9");
mappingTable.set("AF5B", "84AA");
mappingTable.set("AF5E", "84AB");
mappingTable.set("AF5F", "84AC");
mappingTable.set("AF60", "84AD");
mappingTable.set("AF61", "84AE");
mappingTable.set("AF62", "84AF");
mappingTable.set("AF63", "84B0");
mappingTable.set("AF66", "84B1");
mappingTable.set("AF67", "84B2");
mappingTable.set("AF68", "84B3");
mappingTable.set("AF69", "84B4");
mappingTable.set("AF6A", "84B5");
mappingTable.set("AF6B", "84B6");
mappingTable.set("AF6C", "84B7");
mappingTable.set("AF6D", "84B8");
mappingTable.set("AF6E", "84B9");
mappingTable.set("AF6F", "84BA");
mappingTable.set("AF70", "84BB");
mappingTable.set("AF71", "84BC");
mappingTable.set("AF72", "84BD");
mappingTable.set("AF73", "84BE");
mappingTable.set("AF74", "84BF");
mappingTable.set("AF75", "84C0");
mappingTable.set("AF76", "84C1");
mappingTable.set("AF77", "84C2");
mappingTable.set("AF78", "84C3");
mappingTable.set("AF7A", "84C4");
mappingTable.set("AF7B", "84C5");
mappingTable.set("AF7C", "84C6");
mappingTable.set("AF7D", "84C7");
mappingTable.set("AF7E", "84C8");
mappingTable.set("AF7F", "84C9");
mappingTable.set("AF81", "84CA");
mappingTable.set("AF82", "84CB");
mappingTable.set("AF83", "84CC");
mappingTable.set("AF85", "84CD");
mappingTable.set("AF86", "84CE");
mappingTable.set("AF87", "84CF");
mappingTable.set("AF89", "84D0");
mappingTable.set("AF8A", "84D1");
mappingTable.set("AF8B", "84D2");
mappingTable.set("AF8C", "84D3");
mappingTable.set("AF8D", "84D4");
mappingTable.set("AF8E", "84D5");
mappingTable.set("AF8F", "84D6");
mappingTable.set("AF92", "84D7");
mappingTable.set("AF93", "84D8");
mappingTable.set("AF94", "84D9");
mappingTable.set("AF96", "84DA");
mappingTable.set("AF97", "84DB");
mappingTable.set("AF98", "84DC");
mappingTable.set("AF99", "84DD");
mappingTable.set("AF9A", "84DE");
mappingTable.set("AF9B", "84DF");
mappingTable.set("AF9D", "84E0");
mappingTable.set("AF9E", "84E1");
mappingTable.set("AF9F", "84E2");
mappingTable.set("AFA0", "84E3");
mappingTable.set("AFA1", "84E4");
mappingTable.set("AFA2", "84E5");
mappingTable.set("AFA3", "84E6");
mappingTable.set("AFA4", "84E7");
mappingTable.set("AFA5", "84E8");
mappingTable.set("AFA6", "84E9");
mappingTable.set("AFA7", "84EA");
mappingTable.set("AFA8", "84EB");
mappingTable.set("AFA9", "84EC");
mappingTable.set("AFAA", "84ED");
mappingTable.set("AFAB", "84EE");
mappingTable.set("AFAC", "84EF");
mappingTable.set("AFAD", "84F0");
mappingTable.set("AFAE", "84F1");
mappingTable.set("AFAF", "84F2");
mappingTable.set("AFB0", "84F3");
mappingTable.set("AFB1", "84F4");
mappingTable.set("AFB2", "84F5");
mappingTable.set("AFB3", "84F6");
mappingTable.set("AFB4", "84F7");
mappingTable.set("AFB5", "84F8");
mappingTable.set("AFB6", "84F9");
mappingTable.set("AFB7", "84FA");
mappingTable.set("AFBA", "84FB");
mappingTable.set("AFBB", "84FC");
mappingTable.set("AFBD", "84FD");
mappingTable.set("AFBE", "84FE");
mappingTable.set("AFBF", "8541");
mappingTable.set("AFC1", "8542");
mappingTable.set("AFC2", "8543");
mappingTable.set("AFC3", "8544");
mappingTable.set("AFC4", "8545");
mappingTable.set("AFC5", "8546");
mappingTable.set("AFC6", "8547");
mappingTable.set("AFCA", "8548");
mappingTable.set("AFCC", "8549");
mappingTable.set("AFCF", "854A");
mappingTable.set("AFD0", "854B");
mappingTable.set("AFD1", "854C");
mappingTable.set("AFD2", "854D");
mappingTable.set("AFD3", "854E");
mappingTable.set("AFD5", "854F");
mappingTable.set("AFD6", "8550");
mappingTable.set("AFD7", "8551");
mappingTable.set("AFD8", "8552");
mappingTable.set("AFD9", "8553");
mappingTable.set("AFDA", "8554");
mappingTable.set("AFDB", "8555");
mappingTable.set("AFDD", "8556");
mappingTable.set("AFDE", "8557");
mappingTable.set("AFDF", "8558");
mappingTable.set("AFE0", "8559");
mappingTable.set("AFE1", "855A");
mappingTable.set("AFE2", "8561");
mappingTable.set("AFE3", "8562");
mappingTable.set("AFE4", "8563");
mappingTable.set("AFE5", "8564");
mappingTable.set("AFE6", "8565");
mappingTable.set("AFE7", "8566");
mappingTable.set("AFEA", "8567");
mappingTable.set("AFEB", "8568");
mappingTable.set("AFEC", "8569");
mappingTable.set("AFED", "856A");
mappingTable.set("AFEE", "856B");
mappingTable.set("AFEF", "856C");
mappingTable.set("AFF2", "856D");
mappingTable.set("AFF3", "856E");
mappingTable.set("AFF5", "856F");
mappingTable.set("AFF6", "8570");
mappingTable.set("AFF7", "8571");
mappingTable.set("AFF9", "8572");
mappingTable.set("AFFA", "8573");
mappingTable.set("AFFB", "8574");
mappingTable.set("AFFC", "8575");
mappingTable.set("AFFD", "8576");
mappingTable.set("AFFE", "8577");
mappingTable.set("AFFF", "8578");
mappingTable.set("B002", "8579");
mappingTable.set("B003", "857A");
mappingTable.set("B005", "8581");
mappingTable.set("B006", "8582");
mappingTable.set("B007", "8583");
mappingTable.set("B008", "8584");
mappingTable.set("B009", "8585");
mappingTable.set("B00A", "8586");
mappingTable.set("B00B", "8587");
mappingTable.set("B00D", "8588");
mappingTable.set("B00E", "8589");
mappingTable.set("B00F", "858A");
mappingTable.set("B011", "858B");
mappingTable.set("B012", "858C");
mappingTable.set("B013", "858D");
mappingTable.set("B015", "858E");
mappingTable.set("B016", "858F");
mappingTable.set("B017", "8590");
mappingTable.set("B018", "8591");
mappingTable.set("B019", "8592");
mappingTable.set("B01A", "8593");
mappingTable.set("B01B", "8594");
mappingTable.set("B01E", "8595");
mappingTable.set("B01F", "8596");
mappingTable.set("B020", "8597");
mappingTable.set("B021", "8598");
mappingTable.set("B022", "8599");
mappingTable.set("B023", "859A");
mappingTable.set("B024", "859B");
mappingTable.set("B025", "859C");
mappingTable.set("B026", "859D");
mappingTable.set("B027", "859E");
mappingTable.set("B029", "859F");
mappingTable.set("B02A", "85A0");
mappingTable.set("B02B", "85A1");
mappingTable.set("B02C", "85A2");
mappingTable.set("B02D", "85A3");
mappingTable.set("B02E", "85A4");
mappingTable.set("B02F", "85A5");
mappingTable.set("B030", "85A6");
mappingTable.set("B031", "85A7");
mappingTable.set("B032", "85A8");
mappingTable.set("B033", "85A9");
mappingTable.set("B034", "85AA");
mappingTable.set("B035", "85AB");
mappingTable.set("B036", "85AC");
mappingTable.set("B037", "85AD");
mappingTable.set("B038", "85AE");
mappingTable.set("B039", "85AF");
mappingTable.set("B03A", "85B0");
mappingTable.set("B03B", "85B1");
mappingTable.set("B03C", "85B2");
mappingTable.set("B03D", "85B3");
mappingTable.set("B03E", "85B4");
mappingTable.set("B03F", "85B5");
mappingTable.set("B040", "85B6");
mappingTable.set("B041", "85B7");
mappingTable.set("B042", "85B8");
mappingTable.set("B043", "85B9");
mappingTable.set("B046", "85BA");
mappingTable.set("B047", "85BB");
mappingTable.set("B049", "85BC");
mappingTable.set("B04B", "85BD");
mappingTable.set("B04D", "85BE");
mappingTable.set("B04F", "85BF");
mappingTable.set("B050", "85C0");
mappingTable.set("B051", "85C1");
mappingTable.set("B052", "85C2");
mappingTable.set("B056", "85C3");
mappingTable.set("B058", "85C4");
mappingTable.set("B05A", "85C5");
mappingTable.set("B05B", "85C6");
mappingTable.set("B05C", "85C7");
mappingTable.set("B05E", "85C8");
mappingTable.set("B05F", "85C9");
mappingTable.set("B060", "85CA");
mappingTable.set("B061", "85CB");
mappingTable.set("B062", "85CC");
mappingTable.set("B063", "85CD");
mappingTable.set("B064", "85CE");
mappingTable.set("B065", "85CF");
mappingTable.set("B066", "85D0");
mappingTable.set("B067", "85D1");
mappingTable.set("B068", "85D2");
mappingTable.set("B069", "85D3");
mappingTable.set("B06A", "85D4");
mappingTable.set("B06B", "85D5");
mappingTable.set("B06C", "85D6");
mappingTable.set("B06D", "85D7");
mappingTable.set("B06E", "85D8");
mappingTable.set("B06F", "85D9");
mappingTable.set("B070", "85DA");
mappingTable.set("B071", "85DB");
mappingTable.set("B072", "85DC");
mappingTable.set("B073", "85DD");
mappingTable.set("B074", "85DE");
mappingTable.set("B075", "85DF");
mappingTable.set("B076", "85E0");
mappingTable.set("B077", "85E1");
mappingTable.set("B078", "85E2");
mappingTable.set("B079", "85E3");
mappingTable.set("B07A", "85E4");
mappingTable.set("B07B", "85E5");
mappingTable.set("B07E", "85E6");
mappingTable.set("B07F", "85E7");
mappingTable.set("B081", "85E8");
mappingTable.set("B082", "85E9");
mappingTable.set("B083", "85EA");
mappingTable.set("B085", "85EB");
mappingTable.set("B086", "85EC");
mappingTable.set("B087", "85ED");
mappingTable.set("B088", "85EE");
mappingTable.set("B089", "85EF");
mappingTable.set("B08A", "85F0");
mappingTable.set("B08B", "85F1");
mappingTable.set("B08E", "85F2");
mappingTable.set("B090", "85F3");
mappingTable.set("B092", "85F4");
mappingTable.set("B093", "85F5");
mappingTable.set("B094", "85F6");
mappingTable.set("B095", "85F7");
mappingTable.set("B096", "85F8");
mappingTable.set("B097", "85F9");
mappingTable.set("B09B", "85FA");
mappingTable.set("B09D", "85FB");
mappingTable.set("B09E", "85FC");
mappingTable.set("B0A3", "85FD");
mappingTable.set("B0A4", "85FE");
mappingTable.set("B0A5", "8641");
mappingTable.set("B0A6", "8642");
mappingTable.set("B0A7", "8643");
mappingTable.set("B0AA", "8644");
mappingTable.set("B0B0", "8645");
mappingTable.set("B0B2", "8646");
mappingTable.set("B0B6", "8647");
mappingTable.set("B0B7", "8648");
mappingTable.set("B0B9", "8649");
mappingTable.set("B0BA", "864A");
mappingTable.set("B0BB", "864B");
mappingTable.set("B0BD", "864C");
mappingTable.set("B0BE", "864D");
mappingTable.set("B0BF", "864E");
mappingTable.set("B0C0", "864F");
mappingTable.set("B0C1", "8650");
mappingTable.set("B0C2", "8651");
mappingTable.set("B0C3", "8652");
mappingTable.set("B0C6", "8653");
mappingTable.set("B0CA", "8654");
mappingTable.set("B0CB", "8655");
mappingTable.set("B0CC", "8656");
mappingTable.set("B0CD", "8657");
mappingTable.set("B0CE", "8658");
mappingTable.set("B0CF", "8659");
mappingTable.set("B0D2", "865A");
mappingTable.set("B0D3", "8661");
mappingTable.set("B0D5", "8662");
mappingTable.set("B0D6", "8663");
mappingTable.set("B0D7", "8664");
mappingTable.set("B0D9", "8665");
mappingTable.set("B0DA", "8666");
mappingTable.set("B0DB", "8667");
mappingTable.set("B0DC", "8668");
mappingTable.set("B0DD", "8669");
mappingTable.set("B0DE", "866A");
mappingTable.set("B0DF", "866B");
mappingTable.set("B0E1", "866C");
mappingTable.set("B0E2", "866D");
mappingTable.set("B0E3", "866E");
mappingTable.set("B0E4", "866F");
mappingTable.set("B0E6", "8670");
mappingTable.set("B0E7", "8671");
mappingTable.set("B0E8", "8672");
mappingTable.set("B0E9", "8673");
mappingTable.set("B0EA", "8674");
mappingTable.set("B0EB", "8675");
mappingTable.set("B0EC", "8676");
mappingTable.set("B0ED", "8677");
mappingTable.set("B0EE", "8678");
mappingTable.set("B0EF", "8679");
mappingTable.set("B0F0", "867A");
mappingTable.set("B0F1", "8681");
mappingTable.set("B0F2", "8682");
mappingTable.set("B0F3", "8683");
mappingTable.set("B0F4", "8684");
mappingTable.set("B0F5", "8685");
mappingTable.set("B0F6", "8686");
mappingTable.set("B0F7", "8687");
mappingTable.set("B0F8", "8688");
mappingTable.set("B0F9", "8689");
mappingTable.set("B0FA", "868A");
mappingTable.set("B0FB", "868B");
mappingTable.set("B0FC", "868C");
mappingTable.set("B0FD", "868D");
mappingTable.set("B0FE", "868E");
mappingTable.set("B0FF", "868F");
mappingTable.set("B100", "8690");
mappingTable.set("B101", "8691");
mappingTable.set("B102", "8692");
mappingTable.set("B103", "8693");
mappingTable.set("B104", "8694");
mappingTable.set("B105", "8695");
mappingTable.set("B106", "8696");
mappingTable.set("B107", "8697");
mappingTable.set("B10A", "8698");
mappingTable.set("B10D", "8699");
mappingTable.set("B10E", "869A");
mappingTable.set("B10F", "869B");
mappingTable.set("B111", "869C");
mappingTable.set("B114", "869D");
mappingTable.set("B115", "869E");
mappingTable.set("B116", "869F");
mappingTable.set("B117", "86A0");
mappingTable.set("B11A", "86A1");
mappingTable.set("B11E", "86A2");
mappingTable.set("B11F", "86A3");
mappingTable.set("B120", "86A4");
mappingTable.set("B121", "86A5");
mappingTable.set("B122", "86A6");
mappingTable.set("B126", "86A7");
mappingTable.set("B127", "86A8");
mappingTable.set("B129", "86A9");
mappingTable.set("B12A", "86AA");
mappingTable.set("B12B", "86AB");
mappingTable.set("B12D", "86AC");
mappingTable.set("B12E", "86AD");
mappingTable.set("B12F", "86AE");
mappingTable.set("B130", "86AF");
mappingTable.set("B131", "86B0");
mappingTable.set("B132", "86B1");
mappingTable.set("B133", "86B2");
mappingTable.set("B136", "86B3");
mappingTable.set("B13A", "86B4");
mappingTable.set("B13B", "86B5");
mappingTable.set("B13C", "86B6");
mappingTable.set("B13D", "86B7");
mappingTable.set("B13E", "86B8");
mappingTable.set("B13F", "86B9");
mappingTable.set("B142", "86BA");
mappingTable.set("B143", "86BB");
mappingTable.set("B145", "86BC");
mappingTable.set("B146", "86BD");
mappingTable.set("B147", "86BE");
mappingTable.set("B149", "86BF");
mappingTable.set("B14A", "86C0");
mappingTable.set("B14B", "86C1");
mappingTable.set("B14C", "86C2");
mappingTable.set("B14D", "86C3");
mappingTable.set("B14E", "86C4");
mappingTable.set("B14F", "86C5");
mappingTable.set("B152", "86C6");
mappingTable.set("B153", "86C7");
mappingTable.set("B156", "86C8");
mappingTable.set("B157", "86C9");
mappingTable.set("B159", "86CA");
mappingTable.set("B15A", "86CB");
mappingTable.set("B15B", "86CC");
mappingTable.set("B15D", "86CD");
mappingTable.set("B15E", "86CE");
mappingTable.set("B15F", "86CF");
mappingTable.set("B161", "86D0");
mappingTable.set("B162", "86D1");
mappingTable.set("B163", "86D2");
mappingTable.set("B164", "86D3");
mappingTable.set("B165", "86D4");
mappingTable.set("B166", "86D5");
mappingTable.set("B167", "86D6");
mappingTable.set("B168", "86D7");
mappingTable.set("B169", "86D8");
mappingTable.set("B16A", "86D9");
mappingTable.set("B16B", "86DA");
mappingTable.set("B16C", "86DB");
mappingTable.set("B16D", "86DC");
mappingTable.set("B16E", "86DD");
mappingTable.set("B16F", "86DE");
mappingTable.set("B170", "86DF");
mappingTable.set("B171", "86E0");
mappingTable.set("B172", "86E1");
mappingTable.set("B173", "86E2");
mappingTable.set("B174", "86E3");
mappingTable.set("B175", "86E4");
mappingTable.set("B176", "86E5");
mappingTable.set("B177", "86E6");
mappingTable.set("B17A", "86E7");
mappingTable.set("B17B", "86E8");
mappingTable.set("B17D", "86E9");
mappingTable.set("B17E", "86EA");
mappingTable.set("B17F", "86EB");
mappingTable.set("B181", "86EC");
mappingTable.set("B183", "86ED");
mappingTable.set("B184", "86EE");
mappingTable.set("B185", "86EF");
mappingTable.set("B186", "86F0");
mappingTable.set("B187", "86F1");
mappingTable.set("B18A", "86F2");
mappingTable.set("B18C", "86F3");
mappingTable.set("B18E", "86F4");
mappingTable.set("B18F", "86F5");
mappingTable.set("B190", "86F6");
mappingTable.set("B191", "86F7");
mappingTable.set("B195", "86F8");
mappingTable.set("B196", "86F9");
mappingTable.set("B197", "86FA");
mappingTable.set("B199", "86FB");
mappingTable.set("B19A", "86FC");
mappingTable.set("B19B", "86FD");
mappingTable.set("B19D", "86FE");
mappingTable.set("B19E", "8741");
mappingTable.set("B19F", "8742");
mappingTable.set("B1A0", "8743");
mappingTable.set("B1A1", "8744");
mappingTable.set("B1A2", "8745");
mappingTable.set("B1A3", "8746");
mappingTable.set("B1A4", "8747");
mappingTable.set("B1A5", "8748");
mappingTable.set("B1A6", "8749");
mappingTable.set("B1A7", "874A");
mappingTable.set("B1A9", "874B");
mappingTable.set("B1AA", "874C");
mappingTable.set("B1AB", "874D");
mappingTable.set("B1AC", "874E");
mappingTable.set("B1AD", "874F");
mappingTable.set("B1AE", "8750");
mappingTable.set("B1AF", "8751");
mappingTable.set("B1B0", "8752");
mappingTable.set("B1B1", "8753");
mappingTable.set("B1B2", "8754");
mappingTable.set("B1B3", "8755");
mappingTable.set("B1B4", "8756");
mappingTable.set("B1B5", "8757");
mappingTable.set("B1B6", "8758");
mappingTable.set("B1B7", "8759");
mappingTable.set("B1B8", "875A");
mappingTable.set("B1B9", "8761");
mappingTable.set("B1BA", "8762");
mappingTable.set("B1BB", "8763");
mappingTable.set("B1BC", "8764");
mappingTable.set("B1BD", "8765");
mappingTable.set("B1BE", "8766");
mappingTable.set("B1BF", "8767");
mappingTable.set("B1C0", "8768");
mappingTable.set("B1C1", "8769");
mappingTable.set("B1C2", "876A");
mappingTable.set("B1C3", "876B");
mappingTable.set("B1C4", "876C");
mappingTable.set("B1C5", "876D");
mappingTable.set("B1C6", "876E");
mappingTable.set("B1C7", "876F");
mappingTable.set("B1C8", "8770");
mappingTable.set("B1C9", "8771");
mappingTable.set("B1CA", "8772");
mappingTable.set("B1CB", "8773");
mappingTable.set("B1CD", "8774");
mappingTable.set("B1CE", "8775");
mappingTable.set("B1CF", "8776");
mappingTable.set("B1D1", "8777");
mappingTable.set("B1D2", "8778");
mappingTable.set("B1D3", "8779");
mappingTable.set("B1D5", "877A");
mappingTable.set("B1D6", "8781");
mappingTable.set("B1D7", "8782");
mappingTable.set("B1D8", "8783");
mappingTable.set("B1D9", "8784");
mappingTable.set("B1DA", "8785");
mappingTable.set("B1DB", "8786");
mappingTable.set("B1DE", "8787");
mappingTable.set("B1E0", "8788");
mappingTable.set("B1E1", "8789");
mappingTable.set("B1E2", "878A");
mappingTable.set("B1E3", "878B");
mappingTable.set("B1E4", "878C");
mappingTable.set("B1E5", "878D");
mappingTable.set("B1E6", "878E");
mappingTable.set("B1E7", "878F");
mappingTable.set("B1EA", "8790");
mappingTable.set("B1EB", "8791");
mappingTable.set("B1ED", "8792");
mappingTable.set("B1EE", "8793");
mappingTable.set("B1EF", "8794");
mappingTable.set("B1F1", "8795");
mappingTable.set("B1F2", "8796");
mappingTable.set("B1F3", "8797");
mappingTable.set("B1F4", "8798");
mappingTable.set("B1F5", "8799");
mappingTable.set("B1F6", "879A");
mappingTable.set("B1F7", "879B");
mappingTable.set("B1F8", "879C");
mappingTable.set("B1FA", "879D");
mappingTable.set("B1FC", "879E");
mappingTable.set("B1FE", "879F");
mappingTable.set("B1FF", "87A0");
mappingTable.set("B200", "87A1");
mappingTable.set("B201", "87A2");
mappingTable.set("B202", "87A3");
mappingTable.set("B203", "87A4");
mappingTable.set("B206", "87A5");
mappingTable.set("B207", "87A6");
mappingTable.set("B209", "87A7");
mappingTable.set("B20A", "87A8");
mappingTable.set("B20D", "87A9");
mappingTable.set("B20E", "87AA");
mappingTable.set("B20F", "87AB");
mappingTable.set("B210", "87AC");
mappingTable.set("B211", "87AD");
mappingTable.set("B212", "87AE");
mappingTable.set("B213", "87AF");
mappingTable.set("B216", "87B0");
mappingTable.set("B218", "87B1");
mappingTable.set("B21A", "87B2");
mappingTable.set("B21B", "87B3");
mappingTable.set("B21C", "87B4");
mappingTable.set("B21D", "87B5");
mappingTable.set("B21E", "87B6");
mappingTable.set("B21F", "87B7");
mappingTable.set("B221", "87B8");
mappingTable.set("B222", "87B9");
mappingTable.set("B223", "87BA");
mappingTable.set("B224", "87BB");
mappingTable.set("B225", "87BC");
mappingTable.set("B226", "87BD");
mappingTable.set("B227", "87BE");
mappingTable.set("B228", "87BF");
mappingTable.set("B229", "87C0");
mappingTable.set("B22A", "87C1");
mappingTable.set("B22B", "87C2");
mappingTable.set("B22C", "87C3");
mappingTable.set("B22D", "87C4");
mappingTable.set("B22E", "87C5");
mappingTable.set("B22F", "87C6");
mappingTable.set("B230", "87C7");
mappingTable.set("B231", "87C8");
mappingTable.set("B232", "87C9");
mappingTable.set("B233", "87CA");
mappingTable.set("B235", "87CB");
mappingTable.set("B236", "87CC");
mappingTable.set("B237", "87CD");
mappingTable.set("B238", "87CE");
mappingTable.set("B239", "87CF");
mappingTable.set("B23A", "87D0");
mappingTable.set("B23B", "87D1");
mappingTable.set("B23D", "87D2");
mappingTable.set("B23E", "87D3");
mappingTable.set("B23F", "87D4");
mappingTable.set("B240", "87D5");
mappingTable.set("B241", "87D6");
mappingTable.set("B242", "87D7");
mappingTable.set("B243", "87D8");
mappingTable.set("B244", "87D9");
mappingTable.set("B245", "87DA");
mappingTable.set("B246", "87DB");
mappingTable.set("B247", "87DC");
mappingTable.set("B248", "87DD");
mappingTable.set("B249", "87DE");
mappingTable.set("B24A", "87DF");
mappingTable.set("B24B", "87E0");
mappingTable.set("B24C", "87E1");
mappingTable.set("B24D", "87E2");
mappingTable.set("B24E", "87E3");
mappingTable.set("B24F", "87E4");
mappingTable.set("B250", "87E5");
mappingTable.set("B251", "87E6");
mappingTable.set("B252", "87E7");
mappingTable.set("B253", "87E8");
mappingTable.set("B254", "87E9");
mappingTable.set("B255", "87EA");
mappingTable.set("B256", "87EB");
mappingTable.set("B257", "87EC");
mappingTable.set("B259", "87ED");
mappingTable.set("B25A", "87EE");
mappingTable.set("B25B", "87EF");
mappingTable.set("B25D", "87F0");
mappingTable.set("B25E", "87F1");
mappingTable.set("B25F", "87F2");
mappingTable.set("B261", "87F3");
mappingTable.set("B262", "87F4");
mappingTable.set("B263", "87F5");
mappingTable.set("B264", "87F6");
mappingTable.set("B265", "87F7");
mappingTable.set("B266", "87F8");
mappingTable.set("B267", "87F9");
mappingTable.set("B26A", "87FA");
mappingTable.set("B26B", "87FB");
mappingTable.set("B26C", "87FC");
mappingTable.set("B26D", "87FD");
mappingTable.set("B26E", "87FE");
mappingTable.set("B26F", "8841");
mappingTable.set("B270", "8842");
mappingTable.set("B271", "8843");
mappingTable.set("B272", "8844");
mappingTable.set("B273", "8845");
mappingTable.set("B276", "8846");
mappingTable.set("B277", "8847");
mappingTable.set("B278", "8848");
mappingTable.set("B279", "8849");
mappingTable.set("B27A", "884A");
mappingTable.set("B27B", "884B");
mappingTable.set("B27D", "884C");
mappingTable.set("B27E", "884D");
mappingTable.set("B27F", "884E");
mappingTable.set("B280", "884F");
mappingTable.set("B281", "8850");
mappingTable.set("B282", "8851");
mappingTable.set("B283", "8852");
mappingTable.set("B286", "8853");
mappingTable.set("B287", "8854");
mappingTable.set("B288", "8855");
mappingTable.set("B28A", "8856");
mappingTable.set("B28B", "8857");
mappingTable.set("B28C", "8858");
mappingTable.set("B28D", "8859");
mappingTable.set("B28E", "885A");
mappingTable.set("B28F", "8861");
mappingTable.set("B292", "8862");
mappingTable.set("B293", "8863");
mappingTable.set("B295", "8864");
mappingTable.set("B296", "8865");
mappingTable.set("B297", "8866");
mappingTable.set("B29B", "8867");
mappingTable.set("B29C", "8868");
mappingTable.set("B29D", "8869");
mappingTable.set("B29E", "886A");
mappingTable.set("B29F", "886B");
mappingTable.set("B2A2", "886C");
mappingTable.set("B2A4", "886D");
mappingTable.set("B2A7", "886E");
mappingTable.set("B2A8", "886F");
mappingTable.set("B2A9", "8870");
mappingTable.set("B2AB", "8871");
mappingTable.set("B2AD", "8872");
mappingTable.set("B2AE", "8873");
mappingTable.set("B2AF", "8874");
mappingTable.set("B2B1", "8875");
mappingTable.set("B2B2", "8876");
mappingTable.set("B2B3", "8877");
mappingTable.set("B2B5", "8878");
mappingTable.set("B2B6", "8879");
mappingTable.set("B2B7", "887A");
mappingTable.set("B2B8", "8881");
mappingTable.set("B2B9", "8882");
mappingTable.set("B2BA", "8883");
mappingTable.set("B2BB", "8884");
mappingTable.set("B2BC", "8885");
mappingTable.set("B2BD", "8886");
mappingTable.set("B2BE", "8887");
mappingTable.set("B2BF", "8888");
mappingTable.set("B2C0", "8889");
mappingTable.set("B2C1", "888A");
mappingTable.set("B2C2", "888B");
mappingTable.set("B2C3", "888C");
mappingTable.set("B2C4", "888D");
mappingTable.set("B2C5", "888E");
mappingTable.set("B2C6", "888F");
mappingTable.set("B2C7", "8890");
mappingTable.set("B2CA", "8891");
mappingTable.set("B2CB", "8892");
mappingTable.set("B2CD", "8893");
mappingTable.set("B2CE", "8894");
mappingTable.set("B2CF", "8895");
mappingTable.set("B2D1", "8896");
mappingTable.set("B2D3", "8897");
mappingTable.set("B2D4", "8898");
mappingTable.set("B2D5", "8899");
mappingTable.set("B2D6", "889A");
mappingTable.set("B2D7", "889B");
mappingTable.set("B2DA", "889C");
mappingTable.set("B2DC", "889D");
mappingTable.set("B2DE", "889E");
mappingTable.set("B2DF", "889F");
mappingTable.set("B2E0", "88A0");
mappingTable.set("B2E1", "88A1");
mappingTable.set("B2E3", "88A2");
mappingTable.set("B2E7", "88A3");
mappingTable.set("B2E9", "88A4");
mappingTable.set("B2EA", "88A5");
mappingTable.set("B2F0", "88A6");
mappingTable.set("B2F1", "88A7");
mappingTable.set("B2F2", "88A8");
mappingTable.set("B2F6", "88A9");
mappingTable.set("B2FC", "88AA");
mappingTable.set("B2FD", "88AB");
mappingTable.set("B2FE", "88AC");
mappingTable.set("B302", "88AD");
mappingTable.set("B303", "88AE");
mappingTable.set("B305", "88AF");
mappingTable.set("B306", "88B0");
mappingTable.set("B307", "88B1");
mappingTable.set("B309", "88B2");
mappingTable.set("B30A", "88B3");
mappingTable.set("B30B", "88B4");
mappingTable.set("B30C", "88B5");
mappingTable.set("B30D", "88B6");
mappingTable.set("B30E", "88B7");
mappingTable.set("B30F", "88B8");
mappingTable.set("B312", "88B9");
mappingTable.set("B316", "88BA");
mappingTable.set("B317", "88BB");
mappingTable.set("B318", "88BC");
mappingTable.set("B319", "88BD");
mappingTable.set("B31A", "88BE");
mappingTable.set("B31B", "88BF");
mappingTable.set("B31D", "88C0");
mappingTable.set("B31E", "88C1");
mappingTable.set("B31F", "88C2");
mappingTable.set("B320", "88C3");
mappingTable.set("B321", "88C4");
mappingTable.set("B322", "88C5");
mappingTable.set("B323", "88C6");
mappingTable.set("B324", "88C7");
mappingTable.set("B325", "88C8");
mappingTable.set("B326", "88C9");
mappingTable.set("B327", "88CA");
mappingTable.set("B328", "88CB");
mappingTable.set("B329", "88CC");
mappingTable.set("B32A", "88CD");
mappingTable.set("B32B", "88CE");
mappingTable.set("B32C", "88CF");
mappingTable.set("B32D", "88D0");
mappingTable.set("B32E", "88D1");
mappingTable.set("B32F", "88D2");
mappingTable.set("B330", "88D3");
mappingTable.set("B331", "88D4");
mappingTable.set("B332", "88D5");
mappingTable.set("B333", "88D6");
mappingTable.set("B334", "88D7");
mappingTable.set("B335", "88D8");
mappingTable.set("B336", "88D9");
mappingTable.set("B337", "88DA");
mappingTable.set("B338", "88DB");
mappingTable.set("B339", "88DC");
mappingTable.set("B33A", "88DD");
mappingTable.set("B33B", "88DE");
mappingTable.set("B33C", "88DF");
mappingTable.set("B33D", "88E0");
mappingTable.set("B33E", "88E1");
mappingTable.set("B33F", "88E2");
mappingTable.set("B340", "88E3");
mappingTable.set("B341", "88E4");
mappingTable.set("B342", "88E5");
mappingTable.set("B343", "88E6");
mappingTable.set("B344", "88E7");
mappingTable.set("B345", "88E8");
mappingTable.set("B346", "88E9");
mappingTable.set("B347", "88EA");
mappingTable.set("B348", "88EB");
mappingTable.set("B349", "88EC");
mappingTable.set("B34A", "88ED");
mappingTable.set("B34B", "88EE");
mappingTable.set("B34C", "88EF");
mappingTable.set("B34D", "88F0");
mappingTable.set("B34E", "88F1");
mappingTable.set("B34F", "88F2");
mappingTable.set("B350", "88F3");
mappingTable.set("B351", "88F4");
mappingTable.set("B352", "88F5");
mappingTable.set("B353", "88F6");
mappingTable.set("B357", "88F7");
mappingTable.set("B359", "88F8");
mappingTable.set("B35A", "88F9");
mappingTable.set("B35D", "88FA");
mappingTable.set("B360", "88FB");
mappingTable.set("B361", "88FC");
mappingTable.set("B362", "88FD");
mappingTable.set("B363", "88FE");
mappingTable.set("B366", "8941");
mappingTable.set("B368", "8942");
mappingTable.set("B36A", "8943");
mappingTable.set("B36C", "8944");
mappingTable.set("B36D", "8945");
mappingTable.set("B36F", "8946");
mappingTable.set("B372", "8947");
mappingTable.set("B373", "8948");
mappingTable.set("B375", "8949");
mappingTable.set("B376", "894A");
mappingTable.set("B377", "894B");
mappingTable.set("B379", "894C");
mappingTable.set("B37A", "894D");
mappingTable.set("B37B", "894E");
mappingTable.set("B37C", "894F");
mappingTable.set("B37D", "8950");
mappingTable.set("B37E", "8951");
mappingTable.set("B37F", "8952");
mappingTable.set("B382", "8953");
mappingTable.set("B386", "8954");
mappingTable.set("B387", "8955");
mappingTable.set("B388", "8956");
mappingTable.set("B389", "8957");
mappingTable.set("B38A", "8958");
mappingTable.set("B38B", "8959");
mappingTable.set("B38D", "895A");
mappingTable.set("B38E", "8961");
mappingTable.set("B38F", "8962");
mappingTable.set("B391", "8963");
mappingTable.set("B392", "8964");
mappingTable.set("B393", "8965");
mappingTable.set("B395", "8966");
mappingTable.set("B396", "8967");
mappingTable.set("B397", "8968");
mappingTable.set("B398", "8969");
mappingTable.set("B399", "896A");
mappingTable.set("B39A", "896B");
mappingTable.set("B39B", "896C");
mappingTable.set("B39C", "896D");
mappingTable.set("B39D", "896E");
mappingTable.set("B39E", "896F");
mappingTable.set("B39F", "8970");
mappingTable.set("B3A2", "8971");
mappingTable.set("B3A3", "8972");
mappingTable.set("B3A4", "8973");
mappingTable.set("B3A5", "8974");
mappingTable.set("B3A6", "8975");
mappingTable.set("B3A7", "8976");
mappingTable.set("B3A9", "8977");
mappingTable.set("B3AA", "8978");
mappingTable.set("B3AB", "8979");
mappingTable.set("B3AD", "897A");
mappingTable.set("B3AE", "8981");
mappingTable.set("B3AF", "8982");
mappingTable.set("B3B0", "8983");
mappingTable.set("B3B1", "8984");
mappingTable.set("B3B2", "8985");
mappingTable.set("B3B3", "8986");
mappingTable.set("B3B4", "8987");
mappingTable.set("B3B5", "8988");
mappingTable.set("B3B6", "8989");
mappingTable.set("B3B7", "898A");
mappingTable.set("B3B8", "898B");
mappingTable.set("B3B9", "898C");
mappingTable.set("B3BA", "898D");
mappingTable.set("B3BB", "898E");
mappingTable.set("B3BC", "898F");
mappingTable.set("B3BD", "8990");
mappingTable.set("B3BE", "8991");
mappingTable.set("B3BF", "8992");
mappingTable.set("B3C0", "8993");
mappingTable.set("B3C1", "8994");
mappingTable.set("B3C2", "8995");
mappingTable.set("B3C3", "8996");
mappingTable.set("B3C6", "8997");
mappingTable.set("B3C7", "8998");
mappingTable.set("B3C9", "8999");
mappingTable.set("B3CA", "899A");
mappingTable.set("B3CD", "899B");
mappingTable.set("B3CF", "899C");
mappingTable.set("B3D1", "899D");
mappingTable.set("B3D2", "899E");
mappingTable.set("B3D3", "899F");
mappingTable.set("B3D6", "89A0");
mappingTable.set("B3D8", "89A1");
mappingTable.set("B3DA", "89A2");
mappingTable.set("B3DC", "89A3");
mappingTable.set("B3DE", "89A4");
mappingTable.set("B3DF", "89A5");
mappingTable.set("B3E1", "89A6");
mappingTable.set("B3E2", "89A7");
mappingTable.set("B3E3", "89A8");
mappingTable.set("B3E5", "89A9");
mappingTable.set("B3E6", "89AA");
mappingTable.set("B3E7", "89AB");
mappingTable.set("B3E9", "89AC");
mappingTable.set("B3EA", "89AD");
mappingTable.set("B3EB", "89AE");
mappingTable.set("B3EC", "89AF");
mappingTable.set("B3ED", "89B0");
mappingTable.set("B3EE", "89B1");
mappingTable.set("B3EF", "89B2");
mappingTable.set("B3F0", "89B3");
mappingTable.set("B3F1", "89B4");
mappingTable.set("B3F2", "89B5");
mappingTable.set("B3F3", "89B6");
mappingTable.set("B3F4", "89B7");
mappingTable.set("B3F5", "89B8");
mappingTable.set("B3F6", "89B9");
mappingTable.set("B3F7", "89BA");
mappingTable.set("B3F8", "89BB");
mappingTable.set("B3F9", "89BC");
mappingTable.set("B3FA", "89BD");
mappingTable.set("B3FB", "89BE");
mappingTable.set("B3FD", "89BF");
mappingTable.set("B3FE", "89C0");
mappingTable.set("B3FF", "89C1");
mappingTable.set("B400", "89C2");
mappingTable.set("B401", "89C3");
mappingTable.set("B402", "89C4");
mappingTable.set("B403", "89C5");
mappingTable.set("B404", "89C6");
mappingTable.set("B405", "89C7");
mappingTable.set("B406", "89C8");
mappingTable.set("B407", "89C9");
mappingTable.set("B408", "89CA");
mappingTable.set("B409", "89CB");
mappingTable.set("B40A", "89CC");
mappingTable.set("B40B", "89CD");
mappingTable.set("B40C", "89CE");
mappingTable.set("B40D", "89CF");
mappingTable.set("B40E", "89D0");
mappingTable.set("B40F", "89D1");
mappingTable.set("B411", "89D2");
mappingTable.set("B412", "89D3");
mappingTable.set("B413", "89D4");
mappingTable.set("B414", "89D5");
mappingTable.set("B415", "89D6");
mappingTable.set("B416", "89D7");
mappingTable.set("B417", "89D8");
mappingTable.set("B419", "89D9");
mappingTable.set("B41A", "89DA");
mappingTable.set("B41B", "89DB");
mappingTable.set("B41D", "89DC");
mappingTable.set("B41E", "89DD");
mappingTable.set("B41F", "89DE");
mappingTable.set("B421", "89DF");
mappingTable.set("B422", "89E0");
mappingTable.set("B423", "89E1");
mappingTable.set("B424", "89E2");
mappingTable.set("B425", "89E3");
mappingTable.set("B426", "89E4");
mappingTable.set("B427", "89E5");
mappingTable.set("B42A", "89E6");
mappingTable.set("B42C", "89E7");
mappingTable.set("B42D", "89E8");
mappingTable.set("B42E", "89E9");
mappingTable.set("B42F", "89EA");
mappingTable.set("B430", "89EB");
mappingTable.set("B431", "89EC");
mappingTable.set("B432", "89ED");
mappingTable.set("B433", "89EE");
mappingTable.set("B435", "89EF");
mappingTable.set("B436", "89F0");
mappingTable.set("B437", "89F1");
mappingTable.set("B438", "89F2");
mappingTable.set("B439", "89F3");
mappingTable.set("B43A", "89F4");
mappingTable.set("B43B", "89F5");
mappingTable.set("B43C", "89F6");
mappingTable.set("B43D", "89F7");
mappingTable.set("B43E", "89F8");
mappingTable.set("B43F", "89F9");
mappingTable.set("B440", "89FA");
mappingTable.set("B441", "89FB");
mappingTable.set("B442", "89FC");
mappingTable.set("B443", "89FD");
mappingTable.set("B444", "89FE");
mappingTable.set("B445", "8A41");
mappingTable.set("B446", "8A42");
mappingTable.set("B447", "8A43");
mappingTable.set("B448", "8A44");
mappingTable.set("B449", "8A45");
mappingTable.set("B44A", "8A46");
mappingTable.set("B44B", "8A47");
mappingTable.set("B44C", "8A48");
mappingTable.set("B44D", "8A49");
mappingTable.set("B44E", "8A4A");
mappingTable.set("B44F", "8A4B");
mappingTable.set("B452", "8A4C");
mappingTable.set("B453", "8A4D");
mappingTable.set("B455", "8A4E");
mappingTable.set("B456", "8A4F");
mappingTable.set("B457", "8A50");
mappingTable.set("B459", "8A51");
mappingTable.set("B45A", "8A52");
mappingTable.set("B45B", "8A53");
mappingTable.set("B45C", "8A54");
mappingTable.set("B45D", "8A55");
mappingTable.set("B45E", "8A56");
mappingTable.set("B45F", "8A57");
mappingTable.set("B462", "8A58");
mappingTable.set("B464", "8A59");
mappingTable.set("B466", "8A5A");
mappingTable.set("B467", "8A61");
mappingTable.set("B468", "8A62");
mappingTable.set("B469", "8A63");
mappingTable.set("B46A", "8A64");
mappingTable.set("B46B", "8A65");
mappingTable.set("B46D", "8A66");
mappingTable.set("B46E", "8A67");
mappingTable.set("B46F", "8A68");
mappingTable.set("B470", "8A69");
mappingTable.set("B471", "8A6A");
mappingTable.set("B472", "8A6B");
mappingTable.set("B473", "8A6C");
mappingTable.set("B474", "8A6D");
mappingTable.set("B475", "8A6E");
mappingTable.set("B476", "8A6F");
mappingTable.set("B477", "8A70");
mappingTable.set("B478", "8A71");
mappingTable.set("B479", "8A72");
mappingTable.set("B47A", "8A73");
mappingTable.set("B47B", "8A74");
mappingTable.set("B47C", "8A75");
mappingTable.set("B47D", "8A76");
mappingTable.set("B47E", "8A77");
mappingTable.set("B47F", "8A78");
mappingTable.set("B481", "8A79");
mappingTable.set("B482", "8A7A");
mappingTable.set("B483", "8A81");
mappingTable.set("B484", "8A82");
mappingTable.set("B485", "8A83");
mappingTable.set("B486", "8A84");
mappingTable.set("B487", "8A85");
mappingTable.set("B489", "8A86");
mappingTable.set("B48A", "8A87");
mappingTable.set("B48B", "8A88");
mappingTable.set("B48C", "8A89");
mappingTable.set("B48D", "8A8A");
mappingTable.set("B48E", "8A8B");
mappingTable.set("B48F", "8A8C");
mappingTable.set("B490", "8A8D");
mappingTable.set("B491", "8A8E");
mappingTable.set("B492", "8A8F");
mappingTable.set("B493", "8A90");
mappingTable.set("B494", "8A91");
mappingTable.set("B495", "8A92");
mappingTable.set("B496", "8A93");
mappingTable.set("B497", "8A94");
mappingTable.set("B498", "8A95");
mappingTable.set("B499", "8A96");
mappingTable.set("B49A", "8A97");
mappingTable.set("B49B", "8A98");
mappingTable.set("B49C", "8A99");
mappingTable.set("B49E", "8A9A");
mappingTable.set("B49F", "8A9B");
mappingTable.set("B4A0", "8A9C");
mappingTable.set("B4A1", "8A9D");
mappingTable.set("B4A2", "8A9E");
mappingTable.set("B4A3", "8A9F");
mappingTable.set("B4A5", "8AA0");
mappingTable.set("B4A6", "8AA1");
mappingTable.set("B4A7", "8AA2");
mappingTable.set("B4A9", "8AA3");
mappingTable.set("B4AA", "8AA4");
mappingTable.set("B4AB", "8AA5");
mappingTable.set("B4AD", "8AA6");
mappingTable.set("B4AE", "8AA7");
mappingTable.set("B4AF", "8AA8");
mappingTable.set("B4B0", "8AA9");
mappingTable.set("B4B1", "8AAA");
mappingTable.set("B4B2", "8AAB");
mappingTable.set("B4B3", "8AAC");
mappingTable.set("B4B4", "8AAD");
mappingTable.set("B4B6", "8AAE");
mappingTable.set("B4B8", "8AAF");
mappingTable.set("B4BA", "8AB0");
mappingTable.set("B4BB", "8AB1");
mappingTable.set("B4BC", "8AB2");
mappingTable.set("B4BD", "8AB3");
mappingTable.set("B4BE", "8AB4");
mappingTable.set("B4BF", "8AB5");
mappingTable.set("B4C1", "8AB6");
mappingTable.set("B4C2", "8AB7");
mappingTable.set("B4C3", "8AB8");
mappingTable.set("B4C5", "8AB9");
mappingTable.set("B4C6", "8ABA");
mappingTable.set("B4C7", "8ABB");
mappingTable.set("B4C9", "8ABC");
mappingTable.set("B4CA", "8ABD");
mappingTable.set("B4CB", "8ABE");
mappingTable.set("B4CC", "8ABF");
mappingTable.set("B4CD", "8AC0");
mappingTable.set("B4CE", "8AC1");
mappingTable.set("B4CF", "8AC2");
mappingTable.set("B4D1", "8AC3");
mappingTable.set("B4D2", "8AC4");
mappingTable.set("B4D3", "8AC5");
mappingTable.set("B4D4", "8AC6");
mappingTable.set("B4D6", "8AC7");
mappingTable.set("B4D7", "8AC8");
mappingTable.set("B4D8", "8AC9");
mappingTable.set("B4D9", "8ACA");
mappingTable.set("B4DA", "8ACB");
mappingTable.set("B4DB", "8ACC");
mappingTable.set("B4DE", "8ACD");
mappingTable.set("B4DF", "8ACE");
mappingTable.set("B4E1", "8ACF");
mappingTable.set("B4E2", "8AD0");
mappingTable.set("B4E5", "8AD1");
mappingTable.set("B4E7", "8AD2");
mappingTable.set("B4E8", "8AD3");
mappingTable.set("B4E9", "8AD4");
mappingTable.set("B4EA", "8AD5");
mappingTable.set("B4EB", "8AD6");
mappingTable.set("B4EE", "8AD7");
mappingTable.set("B4F0", "8AD8");
mappingTable.set("B4F2", "8AD9");
mappingTable.set("B4F3", "8ADA");
mappingTable.set("B4F4", "8ADB");
mappingTable.set("B4F5", "8ADC");
mappingTable.set("B4F6", "8ADD");
mappingTable.set("B4F7", "8ADE");
mappingTable.set("B4F9", "8ADF");
mappingTable.set("B4FA", "8AE0");
mappingTable.set("B4FB", "8AE1");
mappingTable.set("B4FC", "8AE2");
mappingTable.set("B4FD", "8AE3");
mappingTable.set("B4FE", "8AE4");
mappingTable.set("B4FF", "8AE5");
mappingTable.set("B500", "8AE6");
mappingTable.set("B501", "8AE7");
mappingTable.set("B502", "8AE8");
mappingTable.set("B503", "8AE9");
mappingTable.set("B504", "8AEA");
mappingTable.set("B505", "8AEB");
mappingTable.set("B506", "8AEC");
mappingTable.set("B507", "8AED");
mappingTable.set("B508", "8AEE");
mappingTable.set("B509", "8AEF");
mappingTable.set("B50A", "8AF0");
mappingTable.set("B50B", "8AF1");
mappingTable.set("B50C", "8AF2");
mappingTable.set("B50D", "8AF3");
mappingTable.set("B50E", "8AF4");
mappingTable.set("B50F", "8AF5");
mappingTable.set("B510", "8AF6");
mappingTable.set("B511", "8AF7");
mappingTable.set("B512", "8AF8");
mappingTable.set("B513", "8AF9");
mappingTable.set("B516", "8AFA");
mappingTable.set("B517", "8AFB");
mappingTable.set("B519", "8AFC");
mappingTable.set("B51A", "8AFD");
mappingTable.set("B51D", "8AFE");
mappingTable.set("B51E", "8B41");
mappingTable.set("B51F", "8B42");
mappingTable.set("B520", "8B43");
mappingTable.set("B521", "8B44");
mappingTable.set("B522", "8B45");
mappingTable.set("B523", "8B46");
mappingTable.set("B526", "8B47");
mappingTable.set("B52B", "8B48");
mappingTable.set("B52C", "8B49");
mappingTable.set("B52D", "8B4A");
mappingTable.set("B52E", "8B4B");
mappingTable.set("B52F", "8B4C");
mappingTable.set("B532", "8B4D");
mappingTable.set("B533", "8B4E");
mappingTable.set("B535", "8B4F");
mappingTable.set("B536", "8B50");
mappingTable.set("B537", "8B51");
mappingTable.set("B539", "8B52");
mappingTable.set("B53A", "8B53");
mappingTable.set("B53B", "8B54");
mappingTable.set("B53C", "8B55");
mappingTable.set("B53D", "8B56");
mappingTable.set("B53E", "8B57");
mappingTable.set("B53F", "8B58");
mappingTable.set("B542", "8B59");
mappingTable.set("B546", "8B5A");
mappingTable.set("B547", "8B61");
mappingTable.set("B548", "8B62");
mappingTable.set("B549", "8B63");
mappingTable.set("B54A", "8B64");
mappingTable.set("B54E", "8B65");
mappingTable.set("B54F", "8B66");
mappingTable.set("B551", "8B67");
mappingTable.set("B552", "8B68");
mappingTable.set("B553", "8B69");
mappingTable.set("B555", "8B6A");
mappingTable.set("B556", "8B6B");
mappingTable.set("B557", "8B6C");
mappingTable.set("B558", "8B6D");
mappingTable.set("B559", "8B6E");
mappingTable.set("B55A", "8B6F");
mappingTable.set("B55B", "8B70");
mappingTable.set("B55E", "8B71");
mappingTable.set("B562", "8B72");
mappingTable.set("B563", "8B73");
mappingTable.set("B564", "8B74");
mappingTable.set("B565", "8B75");
mappingTable.set("B566", "8B76");
mappingTable.set("B567", "8B77");
mappingTable.set("B568", "8B78");
mappingTable.set("B569", "8B79");
mappingTable.set("B56A", "8B7A");
mappingTable.set("B56B", "8B81");
mappingTable.set("B56C", "8B82");
mappingTable.set("B56D", "8B83");
mappingTable.set("B56E", "8B84");
mappingTable.set("B56F", "8B85");
mappingTable.set("B570", "8B86");
mappingTable.set("B571", "8B87");
mappingTable.set("B572", "8B88");
mappingTable.set("B573", "8B89");
mappingTable.set("B574", "8B8A");
mappingTable.set("B575", "8B8B");
mappingTable.set("B576", "8B8C");
mappingTable.set("B577", "8B8D");
mappingTable.set("B578", "8B8E");
mappingTable.set("B579", "8B8F");
mappingTable.set("B57A", "8B90");
mappingTable.set("B57B", "8B91");
mappingTable.set("B57C", "8B92");
mappingTable.set("B57D", "8B93");
mappingTable.set("B57E", "8B94");
mappingTable.set("B57F", "8B95");
mappingTable.set("B580", "8B96");
mappingTable.set("B581", "8B97");
mappingTable.set("B582", "8B98");
mappingTable.set("B583", "8B99");
mappingTable.set("B584", "8B9A");
mappingTable.set("B585", "8B9B");
mappingTable.set("B586", "8B9C");
mappingTable.set("B587", "8B9D");
mappingTable.set("B588", "8B9E");
mappingTable.set("B589", "8B9F");
mappingTable.set("B58A", "8BA0");
mappingTable.set("B58B", "8BA1");
mappingTable.set("B58C", "8BA2");
mappingTable.set("B58D", "8BA3");
mappingTable.set("B58E", "8BA4");
mappingTable.set("B58F", "8BA5");
mappingTable.set("B590", "8BA6");
mappingTable.set("B591", "8BA7");
mappingTable.set("B592", "8BA8");
mappingTable.set("B593", "8BA9");
mappingTable.set("B594", "8BAA");
mappingTable.set("B595", "8BAB");
mappingTable.set("B596", "8BAC");
mappingTable.set("B597", "8BAD");
mappingTable.set("B598", "8BAE");
mappingTable.set("B599", "8BAF");
mappingTable.set("B59A", "8BB0");
mappingTable.set("B59B", "8BB1");
mappingTable.set("B59C", "8BB2");
mappingTable.set("B59D", "8BB3");
mappingTable.set("B59E", "8BB4");
mappingTable.set("B59F", "8BB5");
mappingTable.set("B5A2", "8BB6");
mappingTable.set("B5A3", "8BB7");
mappingTable.set("B5A5", "8BB8");
mappingTable.set("B5A6", "8BB9");
mappingTable.set("B5A7", "8BBA");
mappingTable.set("B5A9", "8BBB");
mappingTable.set("B5AC", "8BBC");
mappingTable.set("B5AD", "8BBD");
mappingTable.set("B5AE", "8BBE");
mappingTable.set("B5AF", "8BBF");
mappingTable.set("B5B2", "8BC0");
mappingTable.set("B5B6", "8BC1");
mappingTable.set("B5B7", "8BC2");
mappingTable.set("B5B8", "8BC3");
mappingTable.set("B5B9", "8BC4");
mappingTable.set("B5BA", "8BC5");
mappingTable.set("B5BE", "8BC6");
mappingTable.set("B5BF", "8BC7");
mappingTable.set("B5C1", "8BC8");
mappingTable.set("B5C2", "8BC9");
mappingTable.set("B5C3", "8BCA");
mappingTable.set("B5C5", "8BCB");
mappingTable.set("B5C6", "8BCC");
mappingTable.set("B5C7", "8BCD");
mappingTable.set("B5C8", "8BCE");
mappingTable.set("B5C9", "8BCF");
mappingTable.set("B5CA", "8BD0");
mappingTable.set("B5CB", "8BD1");
mappingTable.set("B5CE", "8BD2");
mappingTable.set("B5D2", "8BD3");
mappingTable.set("B5D3", "8BD4");
mappingTable.set("B5D4", "8BD5");
mappingTable.set("B5D5", "8BD6");
mappingTable.set("B5D6", "8BD7");
mappingTable.set("B5D7", "8BD8");
mappingTable.set("B5D9", "8BD9");
mappingTable.set("B5DA", "8BDA");
mappingTable.set("B5DB", "8BDB");
mappingTable.set("B5DC", "8BDC");
mappingTable.set("B5DD", "8BDD");
mappingTable.set("B5DE", "8BDE");
mappingTable.set("B5DF", "8BDF");
mappingTable.set("B5E0", "8BE0");
mappingTable.set("B5E1", "8BE1");
mappingTable.set("B5E2", "8BE2");
mappingTable.set("B5E3", "8BE3");
mappingTable.set("B5E4", "8BE4");
mappingTable.set("B5E5", "8BE5");
mappingTable.set("B5E6", "8BE6");
mappingTable.set("B5E7", "8BE7");
mappingTable.set("B5E8", "8BE8");
mappingTable.set("B5E9", "8BE9");
mappingTable.set("B5EA", "8BEA");
mappingTable.set("B5EB", "8BEB");
mappingTable.set("B5ED", "8BEC");
mappingTable.set("B5EE", "8BED");
mappingTable.set("B5EF", "8BEE");
mappingTable.set("B5F0", "8BEF");
mappingTable.set("B5F1", "8BF0");
mappingTable.set("B5F2", "8BF1");
mappingTable.set("B5F3", "8BF2");
mappingTable.set("B5F4", "8BF3");
mappingTable.set("B5F5", "8BF4");
mappingTable.set("B5F6", "8BF5");
mappingTable.set("B5F7", "8BF6");
mappingTable.set("B5F8", "8BF7");
mappingTable.set("B5F9", "8BF8");
mappingTable.set("B5FA", "8BF9");
mappingTable.set("B5FB", "8BFA");
mappingTable.set("B5FC", "8BFB");
mappingTable.set("B5FD", "8BFC");
mappingTable.set("B5FE", "8BFD");
mappingTable.set("B5FF", "8BFE");
mappingTable.set("B600", "8C41");
mappingTable.set("B601", "8C42");
mappingTable.set("B602", "8C43");
mappingTable.set("B603", "8C44");
mappingTable.set("B604", "8C45");
mappingTable.set("B605", "8C46");
mappingTable.set("B606", "8C47");
mappingTable.set("B607", "8C48");
mappingTable.set("B608", "8C49");
mappingTable.set("B609", "8C4A");
mappingTable.set("B60A", "8C4B");
mappingTable.set("B60B", "8C4C");
mappingTable.set("B60C", "8C4D");
mappingTable.set("B60D", "8C4E");
mappingTable.set("B60E", "8C4F");
mappingTable.set("B60F", "8C50");
mappingTable.set("B612", "8C51");
mappingTable.set("B613", "8C52");
mappingTable.set("B615", "8C53");
mappingTable.set("B616", "8C54");
mappingTable.set("B617", "8C55");
mappingTable.set("B619", "8C56");
mappingTable.set("B61A", "8C57");
mappingTable.set("B61B", "8C58");
mappingTable.set("B61C", "8C59");
mappingTable.set("B61D", "8C5A");
mappingTable.set("B61E", "8C61");
mappingTable.set("B61F", "8C62");
mappingTable.set("B620", "8C63");
mappingTable.set("B621", "8C64");
mappingTable.set("B622", "8C65");
mappingTable.set("B623", "8C66");
mappingTable.set("B624", "8C67");
mappingTable.set("B626", "8C68");
mappingTable.set("B627", "8C69");
mappingTable.set("B628", "8C6A");
mappingTable.set("B629", "8C6B");
mappingTable.set("B62A", "8C6C");
mappingTable.set("B62B", "8C6D");
mappingTable.set("B62D", "8C6E");
mappingTable.set("B62E", "8C6F");
mappingTable.set("B62F", "8C70");
mappingTable.set("B630", "8C71");
mappingTable.set("B631", "8C72");
mappingTable.set("B632", "8C73");
mappingTable.set("B633", "8C74");
mappingTable.set("B635", "8C75");
mappingTable.set("B636", "8C76");
mappingTable.set("B637", "8C77");
mappingTable.set("B638", "8C78");
mappingTable.set("B639", "8C79");
mappingTable.set("B63A", "8C7A");
mappingTable.set("B63B", "8C81");
mappingTable.set("B63C", "8C82");
mappingTable.set("B63D", "8C83");
mappingTable.set("B63E", "8C84");
mappingTable.set("B63F", "8C85");
mappingTable.set("B640", "8C86");
mappingTable.set("B641", "8C87");
mappingTable.set("B642", "8C88");
mappingTable.set("B643", "8C89");
mappingTable.set("B644", "8C8A");
mappingTable.set("B645", "8C8B");
mappingTable.set("B646", "8C8C");
mappingTable.set("B647", "8C8D");
mappingTable.set("B649", "8C8E");
mappingTable.set("B64A", "8C8F");
mappingTable.set("B64B", "8C90");
mappingTable.set("B64C", "8C91");
mappingTable.set("B64D", "8C92");
mappingTable.set("B64E", "8C93");
mappingTable.set("B64F", "8C94");
mappingTable.set("B650", "8C95");
mappingTable.set("B651", "8C96");
mappingTable.set("B652", "8C97");
mappingTable.set("B653", "8C98");
mappingTable.set("B654", "8C99");
mappingTable.set("B655", "8C9A");
mappingTable.set("B656", "8C9B");
mappingTable.set("B657", "8C9C");
mappingTable.set("B658", "8C9D");
mappingTable.set("B659", "8C9E");
mappingTable.set("B65A", "8C9F");
mappingTable.set("B65B", "8CA0");
mappingTable.set("B65C", "8CA1");
mappingTable.set("B65D", "8CA2");
mappingTable.set("B65E", "8CA3");
mappingTable.set("B65F", "8CA4");
mappingTable.set("B660", "8CA5");
mappingTable.set("B661", "8CA6");
mappingTable.set("B662", "8CA7");
mappingTable.set("B663", "8CA8");
mappingTable.set("B665", "8CA9");
mappingTable.set("B666", "8CAA");
mappingTable.set("B667", "8CAB");
mappingTable.set("B669", "8CAC");
mappingTable.set("B66A", "8CAD");
mappingTable.set("B66B", "8CAE");
mappingTable.set("B66C", "8CAF");
mappingTable.set("B66D", "8CB0");
mappingTable.set("B66E", "8CB1");
mappingTable.set("B66F", "8CB2");
mappingTable.set("B670", "8CB3");
mappingTable.set("B671", "8CB4");
mappingTable.set("B672", "8CB5");
mappingTable.set("B673", "8CB6");
mappingTable.set("B674", "8CB7");
mappingTable.set("B675", "8CB8");
mappingTable.set("B676", "8CB9");
mappingTable.set("B677", "8CBA");
mappingTable.set("B678", "8CBB");
mappingTable.set("B679", "8CBC");
mappingTable.set("B67A", "8CBD");
mappingTable.set("B67B", "8CBE");
mappingTable.set("B67C", "8CBF");
mappingTable.set("B67D", "8CC0");
mappingTable.set("B67E", "8CC1");
mappingTable.set("B67F", "8CC2");
mappingTable.set("B680", "8CC3");
mappingTable.set("B681", "8CC4");
mappingTable.set("B682", "8CC5");
mappingTable.set("B683", "8CC6");
mappingTable.set("B684", "8CC7");
mappingTable.set("B685", "8CC8");
mappingTable.set("B686", "8CC9");
mappingTable.set("B687", "8CCA");
mappingTable.set("B688", "8CCB");
mappingTable.set("B689", "8CCC");
mappingTable.set("B68A", "8CCD");
mappingTable.set("B68B", "8CCE");
mappingTable.set("B68C", "8CCF");
mappingTable.set("B68D", "8CD0");
mappingTable.set("B68E", "8CD1");
mappingTable.set("B68F", "8CD2");
mappingTable.set("B690", "8CD3");
mappingTable.set("B691", "8CD4");
mappingTable.set("B692", "8CD5");
mappingTable.set("B693", "8CD6");
mappingTable.set("B694", "8CD7");
mappingTable.set("B695", "8CD8");
mappingTable.set("B696", "8CD9");
mappingTable.set("B697", "8CDA");
mappingTable.set("B698", "8CDB");
mappingTable.set("B699", "8CDC");
mappingTable.set("B69A", "8CDD");
mappingTable.set("B69B", "8CDE");
mappingTable.set("B69E", "8CDF");
mappingTable.set("B69F", "8CE0");
mappingTable.set("B6A1", "8CE1");
mappingTable.set("B6A2", "8CE2");
mappingTable.set("B6A3", "8CE3");
mappingTable.set("B6A5", "8CE4");
mappingTable.set("B6A6", "8CE5");
mappingTable.set("B6A7", "8CE6");
mappingTable.set("B6A8", "8CE7");
mappingTable.set("B6A9", "8CE8");
mappingTable.set("B6AA", "8CE9");
mappingTable.set("B6AD", "8CEA");
mappingTable.set("B6AE", "8CEB");
mappingTable.set("B6AF", "8CEC");
mappingTable.set("B6B0", "8CED");
mappingTable.set("B6B2", "8CEE");
mappingTable.set("B6B3", "8CEF");
mappingTable.set("B6B4", "8CF0");
mappingTable.set("B6B5", "8CF1");
mappingTable.set("B6B6", "8CF2");
mappingTable.set("B6B7", "8CF3");
mappingTable.set("B6B8", "8CF4");
mappingTable.set("B6B9", "8CF5");
mappingTable.set("B6BA", "8CF6");
mappingTable.set("B6BB", "8CF7");
mappingTable.set("B6BC", "8CF8");
mappingTable.set("B6BD", "8CF9");
mappingTable.set("B6BE", "8CFA");
mappingTable.set("B6BF", "8CFB");
mappingTable.set("B6C0", "8CFC");
mappingTable.set("B6C1", "8CFD");
mappingTable.set("B6C2", "8CFE");
mappingTable.set("B6C3", "8D41");
mappingTable.set("B6C4", "8D42");
mappingTable.set("B6C5", "8D43");
mappingTable.set("B6C6", "8D44");
mappingTable.set("B6C7", "8D45");
mappingTable.set("B6C8", "8D46");
mappingTable.set("B6C9", "8D47");
mappingTable.set("B6CA", "8D48");
mappingTable.set("B6CB", "8D49");
mappingTable.set("B6CC", "8D4A");
mappingTable.set("B6CD", "8D4B");
mappingTable.set("B6CE", "8D4C");
mappingTable.set("B6CF", "8D4D");
mappingTable.set("B6D0", "8D4E");
mappingTable.set("B6D1", "8D4F");
mappingTable.set("B6D2", "8D50");
mappingTable.set("B6D3", "8D51");
mappingTable.set("B6D5", "8D52");
mappingTable.set("B6D6", "8D53");
mappingTable.set("B6D7", "8D54");
mappingTable.set("B6D8", "8D55");
mappingTable.set("B6D9", "8D56");
mappingTable.set("B6DA", "8D57");
mappingTable.set("B6DB", "8D58");
mappingTable.set("B6DC", "8D59");
mappingTable.set("B6DD", "8D5A");
mappingTable.set("B6DE", "8D61");
mappingTable.set("B6DF", "8D62");
mappingTable.set("B6E0", "8D63");
mappingTable.set("B6E1", "8D64");
mappingTable.set("B6E2", "8D65");
mappingTable.set("B6E3", "8D66");
mappingTable.set("B6E4", "8D67");
mappingTable.set("B6E5", "8D68");
mappingTable.set("B6E6", "8D69");
mappingTable.set("B6E7", "8D6A");
mappingTable.set("B6E8", "8D6B");
mappingTable.set("B6E9", "8D6C");
mappingTable.set("B6EA", "8D6D");
mappingTable.set("B6EB", "8D6E");
mappingTable.set("B6EC", "8D6F");
mappingTable.set("B6ED", "8D70");
mappingTable.set("B6EE", "8D71");
mappingTable.set("B6EF", "8D72");
mappingTable.set("B6F1", "8D73");
mappingTable.set("B6F2", "8D74");
mappingTable.set("B6F3", "8D75");
mappingTable.set("B6F5", "8D76");
mappingTable.set("B6F6", "8D77");
mappingTable.set("B6F7", "8D78");
mappingTable.set("B6F9", "8D79");
mappingTable.set("B6FA", "8D7A");
mappingTable.set("B6FB", "8D81");
mappingTable.set("B6FC", "8D82");
mappingTable.set("B6FD", "8D83");
mappingTable.set("B6FE", "8D84");
mappingTable.set("B6FF", "8D85");
mappingTable.set("B702", "8D86");
mappingTable.set("B703", "8D87");
mappingTable.set("B704", "8D88");
mappingTable.set("B706", "8D89");
mappingTable.set("B707", "8D8A");
mappingTable.set("B708", "8D8B");
mappingTable.set("B709", "8D8C");
mappingTable.set("B70A", "8D8D");
mappingTable.set("B70B", "8D8E");
mappingTable.set("B70C", "8D8F");
mappingTable.set("B70D", "8D90");
mappingTable.set("B70E", "8D91");
mappingTable.set("B70F", "8D92");
mappingTable.set("B710", "8D93");
mappingTable.set("B711", "8D94");
mappingTable.set("B712", "8D95");
mappingTable.set("B713", "8D96");
mappingTable.set("B714", "8D97");
mappingTable.set("B715", "8D98");
mappingTable.set("B716", "8D99");
mappingTable.set("B717", "8D9A");
mappingTable.set("B718", "8D9B");
mappingTable.set("B719", "8D9C");
mappingTable.set("B71A", "8D9D");
mappingTable.set("B71B", "8D9E");
mappingTable.set("B71C", "8D9F");
mappingTable.set("B71D", "8DA0");
mappingTable.set("B71E", "8DA1");
mappingTable.set("B71F", "8DA2");
mappingTable.set("B720", "8DA3");
mappingTable.set("B721", "8DA4");
mappingTable.set("B722", "8DA5");
mappingTable.set("B723", "8DA6");
mappingTable.set("B724", "8DA7");
mappingTable.set("B725", "8DA8");
mappingTable.set("B726", "8DA9");
mappingTable.set("B727", "8DAA");
mappingTable.set("B72A", "8DAB");
mappingTable.set("B72B", "8DAC");
mappingTable.set("B72D", "8DAD");
mappingTable.set("B72E", "8DAE");
mappingTable.set("B731", "8DAF");
mappingTable.set("B732", "8DB0");
mappingTable.set("B733", "8DB1");
mappingTable.set("B734", "8DB2");
mappingTable.set("B735", "8DB3");
mappingTable.set("B736", "8DB4");
mappingTable.set("B737", "8DB5");
mappingTable.set("B73A", "8DB6");
mappingTable.set("B73C", "8DB7");
mappingTable.set("B73D", "8DB8");
mappingTable.set("B73E", "8DB9");
mappingTable.set("B73F", "8DBA");
mappingTable.set("B740", "8DBB");
mappingTable.set("B741", "8DBC");
mappingTable.set("B742", "8DBD");
mappingTable.set("B743", "8DBE");
mappingTable.set("B745", "8DBF");
mappingTable.set("B746", "8DC0");
mappingTable.set("B747", "8DC1");
mappingTable.set("B749", "8DC2");
mappingTable.set("B74A", "8DC3");
mappingTable.set("B74B", "8DC4");
mappingTable.set("B74D", "8DC5");
mappingTable.set("B74E", "8DC6");
mappingTable.set("B74F", "8DC7");
mappingTable.set("B750", "8DC8");
mappingTable.set("B751", "8DC9");
mappingTable.set("B752", "8DCA");
mappingTable.set("B753", "8DCB");
mappingTable.set("B756", "8DCC");
mappingTable.set("B757", "8DCD");
mappingTable.set("B758", "8DCE");
mappingTable.set("B759", "8DCF");
mappingTable.set("B75A", "8DD0");
mappingTable.set("B75B", "8DD1");
mappingTable.set("B75C", "8DD2");
mappingTable.set("B75D", "8DD3");
mappingTable.set("B75E", "8DD4");
mappingTable.set("B75F", "8DD5");
mappingTable.set("B761", "8DD6");
mappingTable.set("B762", "8DD7");
mappingTable.set("B763", "8DD8");
mappingTable.set("B765", "8DD9");
mappingTable.set("B766", "8DDA");
mappingTable.set("B767", "8DDB");
mappingTable.set("B769", "8DDC");
mappingTable.set("B76A", "8DDD");
mappingTable.set("B76B", "8DDE");
mappingTable.set("B76C", "8DDF");
mappingTable.set("B76D", "8DE0");
mappingTable.set("B76E", "8DE1");
mappingTable.set("B76F", "8DE2");
mappingTable.set("B772", "8DE3");
mappingTable.set("B774", "8DE4");
mappingTable.set("B776", "8DE5");
mappingTable.set("B777", "8DE6");
mappingTable.set("B778", "8DE7");
mappingTable.set("B779", "8DE8");
mappingTable.set("B77A", "8DE9");
mappingTable.set("B77B", "8DEA");
mappingTable.set("B77E", "8DEB");
mappingTable.set("B77F", "8DEC");
mappingTable.set("B781", "8DED");
mappingTable.set("B782", "8DEE");
mappingTable.set("B783", "8DEF");
mappingTable.set("B785", "8DF0");
mappingTable.set("B786", "8DF1");
mappingTable.set("B787", "8DF2");
mappingTable.set("B788", "8DF3");
mappingTable.set("B789", "8DF4");
mappingTable.set("B78A", "8DF5");
mappingTable.set("B78B", "8DF6");
mappingTable.set("B78E", "8DF7");
mappingTable.set("B793", "8DF8");
mappingTable.set("B794", "8DF9");
mappingTable.set("B795", "8DFA");
mappingTable.set("B79A", "8DFB");
mappingTable.set("B79B", "8DFC");
mappingTable.set("B79D", "8DFD");
mappingTable.set("B79E", "8DFE");
mappingTable.set("B79F", "8E41");
mappingTable.set("B7A1", "8E42");
mappingTable.set("B7A2", "8E43");
mappingTable.set("B7A3", "8E44");
mappingTable.set("B7A4", "8E45");
mappingTable.set("B7A5", "8E46");
mappingTable.set("B7A6", "8E47");
mappingTable.set("B7A7", "8E48");
mappingTable.set("B7AA", "8E49");
mappingTable.set("B7AE", "8E4A");
mappingTable.set("B7AF", "8E4B");
mappingTable.set("B7B0", "8E4C");
mappingTable.set("B7B1", "8E4D");
mappingTable.set("B7B2", "8E4E");
mappingTable.set("B7B3", "8E4F");
mappingTable.set("B7B6", "8E50");
mappingTable.set("B7B7", "8E51");
mappingTable.set("B7B9", "8E52");
mappingTable.set("B7BA", "8E53");
mappingTable.set("B7BB", "8E54");
mappingTable.set("B7BC", "8E55");
mappingTable.set("B7BD", "8E56");
mappingTable.set("B7BE", "8E57");
mappingTable.set("B7BF", "8E58");
mappingTable.set("B7C0", "8E59");
mappingTable.set("B7C1", "8E5A");
mappingTable.set("B7C2", "8E61");
mappingTable.set("B7C3", "8E62");
mappingTable.set("B7C4", "8E63");
mappingTable.set("B7C5", "8E64");
mappingTable.set("B7C6", "8E65");
mappingTable.set("B7C8", "8E66");
mappingTable.set("B7CA", "8E67");
mappingTable.set("B7CB", "8E68");
mappingTable.set("B7CC", "8E69");
mappingTable.set("B7CD", "8E6A");
mappingTable.set("B7CE", "8E6B");
mappingTable.set("B7CF", "8E6C");
mappingTable.set("B7D0", "8E6D");
mappingTable.set("B7D1", "8E6E");
mappingTable.set("B7D2", "8E6F");
mappingTable.set("B7D3", "8E70");
mappingTable.set("B7D4", "8E71");
mappingTable.set("B7D5", "8E72");
mappingTable.set("B7D6", "8E73");
mappingTable.set("B7D7", "8E74");
mappingTable.set("B7D8", "8E75");
mappingTable.set("B7D9", "8E76");
mappingTable.set("B7DA", "8E77");
mappingTable.set("B7DB", "8E78");
mappingTable.set("B7DC", "8E79");
mappingTable.set("B7DD", "8E7A");
mappingTable.set("B7DE", "8E81");
mappingTable.set("B7DF", "8E82");
mappingTable.set("B7E0", "8E83");
mappingTable.set("B7E1", "8E84");
mappingTable.set("B7E2", "8E85");
mappingTable.set("B7E3", "8E86");
mappingTable.set("B7E4", "8E87");
mappingTable.set("B7E5", "8E88");
mappingTable.set("B7E6", "8E89");
mappingTable.set("B7E7", "8E8A");
mappingTable.set("B7E8", "8E8B");
mappingTable.set("B7E9", "8E8C");
mappingTable.set("B7EA", "8E8D");
mappingTable.set("B7EB", "8E8E");
mappingTable.set("B7EE", "8E8F");
mappingTable.set("B7EF", "8E90");
mappingTable.set("B7F1", "8E91");
mappingTable.set("B7F2", "8E92");
mappingTable.set("B7F3", "8E93");
mappingTable.set("B7F5", "8E94");
mappingTable.set("B7F6", "8E95");
mappingTable.set("B7F7", "8E96");
mappingTable.set("B7F8", "8E97");
mappingTable.set("B7F9", "8E98");
mappingTable.set("B7FA", "8E99");
mappingTable.set("B7FB", "8E9A");
mappingTable.set("B7FE", "8E9B");
mappingTable.set("B802", "8E9C");
mappingTable.set("B803", "8E9D");
mappingTable.set("B804", "8E9E");
mappingTable.set("B805", "8E9F");
mappingTable.set("B806", "8EA0");
mappingTable.set("B80A", "8EA1");
mappingTable.set("B80B", "8EA2");
mappingTable.set("B80D", "8EA3");
mappingTable.set("B80E", "8EA4");
mappingTable.set("B80F", "8EA5");
mappingTable.set("B811", "8EA6");
mappingTable.set("B812", "8EA7");
mappingTable.set("B813", "8EA8");
mappingTable.set("B814", "8EA9");
mappingTable.set("B815", "8EAA");
mappingTable.set("B816", "8EAB");
mappingTable.set("B817", "8EAC");
mappingTable.set("B81A", "8EAD");
mappingTable.set("B81C", "8EAE");
mappingTable.set("B81E", "8EAF");
mappingTable.set("B81F", "8EB0");
mappingTable.set("B820", "8EB1");
mappingTable.set("B821", "8EB2");
mappingTable.set("B822", "8EB3");
mappingTable.set("B823", "8EB4");
mappingTable.set("B826", "8EB5");
mappingTable.set("B827", "8EB6");
mappingTable.set("B829", "8EB7");
mappingTable.set("B82A", "8EB8");
mappingTable.set("B82B", "8EB9");
mappingTable.set("B82D", "8EBA");
mappingTable.set("B82E", "8EBB");
mappingTable.set("B82F", "8EBC");
mappingTable.set("B830", "8EBD");
mappingTable.set("B831", "8EBE");
mappingTable.set("B832", "8EBF");
mappingTable.set("B833", "8EC0");
mappingTable.set("B836", "8EC1");
mappingTable.set("B83A", "8EC2");
mappingTable.set("B83B", "8EC3");
mappingTable.set("B83C", "8EC4");
mappingTable.set("B83D", "8EC5");
mappingTable.set("B83E", "8EC6");
mappingTable.set("B83F", "8EC7");
mappingTable.set("B841", "8EC8");
mappingTable.set("B842", "8EC9");
mappingTable.set("B843", "8ECA");
mappingTable.set("B845", "8ECB");
mappingTable.set("B846", "8ECC");
mappingTable.set("B847", "8ECD");
mappingTable.set("B848", "8ECE");
mappingTable.set("B849", "8ECF");
mappingTable.set("B84A", "8ED0");
mappingTable.set("B84B", "8ED1");
mappingTable.set("B84C", "8ED2");
mappingTable.set("B84D", "8ED3");
mappingTable.set("B84E", "8ED4");
mappingTable.set("B84F", "8ED5");
mappingTable.set("B850", "8ED6");
mappingTable.set("B852", "8ED7");
mappingTable.set("B854", "8ED8");
mappingTable.set("B855", "8ED9");
mappingTable.set("B856", "8EDA");
mappingTable.set("B857", "8EDB");
mappingTable.set("B858", "8EDC");
mappingTable.set("B859", "8EDD");
mappingTable.set("B85A", "8EDE");
mappingTable.set("B85B", "8EDF");
mappingTable.set("B85E", "8EE0");
mappingTable.set("B85F", "8EE1");
mappingTable.set("B861", "8EE2");
mappingTable.set("B862", "8EE3");
mappingTable.set("B863", "8EE4");
mappingTable.set("B865", "8EE5");
mappingTable.set("B866", "8EE6");
mappingTable.set("B867", "8EE7");
mappingTable.set("B868", "8EE8");
mappingTable.set("B869", "8EE9");
mappingTable.set("B86A", "8EEA");
mappingTable.set("B86B", "8EEB");
mappingTable.set("B86E", "8EEC");
mappingTable.set("B870", "8EED");
mappingTable.set("B872", "8EEE");
mappingTable.set("B873", "8EEF");
mappingTable.set("B874", "8EF0");
mappingTable.set("B875", "8EF1");
mappingTable.set("B876", "8EF2");
mappingTable.set("B877", "8EF3");
mappingTable.set("B879", "8EF4");
mappingTable.set("B87A", "8EF5");
mappingTable.set("B87B", "8EF6");
mappingTable.set("B87D", "8EF7");
mappingTable.set("B87E", "8EF8");
mappingTable.set("B87F", "8EF9");
mappingTable.set("B880", "8EFA");
mappingTable.set("B881", "8EFB");
mappingTable.set("B882", "8EFC");
mappingTable.set("B883", "8EFD");
mappingTable.set("B884", "8EFE");
mappingTable.set("B885", "8F41");
mappingTable.set("B886", "8F42");
mappingTable.set("B887", "8F43");
mappingTable.set("B888", "8F44");
mappingTable.set("B889", "8F45");
mappingTable.set("B88A", "8F46");
mappingTable.set("B88B", "8F47");
mappingTable.set("B88C", "8F48");
mappingTable.set("B88E", "8F49");
mappingTable.set("B88F", "8F4A");
mappingTable.set("B890", "8F4B");
mappingTable.set("B891", "8F4C");
mappingTable.set("B892", "8F4D");
mappingTable.set("B893", "8F4E");
mappingTable.set("B894", "8F4F");
mappingTable.set("B895", "8F50");
mappingTable.set("B896", "8F51");
mappingTable.set("B897", "8F52");
mappingTable.set("B898", "8F53");
mappingTable.set("B899", "8F54");
mappingTable.set("B89A", "8F55");
mappingTable.set("B89B", "8F56");
mappingTable.set("B89C", "8F57");
mappingTable.set("B89D", "8F58");
mappingTable.set("B89E", "8F59");
mappingTable.set("B89F", "8F5A");
mappingTable.set("B8A0", "8F61");
mappingTable.set("B8A1", "8F62");
mappingTable.set("B8A2", "8F63");
mappingTable.set("B8A3", "8F64");
mappingTable.set("B8A4", "8F65");
mappingTable.set("B8A5", "8F66");
mappingTable.set("B8A6", "8F67");
mappingTable.set("B8A7", "8F68");
mappingTable.set("B8A9", "8F69");
mappingTable.set("B8AA", "8F6A");
mappingTable.set("B8AB", "8F6B");
mappingTable.set("B8AC", "8F6C");
mappingTable.set("B8AD", "8F6D");
mappingTable.set("B8AE", "8F6E");
mappingTable.set("B8AF", "8F6F");
mappingTable.set("B8B1", "8F70");
mappingTable.set("B8B2", "8F71");
mappingTable.set("B8B3", "8F72");
mappingTable.set("B8B5", "8F73");
mappingTable.set("B8B6", "8F74");
mappingTable.set("B8B7", "8F75");
mappingTable.set("B8B9", "8F76");
mappingTable.set("B8BA", "8F77");
mappingTable.set("B8BB", "8F78");
mappingTable.set("B8BC", "8F79");
mappingTable.set("B8BD", "8F7A");
mappingTable.set("B8BE", "8F81");
mappingTable.set("B8BF", "8F82");
mappingTable.set("B8C2", "8F83");
mappingTable.set("B8C4", "8F84");
mappingTable.set("B8C6", "8F85");
mappingTable.set("B8C7", "8F86");
mappingTable.set("B8C8", "8F87");
mappingTable.set("B8C9", "8F88");
mappingTable.set("B8CA", "8F89");
mappingTable.set("B8CB", "8F8A");
mappingTable.set("B8CD", "8F8B");
mappingTable.set("B8CE", "8F8C");
mappingTable.set("B8CF", "8F8D");
mappingTable.set("B8D1", "8F8E");
mappingTable.set("B8D2", "8F8F");
mappingTable.set("B8D3", "8F90");
mappingTable.set("B8D5", "8F91");
mappingTable.set("B8D6", "8F92");
mappingTable.set("B8D7", "8F93");
mappingTable.set("B8D8", "8F94");
mappingTable.set("B8D9", "8F95");
mappingTable.set("B8DA", "8F96");
mappingTable.set("B8DB", "8F97");
mappingTable.set("B8DC", "8F98");
mappingTable.set("B8DE", "8F99");
mappingTable.set("B8E0", "8F9A");
mappingTable.set("B8E2", "8F9B");
mappingTable.set("B8E3", "8F9C");
mappingTable.set("B8E4", "8F9D");
mappingTable.set("B8E5", "8F9E");
mappingTable.set("B8E6", "8F9F");
mappingTable.set("B8E7", "8FA0");
mappingTable.set("B8EA", "8FA1");
mappingTable.set("B8EB", "8FA2");
mappingTable.set("B8ED", "8FA3");
mappingTable.set("B8EE", "8FA4");
mappingTable.set("B8EF", "8FA5");
mappingTable.set("B8F1", "8FA6");
mappingTable.set("B8F2", "8FA7");
mappingTable.set("B8F3", "8FA8");
mappingTable.set("B8F4", "8FA9");
mappingTable.set("B8F5", "8FAA");
mappingTable.set("B8F6", "8FAB");
mappingTable.set("B8F7", "8FAC");
mappingTable.set("B8FA", "8FAD");
mappingTable.set("B8FC", "8FAE");
mappingTable.set("B8FE", "8FAF");
mappingTable.set("B8FF", "8FB0");
mappingTable.set("B900", "8FB1");
mappingTable.set("B901", "8FB2");
mappingTable.set("B902", "8FB3");
mappingTable.set("B903", "8FB4");
mappingTable.set("B905", "8FB5");
mappingTable.set("B906", "8FB6");
mappingTable.set("B907", "8FB7");
mappingTable.set("B908", "8FB8");
mappingTable.set("B909", "8FB9");
mappingTable.set("B90A", "8FBA");
mappingTable.set("B90B", "8FBB");
mappingTable.set("B90C", "8FBC");
mappingTable.set("B90D", "8FBD");
mappingTable.set("B90E", "8FBE");
mappingTable.set("B90F", "8FBF");
mappingTable.set("B910", "8FC0");
mappingTable.set("B911", "8FC1");
mappingTable.set("B912", "8FC2");
mappingTable.set("B913", "8FC3");
mappingTable.set("B914", "8FC4");
mappingTable.set("B915", "8FC5");
mappingTable.set("B916", "8FC6");
mappingTable.set("B917", "8FC7");
mappingTable.set("B919", "8FC8");
mappingTable.set("B91A", "8FC9");
mappingTable.set("B91B", "8FCA");
mappingTable.set("B91C", "8FCB");
mappingTable.set("B91D", "8FCC");
mappingTable.set("B91E", "8FCD");
mappingTable.set("B91F", "8FCE");
mappingTable.set("B921", "8FCF");
mappingTable.set("B922", "8FD0");
mappingTable.set("B923", "8FD1");
mappingTable.set("B924", "8FD2");
mappingTable.set("B925", "8FD3");
mappingTable.set("B926", "8FD4");
mappingTable.set("B927", "8FD5");
mappingTable.set("B928", "8FD6");
mappingTable.set("B929", "8FD7");
mappingTable.set("B92A", "8FD8");
mappingTable.set("B92B", "8FD9");
mappingTable.set("B92C", "8FDA");
mappingTable.set("B92D", "8FDB");
mappingTable.set("B92E", "8FDC");
mappingTable.set("B92F", "8FDD");
mappingTable.set("B930", "8FDE");
mappingTable.set("B931", "8FDF");
mappingTable.set("B932", "8FE0");
mappingTable.set("B933", "8FE1");
mappingTable.set("B934", "8FE2");
mappingTable.set("B935", "8FE3");
mappingTable.set("B936", "8FE4");
mappingTable.set("B937", "8FE5");
mappingTable.set("B938", "8FE6");
mappingTable.set("B939", "8FE7");
mappingTable.set("B93A", "8FE8");
mappingTable.set("B93B", "8FE9");
mappingTable.set("B93E", "8FEA");
mappingTable.set("B93F", "8FEB");
mappingTable.set("B941", "8FEC");
mappingTable.set("B942", "8FED");
mappingTable.set("B943", "8FEE");
mappingTable.set("B945", "8FEF");
mappingTable.set("B946", "8FF0");
mappingTable.set("B947", "8FF1");
mappingTable.set("B948", "8FF2");
mappingTable.set("B949", "8FF3");
mappingTable.set("B94A", "8FF4");
mappingTable.set("B94B", "8FF5");
mappingTable.set("B94D", "8FF6");
mappingTable.set("B94E", "8FF7");
mappingTable.set("B950", "8FF8");
mappingTable.set("B952", "8FF9");
mappingTable.set("B953", "8FFA");
mappingTable.set("B954", "8FFB");
mappingTable.set("B955", "8FFC");
mappingTable.set("B956", "8FFD");
mappingTable.set("B957", "8FFE");
mappingTable.set("B95A", "9041");
mappingTable.set("B95B", "9042");
mappingTable.set("B95D", "9043");
mappingTable.set("B95E", "9044");
mappingTable.set("B95F", "9045");
mappingTable.set("B961", "9046");
mappingTable.set("B962", "9047");
mappingTable.set("B963", "9048");
mappingTable.set("B964", "9049");
mappingTable.set("B965", "904A");
mappingTable.set("B966", "904B");
mappingTable.set("B967", "904C");
mappingTable.set("B96A", "904D");
mappingTable.set("B96C", "904E");
mappingTable.set("B96E", "904F");
mappingTable.set("B96F", "9050");
mappingTable.set("B970", "9051");
mappingTable.set("B971", "9052");
mappingTable.set("B972", "9053");
mappingTable.set("B973", "9054");
mappingTable.set("B976", "9055");
mappingTable.set("B977", "9056");
mappingTable.set("B979", "9057");
mappingTable.set("B97A", "9058");
mappingTable.set("B97B", "9059");
mappingTable.set("B97D", "905A");
mappingTable.set("B97E", "9061");
mappingTable.set("B97F", "9062");
mappingTable.set("B980", "9063");
mappingTable.set("B981", "9064");
mappingTable.set("B982", "9065");
mappingTable.set("B983", "9066");
mappingTable.set("B986", "9067");
mappingTable.set("B988", "9068");
mappingTable.set("B98B", "9069");
mappingTable.set("B98C", "906A");
mappingTable.set("B98F", "906B");
mappingTable.set("B990", "906C");
mappingTable.set("B991", "906D");
mappingTable.set("B992", "906E");
mappingTable.set("B993", "906F");
mappingTable.set("B994", "9070");
mappingTable.set("B995", "9071");
mappingTable.set("B996", "9072");
mappingTable.set("B997", "9073");
mappingTable.set("B998", "9074");
mappingTable.set("B999", "9075");
mappingTable.set("B99A", "9076");
mappingTable.set("B99B", "9077");
mappingTable.set("B99C", "9078");
mappingTable.set("B99D", "9079");
mappingTable.set("B99E", "907A");
mappingTable.set("B99F", "9081");
mappingTable.set("B9A0", "9082");
mappingTable.set("B9A1", "9083");
mappingTable.set("B9A2", "9084");
mappingTable.set("B9A3", "9085");
mappingTable.set("B9A4", "9086");
mappingTable.set("B9A5", "9087");
mappingTable.set("B9A6", "9088");
mappingTable.set("B9A7", "9089");
mappingTable.set("B9A8", "908A");
mappingTable.set("B9A9", "908B");
mappingTable.set("B9AA", "908C");
mappingTable.set("B9AB", "908D");
mappingTable.set("B9AE", "908E");
mappingTable.set("B9AF", "908F");
mappingTable.set("B9B1", "9090");
mappingTable.set("B9B2", "9091");
mappingTable.set("B9B3", "9092");
mappingTable.set("B9B5", "9093");
mappingTable.set("B9B6", "9094");
mappingTable.set("B9B7", "9095");
mappingTable.set("B9B8", "9096");
mappingTable.set("B9B9", "9097");
mappingTable.set("B9BA", "9098");
mappingTable.set("B9BB", "9099");
mappingTable.set("B9BE", "909A");
mappingTable.set("B9C0", "909B");
mappingTable.set("B9C2", "909C");
mappingTable.set("B9C3", "909D");
mappingTable.set("B9C4", "909E");
mappingTable.set("B9C5", "909F");
mappingTable.set("B9C6", "90A0");
mappingTable.set("B9C7", "90A1");
mappingTable.set("B9CA", "90A2");
mappingTable.set("B9CB", "90A3");
mappingTable.set("B9CD", "90A4");
mappingTable.set("B9D3", "90A5");
mappingTable.set("B9D4", "90A6");
mappingTable.set("B9D5", "90A7");
mappingTable.set("B9D6", "90A8");
mappingTable.set("B9D7", "90A9");
mappingTable.set("B9DA", "90AA");
mappingTable.set("B9DC", "90AB");
mappingTable.set("B9DF", "90AC");
mappingTable.set("B9E0", "90AD");
mappingTable.set("B9E2", "90AE");
mappingTable.set("B9E6", "90AF");
mappingTable.set("B9E7", "90B0");
mappingTable.set("B9E9", "90B1");
mappingTable.set("B9EA", "90B2");
mappingTable.set("B9EB", "90B3");
mappingTable.set("B9ED", "90B4");
mappingTable.set("B9EE", "90B5");
mappingTable.set("B9EF", "90B6");
mappingTable.set("B9F0", "90B7");
mappingTable.set("B9F1", "90B8");
mappingTable.set("B9F2", "90B9");
mappingTable.set("B9F3", "90BA");
mappingTable.set("B9F6", "90BB");
mappingTable.set("B9FB", "90BC");
mappingTable.set("B9FC", "90BD");
mappingTable.set("B9FD", "90BE");
mappingTable.set("B9FE", "90BF");
mappingTable.set("B9FF", "90C0");
mappingTable.set("BA02", "90C1");
mappingTable.set("BA03", "90C2");
mappingTable.set("BA04", "90C3");
mappingTable.set("BA05", "90C4");
mappingTable.set("BA06", "90C5");
mappingTable.set("BA07", "90C6");
mappingTable.set("BA09", "90C7");
mappingTable.set("BA0A", "90C8");
mappingTable.set("BA0B", "90C9");
mappingTable.set("BA0C", "90CA");
mappingTable.set("BA0D", "90CB");
mappingTable.set("BA0E", "90CC");
mappingTable.set("BA0F", "90CD");
mappingTable.set("BA10", "90CE");
mappingTable.set("BA11", "90CF");
mappingTable.set("BA12", "90D0");
mappingTable.set("BA13", "90D1");
mappingTable.set("BA14", "90D2");
mappingTable.set("BA16", "90D3");
mappingTable.set("BA17", "90D4");
mappingTable.set("BA18", "90D5");
mappingTable.set("BA19", "90D6");
mappingTable.set("BA1A", "90D7");
mappingTable.set("BA1B", "90D8");
mappingTable.set("BA1C", "90D9");
mappingTable.set("BA1D", "90DA");
mappingTable.set("BA1E", "90DB");
mappingTable.set("BA1F", "90DC");
mappingTable.set("BA20", "90DD");
mappingTable.set("BA21", "90DE");
mappingTable.set("BA22", "90DF");
mappingTable.set("BA23", "90E0");
mappingTable.set("BA24", "90E1");
mappingTable.set("BA25", "90E2");
mappingTable.set("BA26", "90E3");
mappingTable.set("BA27", "90E4");
mappingTable.set("BA28", "90E5");
mappingTable.set("BA29", "90E6");
mappingTable.set("BA2A", "90E7");
mappingTable.set("BA2B", "90E8");
mappingTable.set("BA2C", "90E9");
mappingTable.set("BA2D", "90EA");
mappingTable.set("BA2E", "90EB");
mappingTable.set("BA2F", "90EC");
mappingTable.set("BA30", "90ED");
mappingTable.set("BA31", "90EE");
mappingTable.set("BA32", "90EF");
mappingTable.set("BA33", "90F0");
mappingTable.set("BA34", "90F1");
mappingTable.set("BA35", "90F2");
mappingTable.set("BA36", "90F3");
mappingTable.set("BA37", "90F4");
mappingTable.set("BA3A", "90F5");
mappingTable.set("BA3B", "90F6");
mappingTable.set("BA3D", "90F7");
mappingTable.set("BA3E", "90F8");
mappingTable.set("BA3F", "90F9");
mappingTable.set("BA41", "90FA");
mappingTable.set("BA43", "90FB");
mappingTable.set("BA44", "90FC");
mappingTable.set("BA45", "90FD");
mappingTable.set("BA46", "90FE");
mappingTable.set("BA47", "9141");
mappingTable.set("BA4A", "9142");
mappingTable.set("BA4C", "9143");
mappingTable.set("BA4F", "9144");
mappingTable.set("BA50", "9145");
mappingTable.set("BA51", "9146");
mappingTable.set("BA52", "9147");
mappingTable.set("BA56", "9148");
mappingTable.set("BA57", "9149");
mappingTable.set("BA59", "914A");
mappingTable.set("BA5A", "914B");
mappingTable.set("BA5B", "914C");
mappingTable.set("BA5D", "914D");
mappingTable.set("BA5E", "914E");
mappingTable.set("BA5F", "914F");
mappingTable.set("BA60", "9150");
mappingTable.set("BA61", "9151");
mappingTable.set("BA62", "9152");
mappingTable.set("BA63", "9153");
mappingTable.set("BA66", "9154");
mappingTable.set("BA6A", "9155");
mappingTable.set("BA6B", "9156");
mappingTable.set("BA6C", "9157");
mappingTable.set("BA6D", "9158");
mappingTable.set("BA6E", "9159");
mappingTable.set("BA6F", "915A");
mappingTable.set("BA72", "9161");
mappingTable.set("BA73", "9162");
mappingTable.set("BA75", "9163");
mappingTable.set("BA76", "9164");
mappingTable.set("BA77", "9165");
mappingTable.set("BA79", "9166");
mappingTable.set("BA7A", "9167");
mappingTable.set("BA7B", "9168");
mappingTable.set("BA7C", "9169");
mappingTable.set("BA7D", "916A");
mappingTable.set("BA7E", "916B");
mappingTable.set("BA7F", "916C");
mappingTable.set("BA80", "916D");
mappingTable.set("BA81", "916E");
mappingTable.set("BA82", "916F");
mappingTable.set("BA86", "9170");
mappingTable.set("BA88", "9171");
mappingTable.set("BA89", "9172");
mappingTable.set("BA8A", "9173");
mappingTable.set("BA8B", "9174");
mappingTable.set("BA8D", "9175");
mappingTable.set("BA8E", "9176");
mappingTable.set("BA8F", "9177");
mappingTable.set("BA90", "9178");
mappingTable.set("BA91", "9179");
mappingTable.set("BA92", "917A");
mappingTable.set("BA93", "9181");
mappingTable.set("BA94", "9182");
mappingTable.set("BA95", "9183");
mappingTable.set("BA96", "9184");
mappingTable.set("BA97", "9185");
mappingTable.set("BA98", "9186");
mappingTable.set("BA99", "9187");
mappingTable.set("BA9A", "9188");
mappingTable.set("BA9B", "9189");
mappingTable.set("BA9C", "918A");
mappingTable.set("BA9D", "918B");
mappingTable.set("BA9E", "918C");
mappingTable.set("BA9F", "918D");
mappingTable.set("BAA0", "918E");
mappingTable.set("BAA1", "918F");
mappingTable.set("BAA2", "9190");
mappingTable.set("BAA3", "9191");
mappingTable.set("BAA4", "9192");
mappingTable.set("BAA5", "9193");
mappingTable.set("BAA6", "9194");
mappingTable.set("BAA7", "9195");
mappingTable.set("BAAA", "9196");
mappingTable.set("BAAD", "9197");
mappingTable.set("BAAE", "9198");
mappingTable.set("BAAF", "9199");
mappingTable.set("BAB1", "919A");
mappingTable.set("BAB3", "919B");
mappingTable.set("BAB4", "919C");
mappingTable.set("BAB5", "919D");
mappingTable.set("BAB6", "919E");
mappingTable.set("BAB7", "919F");
mappingTable.set("BABA", "91A0");
mappingTable.set("BABC", "91A1");
mappingTable.set("BABE", "91A2");
mappingTable.set("BABF", "91A3");
mappingTable.set("BAC0", "91A4");
mappingTable.set("BAC1", "91A5");
mappingTable.set("BAC2", "91A6");
mappingTable.set("BAC3", "91A7");
mappingTable.set("BAC5", "91A8");
mappingTable.set("BAC6", "91A9");
mappingTable.set("BAC7", "91AA");
mappingTable.set("BAC9", "91AB");
mappingTable.set("BACA", "91AC");
mappingTable.set("BACB", "91AD");
mappingTable.set("BACC", "91AE");
mappingTable.set("BACD", "91AF");
mappingTable.set("BACE", "91B0");
mappingTable.set("BACF", "91B1");
mappingTable.set("BAD0", "91B2");
mappingTable.set("BAD1", "91B3");
mappingTable.set("BAD2", "91B4");
mappingTable.set("BAD3", "91B5");
mappingTable.set("BAD4", "91B6");
mappingTable.set("BAD5", "91B7");
mappingTable.set("BAD6", "91B8");
mappingTable.set("BAD7", "91B9");
mappingTable.set("BADA", "91BA");
mappingTable.set("BADB", "91BB");
mappingTable.set("BADC", "91BC");
mappingTable.set("BADD", "91BD");
mappingTable.set("BADE", "91BE");
mappingTable.set("BADF", "91BF");
mappingTable.set("BAE0", "91C0");
mappingTable.set("BAE1", "91C1");
mappingTable.set("BAE2", "91C2");
mappingTable.set("BAE3", "91C3");
mappingTable.set("BAE4", "91C4");
mappingTable.set("BAE5", "91C5");
mappingTable.set("BAE6", "91C6");
mappingTable.set("BAE7", "91C7");
mappingTable.set("BAE8", "91C8");
mappingTable.set("BAE9", "91C9");
mappingTable.set("BAEA", "91CA");
mappingTable.set("BAEB", "91CB");
mappingTable.set("BAEC", "91CC");
mappingTable.set("BAED", "91CD");
mappingTable.set("BAEE", "91CE");
mappingTable.set("BAEF", "91CF");
mappingTable.set("BAF0", "91D0");
mappingTable.set("BAF1", "91D1");
mappingTable.set("BAF2", "91D2");
mappingTable.set("BAF3", "91D3");
mappingTable.set("BAF4", "91D4");
mappingTable.set("BAF5", "91D5");
mappingTable.set("BAF6", "91D6");
mappingTable.set("BAF7", "91D7");
mappingTable.set("BAF8", "91D8");
mappingTable.set("BAF9", "91D9");
mappingTable.set("BAFA", "91DA");
mappingTable.set("BAFB", "91DB");
mappingTable.set("BAFD", "91DC");
mappingTable.set("BAFE", "91DD");
mappingTable.set("BAFF", "91DE");
mappingTable.set("BB01", "91DF");
mappingTable.set("BB02", "91E0");
mappingTable.set("BB03", "91E1");
mappingTable.set("BB05", "91E2");
mappingTable.set("BB06", "91E3");
mappingTable.set("BB07", "91E4");
mappingTable.set("BB08", "91E5");
mappingTable.set("BB09", "91E6");
mappingTable.set("BB0A", "91E7");
mappingTable.set("BB0B", "91E8");
mappingTable.set("BB0C", "91E9");
mappingTable.set("BB0E", "91EA");
mappingTable.set("BB10", "91EB");
mappingTable.set("BB12", "91EC");
mappingTable.set("BB13", "91ED");
mappingTable.set("BB14", "91EE");
mappingTable.set("BB15", "91EF");
mappingTable.set("BB16", "91F0");
mappingTable.set("BB17", "91F1");
mappingTable.set("BB19", "91F2");
mappingTable.set("BB1A", "91F3");
mappingTable.set("BB1B", "91F4");
mappingTable.set("BB1D", "91F5");
mappingTable.set("BB1E", "91F6");
mappingTable.set("BB1F", "91F7");
mappingTable.set("BB21", "91F8");
mappingTable.set("BB22", "91F9");
mappingTable.set("BB23", "91FA");
mappingTable.set("BB24", "91FB");
mappingTable.set("BB25", "91FC");
mappingTable.set("BB26", "91FD");
mappingTable.set("BB27", "91FE");
mappingTable.set("BB28", "9241");
mappingTable.set("BB2A", "9242");
mappingTable.set("BB2C", "9243");
mappingTable.set("BB2D", "9244");
mappingTable.set("BB2E", "9245");
mappingTable.set("BB2F", "9246");
mappingTable.set("BB30", "9247");
mappingTable.set("BB31", "9248");
mappingTable.set("BB32", "9249");
mappingTable.set("BB33", "924A");
mappingTable.set("BB37", "924B");
mappingTable.set("BB39", "924C");
mappingTable.set("BB3A", "924D");
mappingTable.set("BB3F", "924E");
mappingTable.set("BB40", "924F");
mappingTable.set("BB41", "9250");
mappingTable.set("BB42", "9251");
mappingTable.set("BB43", "9252");
mappingTable.set("BB46", "9253");
mappingTable.set("BB48", "9254");
mappingTable.set("BB4A", "9255");
mappingTable.set("BB4B", "9256");
mappingTable.set("BB4C", "9257");
mappingTable.set("BB4E", "9258");
mappingTable.set("BB51", "9259");
mappingTable.set("BB52", "925A");
mappingTable.set("BB53", "9261");
mappingTable.set("BB55", "9262");
mappingTable.set("BB56", "9263");
mappingTable.set("BB57", "9264");
mappingTable.set("BB59", "9265");
mappingTable.set("BB5A", "9266");
mappingTable.set("BB5B", "9267");
mappingTable.set("BB5C", "9268");
mappingTable.set("BB5D", "9269");
mappingTable.set("BB5E", "926A");
mappingTable.set("BB5F", "926B");
mappingTable.set("BB60", "926C");
mappingTable.set("BB62", "926D");
mappingTable.set("BB64", "926E");
mappingTable.set("BB65", "926F");
mappingTable.set("BB66", "9270");
mappingTable.set("BB67", "9271");
mappingTable.set("BB68", "9272");
mappingTable.set("BB69", "9273");
mappingTable.set("BB6A", "9274");
mappingTable.set("BB6B", "9275");
mappingTable.set("BB6D", "9276");
mappingTable.set("BB6E", "9277");
mappingTable.set("BB6F", "9278");
mappingTable.set("BB70", "9279");
mappingTable.set("BB71", "927A");
mappingTable.set("BB72", "9281");
mappingTable.set("BB73", "9282");
mappingTable.set("BB74", "9283");
mappingTable.set("BB75", "9284");
mappingTable.set("BB76", "9285");
mappingTable.set("BB77", "9286");
mappingTable.set("BB78", "9287");
mappingTable.set("BB79", "9288");
mappingTable.set("BB7A", "9289");
mappingTable.set("BB7B", "928A");
mappingTable.set("BB7C", "928B");
mappingTable.set("BB7D", "928C");
mappingTable.set("BB7E", "928D");
mappingTable.set("BB7F", "928E");
mappingTable.set("BB80", "928F");
mappingTable.set("BB81", "9290");
mappingTable.set("BB82", "9291");
mappingTable.set("BB83", "9292");
mappingTable.set("BB84", "9293");
mappingTable.set("BB85", "9294");
mappingTable.set("BB86", "9295");
mappingTable.set("BB87", "9296");
mappingTable.set("BB89", "9297");
mappingTable.set("BB8A", "9298");
mappingTable.set("BB8B", "9299");
mappingTable.set("BB8D", "929A");
mappingTable.set("BB8E", "929B");
mappingTable.set("BB8F", "929C");
mappingTable.set("BB91", "929D");
mappingTable.set("BB92", "929E");
mappingTable.set("BB93", "929F");
mappingTable.set("BB94", "92A0");
mappingTable.set("BB95", "92A1");
mappingTable.set("BB96", "92A2");
mappingTable.set("BB97", "92A3");
mappingTable.set("BB98", "92A4");
mappingTable.set("BB99", "92A5");
mappingTable.set("BB9A", "92A6");
mappingTable.set("BB9B", "92A7");
mappingTable.set("BB9C", "92A8");
mappingTable.set("BB9D", "92A9");
mappingTable.set("BB9E", "92AA");
mappingTable.set("BB9F", "92AB");
mappingTable.set("BBA0", "92AC");
mappingTable.set("BBA1", "92AD");
mappingTable.set("BBA2", "92AE");
mappingTable.set("BBA3", "92AF");
mappingTable.set("BBA5", "92B0");
mappingTable.set("BBA6", "92B1");
mappingTable.set("BBA7", "92B2");
mappingTable.set("BBA9", "92B3");
mappingTable.set("BBAA", "92B4");
mappingTable.set("BBAB", "92B5");
mappingTable.set("BBAD", "92B6");
mappingTable.set("BBAE", "92B7");
mappingTable.set("BBAF", "92B8");
mappingTable.set("BBB0", "92B9");
mappingTable.set("BBB1", "92BA");
mappingTable.set("BBB2", "92BB");
mappingTable.set("BBB3", "92BC");
mappingTable.set("BBB5", "92BD");
mappingTable.set("BBB6", "92BE");
mappingTable.set("BBB8", "92BF");
mappingTable.set("BBB9", "92C0");
mappingTable.set("BBBA", "92C1");
mappingTable.set("BBBB", "92C2");
mappingTable.set("BBBC", "92C3");
mappingTable.set("BBBD", "92C4");
mappingTable.set("BBBE", "92C5");
mappingTable.set("BBBF", "92C6");
mappingTable.set("BBC1", "92C7");
mappingTable.set("BBC2", "92C8");
mappingTable.set("BBC3", "92C9");
mappingTable.set("BBC5", "92CA");
mappingTable.set("BBC6", "92CB");
mappingTable.set("BBC7", "92CC");
mappingTable.set("BBC9", "92CD");
mappingTable.set("BBCA", "92CE");
mappingTable.set("BBCB", "92CF");
mappingTable.set("BBCC", "92D0");
mappingTable.set("BBCD", "92D1");
mappingTable.set("BBCE", "92D2");
mappingTable.set("BBCF", "92D3");
mappingTable.set("BBD1", "92D4");
mappingTable.set("BBD2", "92D5");
mappingTable.set("BBD4", "92D6");
mappingTable.set("BBD5", "92D7");
mappingTable.set("BBD6", "92D8");
mappingTable.set("BBD7", "92D9");
mappingTable.set("BBD8", "92DA");
mappingTable.set("BBD9", "92DB");
mappingTable.set("BBDA", "92DC");
mappingTable.set("BBDB", "92DD");
mappingTable.set("BBDC", "92DE");
mappingTable.set("BBDD", "92DF");
mappingTable.set("BBDE", "92E0");
mappingTable.set("BBDF", "92E1");
mappingTable.set("BBE0", "92E2");
mappingTable.set("BBE1", "92E3");
mappingTable.set("BBE2", "92E4");
mappingTable.set("BBE3", "92E5");
mappingTable.set("BBE4", "92E6");
mappingTable.set("BBE5", "92E7");
mappingTable.set("BBE6", "92E8");
mappingTable.set("BBE7", "92E9");
mappingTable.set("BBE8", "92EA");
mappingTable.set("BBE9", "92EB");
mappingTable.set("BBEA", "92EC");
mappingTable.set("BBEB", "92ED");
mappingTable.set("BBEC", "92EE");
mappingTable.set("BBED", "92EF");
mappingTable.set("BBEE", "92F0");
mappingTable.set("BBEF", "92F1");
mappingTable.set("BBF0", "92F2");
mappingTable.set("BBF1", "92F3");
mappingTable.set("BBF2", "92F4");
mappingTable.set("BBF3", "92F5");
mappingTable.set("BBF4", "92F6");
mappingTable.set("BBF5", "92F7");
mappingTable.set("BBF6", "92F8");
mappingTable.set("BBF7", "92F9");
mappingTable.set("BBFA", "92FA");
mappingTable.set("BBFB", "92FB");
mappingTable.set("BBFD", "92FC");
mappingTable.set("BBFE", "92FD");
mappingTable.set("BC01", "92FE");
mappingTable.set("BC03", "9341");
mappingTable.set("BC04", "9342");
mappingTable.set("BC05", "9343");
mappingTable.set("BC06", "9344");
mappingTable.set("BC07", "9345");
mappingTable.set("BC0A", "9346");
mappingTable.set("BC0E", "9347");
mappingTable.set("BC10", "9348");
mappingTable.set("BC12", "9349");
mappingTable.set("BC13", "934A");
mappingTable.set("BC19", "934B");
mappingTable.set("BC1A", "934C");
mappingTable.set("BC20", "934D");
mappingTable.set("BC21", "934E");
mappingTable.set("BC22", "934F");
mappingTable.set("BC23", "9350");
mappingTable.set("BC26", "9351");
mappingTable.set("BC28", "9352");
mappingTable.set("BC2A", "9353");
mappingTable.set("BC2B", "9354");
mappingTable.set("BC2C", "9355");
mappingTable.set("BC2E", "9356");
mappingTable.set("BC2F", "9357");
mappingTable.set("BC32", "9358");
mappingTable.set("BC33", "9359");
mappingTable.set("BC35", "935A");
mappingTable.set("BC36", "9361");
mappingTable.set("BC37", "9362");
mappingTable.set("BC39", "9363");
mappingTable.set("BC3A", "9364");
mappingTable.set("BC3B", "9365");
mappingTable.set("BC3C", "9366");
mappingTable.set("BC3D", "9367");
mappingTable.set("BC3E", "9368");
mappingTable.set("BC3F", "9369");
mappingTable.set("BC42", "936A");
mappingTable.set("BC46", "936B");
mappingTable.set("BC47", "936C");
mappingTable.set("BC48", "936D");
mappingTable.set("BC4A", "936E");
mappingTable.set("BC4B", "936F");
mappingTable.set("BC4E", "9370");
mappingTable.set("BC4F", "9371");
mappingTable.set("BC51", "9372");
mappingTable.set("BC52", "9373");
mappingTable.set("BC53", "9374");
mappingTable.set("BC54", "9375");
mappingTable.set("BC55", "9376");
mappingTable.set("BC56", "9377");
mappingTable.set("BC57", "9378");
mappingTable.set("BC58", "9379");
mappingTable.set("BC59", "937A");
mappingTable.set("BC5A", "9381");
mappingTable.set("BC5B", "9382");
mappingTable.set("BC5C", "9383");
mappingTable.set("BC5E", "9384");
mappingTable.set("BC5F", "9385");
mappingTable.set("BC60", "9386");
mappingTable.set("BC61", "9387");
mappingTable.set("BC62", "9388");
mappingTable.set("BC63", "9389");
mappingTable.set("BC64", "938A");
mappingTable.set("BC65", "938B");
mappingTable.set("BC66", "938C");
mappingTable.set("BC67", "938D");
mappingTable.set("BC68", "938E");
mappingTable.set("BC69", "938F");
mappingTable.set("BC6A", "9390");
mappingTable.set("BC6B", "9391");
mappingTable.set("BC6C", "9392");
mappingTable.set("BC6D", "9393");
mappingTable.set("BC6E", "9394");
mappingTable.set("BC6F", "9395");
mappingTable.set("BC70", "9396");
mappingTable.set("BC71", "9397");
mappingTable.set("BC72", "9398");
mappingTable.set("BC73", "9399");
mappingTable.set("BC74", "939A");
mappingTable.set("BC75", "939B");
mappingTable.set("BC76", "939C");
mappingTable.set("BC77", "939D");
mappingTable.set("BC78", "939E");
mappingTable.set("BC79", "939F");
mappingTable.set("BC7A", "93A0");
mappingTable.set("BC7B", "93A1");
mappingTable.set("BC7C", "93A2");
mappingTable.set("BC7D", "93A3");
mappingTable.set("BC7E", "93A4");
mappingTable.set("BC7F", "93A5");
mappingTable.set("BC80", "93A6");
mappingTable.set("BC81", "93A7");
mappingTable.set("BC82", "93A8");
mappingTable.set("BC83", "93A9");
mappingTable.set("BC86", "93AA");
mappingTable.set("BC87", "93AB");
mappingTable.set("BC89", "93AC");
mappingTable.set("BC8A", "93AD");
mappingTable.set("BC8D", "93AE");
mappingTable.set("BC8F", "93AF");
mappingTable.set("BC90", "93B0");
mappingTable.set("BC91", "93B1");
mappingTable.set("BC92", "93B2");
mappingTable.set("BC93", "93B3");
mappingTable.set("BC96", "93B4");
mappingTable.set("BC98", "93B5");
mappingTable.set("BC9B", "93B6");
mappingTable.set("BC9C", "93B7");
mappingTable.set("BC9D", "93B8");
mappingTable.set("BC9E", "93B9");
mappingTable.set("BC9F", "93BA");
mappingTable.set("BCA2", "93BB");
mappingTable.set("BCA3", "93BC");
mappingTable.set("BCA5", "93BD");
mappingTable.set("BCA6", "93BE");
mappingTable.set("BCA9", "93BF");
mappingTable.set("BCAA", "93C0");
mappingTable.set("BCAB", "93C1");
mappingTable.set("BCAC", "93C2");
mappingTable.set("BCAD", "93C3");
mappingTable.set("BCAE", "93C4");
mappingTable.set("BCAF", "93C5");
mappingTable.set("BCB2", "93C6");
mappingTable.set("BCB6", "93C7");
mappingTable.set("BCB7", "93C8");
mappingTable.set("BCB8", "93C9");
mappingTable.set("BCB9", "93CA");
mappingTable.set("BCBA", "93CB");
mappingTable.set("BCBB", "93CC");
mappingTable.set("BCBE", "93CD");
mappingTable.set("BCBF", "93CE");
mappingTable.set("BCC1", "93CF");
mappingTable.set("BCC2", "93D0");
mappingTable.set("BCC3", "93D1");
mappingTable.set("BCC5", "93D2");
mappingTable.set("BCC6", "93D3");
mappingTable.set("BCC7", "93D4");
mappingTable.set("BCC8", "93D5");
mappingTable.set("BCC9", "93D6");
mappingTable.set("BCCA", "93D7");
mappingTable.set("BCCB", "93D8");
mappingTable.set("BCCC", "93D9");
mappingTable.set("BCCE", "93DA");
mappingTable.set("BCD2", "93DB");
mappingTable.set("BCD3", "93DC");
mappingTable.set("BCD4", "93DD");
mappingTable.set("BCD6", "93DE");
mappingTable.set("BCD7", "93DF");
mappingTable.set("BCD9", "93E0");
mappingTable.set("BCDA", "93E1");
mappingTable.set("BCDB", "93E2");
mappingTable.set("BCDD", "93E3");
mappingTable.set("BCDE", "93E4");
mappingTable.set("BCDF", "93E5");
mappingTable.set("BCE0", "93E6");
mappingTable.set("BCE1", "93E7");
mappingTable.set("BCE2", "93E8");
mappingTable.set("BCE3", "93E9");
mappingTable.set("BCE4", "93EA");
mappingTable.set("BCE5", "93EB");
mappingTable.set("BCE6", "93EC");
mappingTable.set("BCE7", "93ED");
mappingTable.set("BCE8", "93EE");
mappingTable.set("BCE9", "93EF");
mappingTable.set("BCEA", "93F0");
mappingTable.set("BCEB", "93F1");
mappingTable.set("BCEC", "93F2");
mappingTable.set("BCED", "93F3");
mappingTable.set("BCEE", "93F4");
mappingTable.set("BCEF", "93F5");
mappingTable.set("BCF0", "93F6");
mappingTable.set("BCF1", "93F7");
mappingTable.set("BCF2", "93F8");
mappingTable.set("BCF3", "93F9");
mappingTable.set("BCF7", "93FA");
mappingTable.set("BCF9", "93FB");
mappingTable.set("BCFA", "93FC");
mappingTable.set("BCFB", "93FD");
mappingTable.set("BCFD", "93FE");
mappingTable.set("BCFE", "9441");
mappingTable.set("BCFF", "9442");
mappingTable.set("BD00", "9443");
mappingTable.set("BD01", "9444");
mappingTable.set("BD02", "9445");
mappingTable.set("BD03", "9446");
mappingTable.set("BD06", "9447");
mappingTable.set("BD08", "9448");
mappingTable.set("BD0A", "9449");
mappingTable.set("BD0B", "944A");
mappingTable.set("BD0C", "944B");
mappingTable.set("BD0D", "944C");
mappingTable.set("BD0E", "944D");
mappingTable.set("BD0F", "944E");
mappingTable.set("BD11", "944F");
mappingTable.set("BD12", "9450");
mappingTable.set("BD13", "9451");
mappingTable.set("BD15", "9452");
mappingTable.set("BD16", "9453");
mappingTable.set("BD17", "9454");
mappingTable.set("BD18", "9455");
mappingTable.set("BD19", "9456");
mappingTable.set("BD1A", "9457");
mappingTable.set("BD1B", "9458");
mappingTable.set("BD1C", "9459");
mappingTable.set("BD1D", "945A");
mappingTable.set("BD1E", "9461");
mappingTable.set("BD1F", "9462");
mappingTable.set("BD20", "9463");
mappingTable.set("BD21", "9464");
mappingTable.set("BD22", "9465");
mappingTable.set("BD23", "9466");
mappingTable.set("BD25", "9467");
mappingTable.set("BD26", "9468");
mappingTable.set("BD27", "9469");
mappingTable.set("BD28", "946A");
mappingTable.set("BD29", "946B");
mappingTable.set("BD2A", "946C");
mappingTable.set("BD2B", "946D");
mappingTable.set("BD2D", "946E");
mappingTable.set("BD2E", "946F");
mappingTable.set("BD2F", "9470");
mappingTable.set("BD30", "9471");
mappingTable.set("BD31", "9472");
mappingTable.set("BD32", "9473");
mappingTable.set("BD33", "9474");
mappingTable.set("BD34", "9475");
mappingTable.set("BD35", "9476");
mappingTable.set("BD36", "9477");
mappingTable.set("BD37", "9478");
mappingTable.set("BD38", "9479");
mappingTable.set("BD39", "947A");
mappingTable.set("BD3A", "9481");
mappingTable.set("BD3B", "9482");
mappingTable.set("BD3C", "9483");
mappingTable.set("BD3D", "9484");
mappingTable.set("BD3E", "9485");
mappingTable.set("BD3F", "9486");
mappingTable.set("BD41", "9487");
mappingTable.set("BD42", "9488");
mappingTable.set("BD43", "9489");
mappingTable.set("BD44", "948A");
mappingTable.set("BD45", "948B");
mappingTable.set("BD46", "948C");
mappingTable.set("BD47", "948D");
mappingTable.set("BD4A", "948E");
mappingTable.set("BD4B", "948F");
mappingTable.set("BD4D", "9490");
mappingTable.set("BD4E", "9491");
mappingTable.set("BD4F", "9492");
mappingTable.set("BD51", "9493");
mappingTable.set("BD52", "9494");
mappingTable.set("BD53", "9495");
mappingTable.set("BD54", "9496");
mappingTable.set("BD55", "9497");
mappingTable.set("BD56", "9498");
mappingTable.set("BD57", "9499");
mappingTable.set("BD5A", "949A");
mappingTable.set("BD5B", "949B");
mappingTable.set("BD5C", "949C");
mappingTable.set("BD5D", "949D");
mappingTable.set("BD5E", "949E");
mappingTable.set("BD5F", "949F");
mappingTable.set("BD60", "94A0");
mappingTable.set("BD61", "94A1");
mappingTable.set("BD62", "94A2");
mappingTable.set("BD63", "94A3");
mappingTable.set("BD65", "94A4");
mappingTable.set("BD66", "94A5");
mappingTable.set("BD67", "94A6");
mappingTable.set("BD69", "94A7");
mappingTable.set("BD6A", "94A8");
mappingTable.set("BD6B", "94A9");
mappingTable.set("BD6C", "94AA");
mappingTable.set("BD6D", "94AB");
mappingTable.set("BD6E", "94AC");
mappingTable.set("BD6F", "94AD");
mappingTable.set("BD70", "94AE");
mappingTable.set("BD71", "94AF");
mappingTable.set("BD72", "94B0");
mappingTable.set("BD73", "94B1");
mappingTable.set("BD74", "94B2");
mappingTable.set("BD75", "94B3");
mappingTable.set("BD76", "94B4");
mappingTable.set("BD77", "94B5");
mappingTable.set("BD78", "94B6");
mappingTable.set("BD79", "94B7");
mappingTable.set("BD7A", "94B8");
mappingTable.set("BD7B", "94B9");
mappingTable.set("BD7C", "94BA");
mappingTable.set("BD7D", "94BB");
mappingTable.set("BD7E", "94BC");
mappingTable.set("BD7F", "94BD");
mappingTable.set("BD82", "94BE");
mappingTable.set("BD83", "94BF");
mappingTable.set("BD85", "94C0");
mappingTable.set("BD86", "94C1");
mappingTable.set("BD8B", "94C2");
mappingTable.set("BD8C", "94C3");
mappingTable.set("BD8D", "94C4");
mappingTable.set("BD8E", "94C5");
mappingTable.set("BD8F", "94C6");
mappingTable.set("BD92", "94C7");
mappingTable.set("BD94", "94C8");
mappingTable.set("BD96", "94C9");
mappingTable.set("BD97", "94CA");
mappingTable.set("BD98", "94CB");
mappingTable.set("BD9B", "94CC");
mappingTable.set("BD9D", "94CD");
mappingTable.set("BD9E", "94CE");
mappingTable.set("BD9F", "94CF");
mappingTable.set("BDA0", "94D0");
mappingTable.set("BDA1", "94D1");
mappingTable.set("BDA2", "94D2");
mappingTable.set("BDA3", "94D3");
mappingTable.set("BDA5", "94D4");
mappingTable.set("BDA6", "94D5");
mappingTable.set("BDA7", "94D6");
mappingTable.set("BDA8", "94D7");
mappingTable.set("BDA9", "94D8");
mappingTable.set("BDAA", "94D9");
mappingTable.set("BDAB", "94DA");
mappingTable.set("BDAC", "94DB");
mappingTable.set("BDAD", "94DC");
mappingTable.set("BDAE", "94DD");
mappingTable.set("BDAF", "94DE");
mappingTable.set("BDB1", "94DF");
mappingTable.set("BDB2", "94E0");
mappingTable.set("BDB3", "94E1");
mappingTable.set("BDB4", "94E2");
mappingTable.set("BDB5", "94E3");
mappingTable.set("BDB6", "94E4");
mappingTable.set("BDB7", "94E5");
mappingTable.set("BDB9", "94E6");
mappingTable.set("BDBA", "94E7");
mappingTable.set("BDBB", "94E8");
mappingTable.set("BDBC", "94E9");
mappingTable.set("BDBD", "94EA");
mappingTable.set("BDBE", "94EB");
mappingTable.set("BDBF", "94EC");
mappingTable.set("BDC0", "94ED");
mappingTable.set("BDC1", "94EE");
mappingTable.set("BDC2", "94EF");
mappingTable.set("BDC3", "94F0");
mappingTable.set("BDC4", "94F1");
mappingTable.set("BDC5", "94F2");
mappingTable.set("BDC6", "94F3");
mappingTable.set("BDC7", "94F4");
mappingTable.set("BDC8", "94F5");
mappingTable.set("BDC9", "94F6");
mappingTable.set("BDCA", "94F7");
mappingTable.set("BDCB", "94F8");
mappingTable.set("BDCC", "94F9");
mappingTable.set("BDCD", "94FA");
mappingTable.set("BDCE", "94FB");
mappingTable.set("BDCF", "94FC");
mappingTable.set("BDD0", "94FD");
mappingTable.set("BDD1", "94FE");
mappingTable.set("BDD2", "9541");
mappingTable.set("BDD3", "9542");
mappingTable.set("BDD6", "9543");
mappingTable.set("BDD7", "9544");
mappingTable.set("BDD9", "9545");
mappingTable.set("BDDA", "9546");
mappingTable.set("BDDB", "9547");
mappingTable.set("BDDD", "9548");
mappingTable.set("BDDE", "9549");
mappingTable.set("BDDF", "954A");
mappingTable.set("BDE0", "954B");
mappingTable.set("BDE1", "954C");
mappingTable.set("BDE2", "954D");
mappingTable.set("BDE3", "954E");
mappingTable.set("BDE4", "954F");
mappingTable.set("BDE5", "9550");
mappingTable.set("BDE6", "9551");
mappingTable.set("BDE7", "9552");
mappingTable.set("BDE8", "9553");
mappingTable.set("BDEA", "9554");
mappingTable.set("BDEB", "9555");
mappingTable.set("BDEC", "9556");
mappingTable.set("BDED", "9557");
mappingTable.set("BDEE", "9558");
mappingTable.set("BDEF", "9559");
mappingTable.set("BDF1", "955A");
mappingTable.set("BDF2", "9561");
mappingTable.set("BDF3", "9562");
mappingTable.set("BDF5", "9563");
mappingTable.set("BDF6", "9564");
mappingTable.set("BDF7", "9565");
mappingTable.set("BDF9", "9566");
mappingTable.set("BDFA", "9567");
mappingTable.set("BDFB", "9568");
mappingTable.set("BDFC", "9569");
mappingTable.set("BDFD", "956A");
mappingTable.set("BDFE", "956B");
mappingTable.set("BDFF", "956C");
mappingTable.set("BE01", "956D");
mappingTable.set("BE02", "956E");
mappingTable.set("BE04", "956F");
mappingTable.set("BE06", "9570");
mappingTable.set("BE07", "9571");
mappingTable.set("BE08", "9572");
mappingTable.set("BE09", "9573");
mappingTable.set("BE0A", "9574");
mappingTable.set("BE0B", "9575");
mappingTable.set("BE0E", "9576");
mappingTable.set("BE0F", "9577");
mappingTable.set("BE11", "9578");
mappingTable.set("BE12", "9579");
mappingTable.set("BE13", "957A");
mappingTable.set("BE15", "9581");
mappingTable.set("BE16", "9582");
mappingTable.set("BE17", "9583");
mappingTable.set("BE18", "9584");
mappingTable.set("BE19", "9585");
mappingTable.set("BE1A", "9586");
mappingTable.set("BE1B", "9587");
mappingTable.set("BE1E", "9588");
mappingTable.set("BE20", "9589");
mappingTable.set("BE21", "958A");
mappingTable.set("BE22", "958B");
mappingTable.set("BE23", "958C");
mappingTable.set("BE24", "958D");
mappingTable.set("BE25", "958E");
mappingTable.set("BE26", "958F");
mappingTable.set("BE27", "9590");
mappingTable.set("BE28", "9591");
mappingTable.set("BE29", "9592");
mappingTable.set("BE2A", "9593");
mappingTable.set("BE2B", "9594");
mappingTable.set("BE2C", "9595");
mappingTable.set("BE2D", "9596");
mappingTable.set("BE2E", "9597");
mappingTable.set("BE2F", "9598");
mappingTable.set("BE30", "9599");
mappingTable.set("BE31", "959A");
mappingTable.set("BE32", "959B");
mappingTable.set("BE33", "959C");
mappingTable.set("BE34", "959D");
mappingTable.set("BE35", "959E");
mappingTable.set("BE36", "959F");
mappingTable.set("BE37", "95A0");
mappingTable.set("BE38", "95A1");
mappingTable.set("BE39", "95A2");
mappingTable.set("BE3A", "95A3");
mappingTable.set("BE3B", "95A4");
mappingTable.set("BE3C", "95A5");
mappingTable.set("BE3D", "95A6");
mappingTable.set("BE3E", "95A7");
mappingTable.set("BE3F", "95A8");
mappingTable.set("BE40", "95A9");
mappingTable.set("BE41", "95AA");
mappingTable.set("BE42", "95AB");
mappingTable.set("BE43", "95AC");
mappingTable.set("BE46", "95AD");
mappingTable.set("BE47", "95AE");
mappingTable.set("BE49", "95AF");
mappingTable.set("BE4A", "95B0");
mappingTable.set("BE4B", "95B1");
mappingTable.set("BE4D", "95B2");
mappingTable.set("BE4F", "95B3");
mappingTable.set("BE50", "95B4");
mappingTable.set("BE51", "95B5");
mappingTable.set("BE52", "95B6");
mappingTable.set("BE53", "95B7");
mappingTable.set("BE56", "95B8");
mappingTable.set("BE58", "95B9");
mappingTable.set("BE5C", "95BA");
mappingTable.set("BE5D", "95BB");
mappingTable.set("BE5E", "95BC");
mappingTable.set("BE5F", "95BD");
mappingTable.set("BE62", "95BE");
mappingTable.set("BE63", "95BF");
mappingTable.set("BE65", "95C0");
mappingTable.set("BE66", "95C1");
mappingTable.set("BE67", "95C2");
mappingTable.set("BE69", "95C3");
mappingTable.set("BE6B", "95C4");
mappingTable.set("BE6C", "95C5");
mappingTable.set("BE6D", "95C6");
mappingTable.set("BE6E", "95C7");
mappingTable.set("BE6F", "95C8");
mappingTable.set("BE72", "95C9");
mappingTable.set("BE76", "95CA");
mappingTable.set("BE77", "95CB");
mappingTable.set("BE78", "95CC");
mappingTable.set("BE79", "95CD");
mappingTable.set("BE7A", "95CE");
mappingTable.set("BE7E", "95CF");
mappingTable.set("BE7F", "95D0");
mappingTable.set("BE81", "95D1");
mappingTable.set("BE82", "95D2");
mappingTable.set("BE83", "95D3");
mappingTable.set("BE85", "95D4");
mappingTable.set("BE86", "95D5");
mappingTable.set("BE87", "95D6");
mappingTable.set("BE88", "95D7");
mappingTable.set("BE89", "95D8");
mappingTable.set("BE8A", "95D9");
mappingTable.set("BE8B", "95DA");
mappingTable.set("BE8E", "95DB");
mappingTable.set("BE92", "95DC");
mappingTable.set("BE93", "95DD");
mappingTable.set("BE94", "95DE");
mappingTable.set("BE95", "95DF");
mappingTable.set("BE96", "95E0");
mappingTable.set("BE97", "95E1");
mappingTable.set("BE9A", "95E2");
mappingTable.set("BE9B", "95E3");
mappingTable.set("BE9C", "95E4");
mappingTable.set("BE9D", "95E5");
mappingTable.set("BE9E", "95E6");
mappingTable.set("BE9F", "95E7");
mappingTable.set("BEA0", "95E8");
mappingTable.set("BEA1", "95E9");
mappingTable.set("BEA2", "95EA");
mappingTable.set("BEA3", "95EB");
mappingTable.set("BEA4", "95EC");
mappingTable.set("BEA5", "95ED");
mappingTable.set("BEA6", "95EE");
mappingTable.set("BEA7", "95EF");
mappingTable.set("BEA9", "95F0");
mappingTable.set("BEAA", "95F1");
mappingTable.set("BEAB", "95F2");
mappingTable.set("BEAC", "95F3");
mappingTable.set("BEAD", "95F4");
mappingTable.set("BEAE", "95F5");
mappingTable.set("BEAF", "95F6");
mappingTable.set("BEB0", "95F7");
mappingTable.set("BEB1", "95F8");
mappingTable.set("BEB2", "95F9");
mappingTable.set("BEB3", "95FA");
mappingTable.set("BEB4", "95FB");
mappingTable.set("BEB5", "95FC");
mappingTable.set("BEB6", "95FD");
mappingTable.set("BEB7", "95FE");
mappingTable.set("BEB8", "9641");
mappingTable.set("BEB9", "9642");
mappingTable.set("BEBA", "9643");
mappingTable.set("BEBB", "9644");
mappingTable.set("BEBC", "9645");
mappingTable.set("BEBD", "9646");
mappingTable.set("BEBE", "9647");
mappingTable.set("BEBF", "9648");
mappingTable.set("BEC0", "9649");
mappingTable.set("BEC1", "964A");
mappingTable.set("BEC2", "964B");
mappingTable.set("BEC3", "964C");
mappingTable.set("BEC4", "964D");
mappingTable.set("BEC5", "964E");
mappingTable.set("BEC6", "964F");
mappingTable.set("BEC7", "9650");
mappingTable.set("BEC8", "9651");
mappingTable.set("BEC9", "9652");
mappingTable.set("BECA", "9653");
mappingTable.set("BECB", "9654");
mappingTable.set("BECC", "9655");
mappingTable.set("BECD", "9656");
mappingTable.set("BECE", "9657");
mappingTable.set("BECF", "9658");
mappingTable.set("BED2", "9659");
mappingTable.set("BED3", "965A");
mappingTable.set("BED5", "9661");
mappingTable.set("BED6", "9662");
mappingTable.set("BED9", "9663");
mappingTable.set("BEDA", "9664");
mappingTable.set("BEDB", "9665");
mappingTable.set("BEDC", "9666");
mappingTable.set("BEDD", "9667");
mappingTable.set("BEDE", "9668");
mappingTable.set("BEDF", "9669");
mappingTable.set("BEE1", "966A");
mappingTable.set("BEE2", "966B");
mappingTable.set("BEE6", "966C");
mappingTable.set("BEE7", "966D");
mappingTable.set("BEE8", "966E");
mappingTable.set("BEE9", "966F");
mappingTable.set("BEEA", "9670");
mappingTable.set("BEEB", "9671");
mappingTable.set("BEED", "9672");
mappingTable.set("BEEE", "9673");
mappingTable.set("BEEF", "9674");
mappingTable.set("BEF0", "9675");
mappingTable.set("BEF1", "9676");
mappingTable.set("BEF2", "9677");
mappingTable.set("BEF3", "9678");
mappingTable.set("BEF4", "9679");
mappingTable.set("BEF5", "967A");
mappingTable.set("BEF6", "9681");
mappingTable.set("BEF7", "9682");
mappingTable.set("BEF8", "9683");
mappingTable.set("BEF9", "9684");
mappingTable.set("BEFA", "9685");
mappingTable.set("BEFB", "9686");
mappingTable.set("BEFC", "9687");
mappingTable.set("BEFD", "9688");
mappingTable.set("BEFE", "9689");
mappingTable.set("BEFF", "968A");
mappingTable.set("BF00", "968B");
mappingTable.set("BF02", "968C");
mappingTable.set("BF03", "968D");
mappingTable.set("BF04", "968E");
mappingTable.set("BF05", "968F");
mappingTable.set("BF06", "9690");
mappingTable.set("BF07", "9691");
mappingTable.set("BF0A", "9692");
mappingTable.set("BF0B", "9693");
mappingTable.set("BF0C", "9694");
mappingTable.set("BF0D", "9695");
mappingTable.set("BF0E", "9696");
mappingTable.set("BF0F", "9697");
mappingTable.set("BF10", "9698");
mappingTable.set("BF11", "9699");
mappingTable.set("BF12", "969A");
mappingTable.set("BF13", "969B");
mappingTable.set("BF14", "969C");
mappingTable.set("BF15", "969D");
mappingTable.set("BF16", "969E");
mappingTable.set("BF17", "969F");
mappingTable.set("BF1A", "96A0");
mappingTable.set("BF1E", "96A1");
mappingTable.set("BF1F", "96A2");
mappingTable.set("BF20", "96A3");
mappingTable.set("BF21", "96A4");
mappingTable.set("BF22", "96A5");
mappingTable.set("BF23", "96A6");
mappingTable.set("BF24", "96A7");
mappingTable.set("BF25", "96A8");
mappingTable.set("BF26", "96A9");
mappingTable.set("BF27", "96AA");
mappingTable.set("BF28", "96AB");
mappingTable.set("BF29", "96AC");
mappingTable.set("BF2A", "96AD");
mappingTable.set("BF2B", "96AE");
mappingTable.set("BF2C", "96AF");
mappingTable.set("BF2D", "96B0");
mappingTable.set("BF2E", "96B1");
mappingTable.set("BF2F", "96B2");
mappingTable.set("BF30", "96B3");
mappingTable.set("BF31", "96B4");
mappingTable.set("BF32", "96B5");
mappingTable.set("BF33", "96B6");
mappingTable.set("BF34", "96B7");
mappingTable.set("BF35", "96B8");
mappingTable.set("BF36", "96B9");
mappingTable.set("BF37", "96BA");
mappingTable.set("BF38", "96BB");
mappingTable.set("BF39", "96BC");
mappingTable.set("BF3A", "96BD");
mappingTable.set("BF3B", "96BE");
mappingTable.set("BF3C", "96BF");
mappingTable.set("BF3D", "96C0");
mappingTable.set("BF3E", "96C1");
mappingTable.set("BF3F", "96C2");
mappingTable.set("BF42", "96C3");
mappingTable.set("BF43", "96C4");
mappingTable.set("BF45", "96C5");
mappingTable.set("BF46", "96C6");
mappingTable.set("BF47", "96C7");
mappingTable.set("BF49", "96C8");
mappingTable.set("BF4A", "96C9");
mappingTable.set("BF4B", "96CA");
mappingTable.set("BF4C", "96CB");
mappingTable.set("BF4D", "96CC");
mappingTable.set("BF4E", "96CD");
mappingTable.set("BF4F", "96CE");
mappingTable.set("BF52", "96CF");
mappingTable.set("BF53", "96D0");
mappingTable.set("BF54", "96D1");
mappingTable.set("BF56", "96D2");
mappingTable.set("BF57", "96D3");
mappingTable.set("BF58", "96D4");
mappingTable.set("BF59", "96D5");
mappingTable.set("BF5A", "96D6");
mappingTable.set("BF5B", "96D7");
mappingTable.set("BF5C", "96D8");
mappingTable.set("BF5D", "96D9");
mappingTable.set("BF5E", "96DA");
mappingTable.set("BF5F", "96DB");
mappingTable.set("BF60", "96DC");
mappingTable.set("BF61", "96DD");
mappingTable.set("BF62", "96DE");
mappingTable.set("BF63", "96DF");
mappingTable.set("BF64", "96E0");
mappingTable.set("BF65", "96E1");
mappingTable.set("BF66", "96E2");
mappingTable.set("BF67", "96E3");
mappingTable.set("BF68", "96E4");
mappingTable.set("BF69", "96E5");
mappingTable.set("BF6A", "96E6");
mappingTable.set("BF6B", "96E7");
mappingTable.set("BF6C", "96E8");
mappingTable.set("BF6D", "96E9");
mappingTable.set("BF6E", "96EA");
mappingTable.set("BF6F", "96EB");
mappingTable.set("BF70", "96EC");
mappingTable.set("BF71", "96ED");
mappingTable.set("BF72", "96EE");
mappingTable.set("BF73", "96EF");
mappingTable.set("BF74", "96F0");
mappingTable.set("BF75", "96F1");
mappingTable.set("BF76", "96F2");
mappingTable.set("BF77", "96F3");
mappingTable.set("BF78", "96F4");
mappingTable.set("BF79", "96F5");
mappingTable.set("BF7A", "96F6");
mappingTable.set("BF7B", "96F7");
mappingTable.set("BF7C", "96F8");
mappingTable.set("BF7D", "96F9");
mappingTable.set("BF7E", "96FA");
mappingTable.set("BF7F", "96FB");
mappingTable.set("BF80", "96FC");
mappingTable.set("BF81", "96FD");
mappingTable.set("BF82", "96FE");
mappingTable.set("BF83", "9741");
mappingTable.set("BF84", "9742");
mappingTable.set("BF85", "9743");
mappingTable.set("BF86", "9744");
mappingTable.set("BF87", "9745");
mappingTable.set("BF88", "9746");
mappingTable.set("BF89", "9747");
mappingTable.set("BF8A", "9748");
mappingTable.set("BF8B", "9749");
mappingTable.set("BF8C", "974A");
mappingTable.set("BF8D", "974B");
mappingTable.set("BF8E", "974C");
mappingTable.set("BF8F", "974D");
mappingTable.set("BF90", "974E");
mappingTable.set("BF91", "974F");
mappingTable.set("BF92", "9750");
mappingTable.set("BF93", "9751");
mappingTable.set("BF95", "9752");
mappingTable.set("BF96", "9753");
mappingTable.set("BF97", "9754");
mappingTable.set("BF98", "9755");
mappingTable.set("BF99", "9756");
mappingTable.set("BF9A", "9757");
mappingTable.set("BF9B", "9758");
mappingTable.set("BF9C", "9759");
mappingTable.set("BF9D", "975A");
mappingTable.set("BF9E", "9761");
mappingTable.set("BF9F", "9762");
mappingTable.set("BFA0", "9763");
mappingTable.set("BFA1", "9764");
mappingTable.set("BFA2", "9765");
mappingTable.set("BFA3", "9766");
mappingTable.set("BFA4", "9767");
mappingTable.set("BFA5", "9768");
mappingTable.set("BFA6", "9769");
mappingTable.set("BFA7", "976A");
mappingTable.set("BFA8", "976B");
mappingTable.set("BFA9", "976C");
mappingTable.set("BFAA", "976D");
mappingTable.set("BFAB", "976E");
mappingTable.set("BFAC", "976F");
mappingTable.set("BFAD", "9770");
mappingTable.set("BFAE", "9771");
mappingTable.set("BFAF", "9772");
mappingTable.set("BFB1", "9773");
mappingTable.set("BFB2", "9774");
mappingTable.set("BFB3", "9775");
mappingTable.set("BFB4", "9776");
mappingTable.set("BFB5", "9777");
mappingTable.set("BFB6", "9778");
mappingTable.set("BFB7", "9779");
mappingTable.set("BFB8", "977A");
mappingTable.set("BFB9", "9781");
mappingTable.set("BFBA", "9782");
mappingTable.set("BFBB", "9783");
mappingTable.set("BFBC", "9784");
mappingTable.set("BFBD", "9785");
mappingTable.set("BFBE", "9786");
mappingTable.set("BFBF", "9787");
mappingTable.set("BFC0", "9788");
mappingTable.set("BFC1", "9789");
mappingTable.set("BFC2", "978A");
mappingTable.set("BFC3", "978B");
mappingTable.set("BFC4", "978C");
mappingTable.set("BFC6", "978D");
mappingTable.set("BFC7", "978E");
mappingTable.set("BFC8", "978F");
mappingTable.set("BFC9", "9790");
mappingTable.set("BFCA", "9791");
mappingTable.set("BFCB", "9792");
mappingTable.set("BFCE", "9793");
mappingTable.set("BFCF", "9794");
mappingTable.set("BFD1", "9795");
mappingTable.set("BFD2", "9796");
mappingTable.set("BFD3", "9797");
mappingTable.set("BFD5", "9798");
mappingTable.set("BFD6", "9799");
mappingTable.set("BFD7", "979A");
mappingTable.set("BFD8", "979B");
mappingTable.set("BFD9", "979C");
mappingTable.set("BFDA", "979D");
mappingTable.set("BFDB", "979E");
mappingTable.set("BFDD", "979F");
mappingTable.set("BFDE", "97A0");
mappingTable.set("BFE0", "97A1");
mappingTable.set("BFE2", "97A2");
mappingTable.set("BFE3", "97A3");
mappingTable.set("BFE4", "97A4");
mappingTable.set("BFE5", "97A5");
mappingTable.set("BFE6", "97A6");
mappingTable.set("BFE7", "97A7");
mappingTable.set("BFE8", "97A8");
mappingTable.set("BFE9", "97A9");
mappingTable.set("BFEA", "97AA");
mappingTable.set("BFEB", "97AB");
mappingTable.set("BFEC", "97AC");
mappingTable.set("BFED", "97AD");
mappingTable.set("BFEE", "97AE");
mappingTable.set("BFEF", "97AF");
mappingTable.set("BFF0", "97B0");
mappingTable.set("BFF1", "97B1");
mappingTable.set("BFF2", "97B2");
mappingTable.set("BFF3", "97B3");
mappingTable.set("BFF4", "97B4");
mappingTable.set("BFF5", "97B5");
mappingTable.set("BFF6", "97B6");
mappingTable.set("BFF7", "97B7");
mappingTable.set("BFF8", "97B8");
mappingTable.set("BFF9", "97B9");
mappingTable.set("BFFA", "97BA");
mappingTable.set("BFFB", "97BB");
mappingTable.set("BFFC", "97BC");
mappingTable.set("BFFD", "97BD");
mappingTable.set("BFFE", "97BE");
mappingTable.set("BFFF", "97BF");
mappingTable.set("C000", "97C0");
mappingTable.set("C001", "97C1");
mappingTable.set("C002", "97C2");
mappingTable.set("C003", "97C3");
mappingTable.set("C004", "97C4");
mappingTable.set("C005", "97C5");
mappingTable.set("C006", "97C6");
mappingTable.set("C007", "97C7");
mappingTable.set("C008", "97C8");
mappingTable.set("C009", "97C9");
mappingTable.set("C00A", "97CA");
mappingTable.set("C00B", "97CB");
mappingTable.set("C00C", "97CC");
mappingTable.set("C00D", "97CD");
mappingTable.set("C00E", "97CE");
mappingTable.set("C00F", "97CF");
mappingTable.set("C010", "97D0");
mappingTable.set("C011", "97D1");
mappingTable.set("C012", "97D2");
mappingTable.set("C013", "97D3");
mappingTable.set("C014", "97D4");
mappingTable.set("C015", "97D5");
mappingTable.set("C016", "97D6");
mappingTable.set("C017", "97D7");
mappingTable.set("C018", "97D8");
mappingTable.set("C019", "97D9");
mappingTable.set("C01A", "97DA");
mappingTable.set("C01B", "97DB");
mappingTable.set("C01C", "97DC");
mappingTable.set("C01D", "97DD");
mappingTable.set("C01E", "97DE");
mappingTable.set("C01F", "97DF");
mappingTable.set("C020", "97E0");
mappingTable.set("C021", "97E1");
mappingTable.set("C022", "97E2");
mappingTable.set("C023", "97E3");
mappingTable.set("C024", "97E4");
mappingTable.set("C025", "97E5");
mappingTable.set("C026", "97E6");
mappingTable.set("C027", "97E7");
mappingTable.set("C028", "97E8");
mappingTable.set("C029", "97E9");
mappingTable.set("C02A", "97EA");
mappingTable.set("C02B", "97EB");
mappingTable.set("C02C", "97EC");
mappingTable.set("C02D", "97ED");
mappingTable.set("C02E", "97EE");
mappingTable.set("C02F", "97EF");
mappingTable.set("C030", "97F0");
mappingTable.set("C031", "97F1");
mappingTable.set("C032", "97F2");
mappingTable.set("C033", "97F3");
mappingTable.set("C034", "97F4");
mappingTable.set("C035", "97F5");
mappingTable.set("C036", "97F6");
mappingTable.set("C037", "97F7");
mappingTable.set("C038", "97F8");
mappingTable.set("C039", "97F9");
mappingTable.set("C03A", "97FA");
mappingTable.set("C03B", "97FB");
mappingTable.set("C03D", "97FC");
mappingTable.set("C03E", "97FD");
mappingTable.set("C03F", "97FE");
mappingTable.set("C040", "9841");
mappingTable.set("C041", "9842");
mappingTable.set("C042", "9843");
mappingTable.set("C043", "9844");
mappingTable.set("C044", "9845");
mappingTable.set("C045", "9846");
mappingTable.set("C046", "9847");
mappingTable.set("C047", "9848");
mappingTable.set("C048", "9849");
mappingTable.set("C049", "984A");
mappingTable.set("C04A", "984B");
mappingTable.set("C04B", "984C");
mappingTable.set("C04C", "984D");
mappingTable.set("C04D", "984E");
mappingTable.set("C04E", "984F");
mappingTable.set("C04F", "9850");
mappingTable.set("C050", "9851");
mappingTable.set("C052", "9852");
mappingTable.set("C053", "9853");
mappingTable.set("C054", "9854");
mappingTable.set("C055", "9855");
mappingTable.set("C056", "9856");
mappingTable.set("C057", "9857");
mappingTable.set("C059", "9858");
mappingTable.set("C05A", "9859");
mappingTable.set("C05B", "985A");
mappingTable.set("C05D", "9861");
mappingTable.set("C05E", "9862");
mappingTable.set("C05F", "9863");
mappingTable.set("C061", "9864");
mappingTable.set("C062", "9865");
mappingTable.set("C063", "9866");
mappingTable.set("C064", "9867");
mappingTable.set("C065", "9868");
mappingTable.set("C066", "9869");
mappingTable.set("C067", "986A");
mappingTable.set("C06A", "986B");
mappingTable.set("C06B", "986C");
mappingTable.set("C06C", "986D");
mappingTable.set("C06D", "986E");
mappingTable.set("C06E", "986F");
mappingTable.set("C06F", "9870");
mappingTable.set("C070", "9871");
mappingTable.set("C071", "9872");
mappingTable.set("C072", "9873");
mappingTable.set("C073", "9874");
mappingTable.set("C074", "9875");
mappingTable.set("C075", "9876");
mappingTable.set("C076", "9877");
mappingTable.set("C077", "9878");
mappingTable.set("C078", "9879");
mappingTable.set("C079", "987A");
mappingTable.set("C07A", "9881");
mappingTable.set("C07B", "9882");
mappingTable.set("C07C", "9883");
mappingTable.set("C07D", "9884");
mappingTable.set("C07E", "9885");
mappingTable.set("C07F", "9886");
mappingTable.set("C080", "9887");
mappingTable.set("C081", "9888");
mappingTable.set("C082", "9889");
mappingTable.set("C083", "988A");
mappingTable.set("C084", "988B");
mappingTable.set("C085", "988C");
mappingTable.set("C086", "988D");
mappingTable.set("C087", "988E");
mappingTable.set("C088", "988F");
mappingTable.set("C089", "9890");
mappingTable.set("C08A", "9891");
mappingTable.set("C08B", "9892");
mappingTable.set("C08C", "9893");
mappingTable.set("C08D", "9894");
mappingTable.set("C08E", "9895");
mappingTable.set("C08F", "9896");
mappingTable.set("C092", "9897");
mappingTable.set("C093", "9898");
mappingTable.set("C095", "9899");
mappingTable.set("C096", "989A");
mappingTable.set("C097", "989B");
mappingTable.set("C099", "989C");
mappingTable.set("C09A", "989D");
mappingTable.set("C09B", "989E");
mappingTable.set("C09C", "989F");
mappingTable.set("C09D", "98A0");
mappingTable.set("C09E", "98A1");
mappingTable.set("C09F", "98A2");
mappingTable.set("C0A2", "98A3");
mappingTable.set("C0A4", "98A4");
mappingTable.set("C0A6", "98A5");
mappingTable.set("C0A7", "98A6");
mappingTable.set("C0A8", "98A7");
mappingTable.set("C0A9", "98A8");
mappingTable.set("C0AA", "98A9");
mappingTable.set("C0AB", "98AA");
mappingTable.set("C0AE", "98AB");
mappingTable.set("C0B1", "98AC");
mappingTable.set("C0B2", "98AD");
mappingTable.set("C0B7", "98AE");
mappingTable.set("C0B8", "98AF");
mappingTable.set("C0B9", "98B0");
mappingTable.set("C0BA", "98B1");
mappingTable.set("C0BB", "98B2");
mappingTable.set("C0BE", "98B3");
mappingTable.set("C0C2", "98B4");
mappingTable.set("C0C3", "98B5");
mappingTable.set("C0C4", "98B6");
mappingTable.set("C0C6", "98B7");
mappingTable.set("C0C7", "98B8");
mappingTable.set("C0CA", "98B9");
mappingTable.set("C0CB", "98BA");
mappingTable.set("C0CD", "98BB");
mappingTable.set("C0CE", "98BC");
mappingTable.set("C0CF", "98BD");
mappingTable.set("C0D1", "98BE");
mappingTable.set("C0D2", "98BF");
mappingTable.set("C0D3", "98C0");
mappingTable.set("C0D4", "98C1");
mappingTable.set("C0D5", "98C2");
mappingTable.set("C0D6", "98C3");
mappingTable.set("C0D7", "98C4");
mappingTable.set("C0DA", "98C5");
mappingTable.set("C0DE", "98C6");
mappingTable.set("C0DF", "98C7");
mappingTable.set("C0E0", "98C8");
mappingTable.set("C0E1", "98C9");
mappingTable.set("C0E2", "98CA");
mappingTable.set("C0E3", "98CB");
mappingTable.set("C0E6", "98CC");
mappingTable.set("C0E7", "98CD");
mappingTable.set("C0E9", "98CE");
mappingTable.set("C0EA", "98CF");
mappingTable.set("C0EB", "98D0");
mappingTable.set("C0ED", "98D1");
mappingTable.set("C0EE", "98D2");
mappingTable.set("C0EF", "98D3");
mappingTable.set("C0F0", "98D4");
mappingTable.set("C0F1", "98D5");
mappingTable.set("C0F2", "98D6");
mappingTable.set("C0F3", "98D7");
mappingTable.set("C0F6", "98D8");
mappingTable.set("C0F8", "98D9");
mappingTable.set("C0FA", "98DA");
mappingTable.set("C0FB", "98DB");
mappingTable.set("C0FC", "98DC");
mappingTable.set("C0FD", "98DD");
mappingTable.set("C0FE", "98DE");
mappingTable.set("C0FF", "98DF");
mappingTable.set("C101", "98E0");
mappingTable.set("C102", "98E1");
mappingTable.set("C103", "98E2");
mappingTable.set("C105", "98E3");
mappingTable.set("C106", "98E4");
mappingTable.set("C107", "98E5");
mappingTable.set("C109", "98E6");
mappingTable.set("C10A", "98E7");
mappingTable.set("C10B", "98E8");
mappingTable.set("C10C", "98E9");
mappingTable.set("C10D", "98EA");
mappingTable.set("C10E", "98EB");
mappingTable.set("C10F", "98EC");
mappingTable.set("C111", "98ED");
mappingTable.set("C112", "98EE");
mappingTable.set("C113", "98EF");
mappingTable.set("C114", "98F0");
mappingTable.set("C116", "98F1");
mappingTable.set("C117", "98F2");
mappingTable.set("C118", "98F3");
mappingTable.set("C119", "98F4");
mappingTable.set("C11A", "98F5");
mappingTable.set("C11B", "98F6");
mappingTable.set("C121", "98F7");
mappingTable.set("C122", "98F8");
mappingTable.set("C125", "98F9");
mappingTable.set("C128", "98FA");
mappingTable.set("C129", "98FB");
mappingTable.set("C12A", "98FC");
mappingTable.set("C12B", "98FD");
mappingTable.set("C12E", "98FE");
mappingTable.set("C132", "9941");
mappingTable.set("C133", "9942");
mappingTable.set("C134", "9943");
mappingTable.set("C135", "9944");
mappingTable.set("C137", "9945");
mappingTable.set("C13A", "9946");
mappingTable.set("C13B", "9947");
mappingTable.set("C13D", "9948");
mappingTable.set("C13E", "9949");
mappingTable.set("C13F", "994A");
mappingTable.set("C141", "994B");
mappingTable.set("C142", "994C");
mappingTable.set("C143", "994D");
mappingTable.set("C144", "994E");
mappingTable.set("C145", "994F");
mappingTable.set("C146", "9950");
mappingTable.set("C147", "9951");
mappingTable.set("C14A", "9952");
mappingTable.set("C14E", "9953");
mappingTable.set("C14F", "9954");
mappingTable.set("C150", "9955");
mappingTable.set("C151", "9956");
mappingTable.set("C152", "9957");
mappingTable.set("C153", "9958");
mappingTable.set("C156", "9959");
mappingTable.set("C157", "995A");
mappingTable.set("C159", "9961");
mappingTable.set("C15A", "9962");
mappingTable.set("C15B", "9963");
mappingTable.set("C15D", "9964");
mappingTable.set("C15E", "9965");
mappingTable.set("C15F", "9966");
mappingTable.set("C160", "9967");
mappingTable.set("C161", "9968");
mappingTable.set("C162", "9969");
mappingTable.set("C163", "996A");
mappingTable.set("C166", "996B");
mappingTable.set("C16A", "996C");
mappingTable.set("C16B", "996D");
mappingTable.set("C16C", "996E");
mappingTable.set("C16D", "996F");
mappingTable.set("C16E", "9970");
mappingTable.set("C16F", "9971");
mappingTable.set("C171", "9972");
mappingTable.set("C172", "9973");
mappingTable.set("C173", "9974");
mappingTable.set("C175", "9975");
mappingTable.set("C176", "9976");
mappingTable.set("C177", "9977");
mappingTable.set("C179", "9978");
mappingTable.set("C17A", "9979");
mappingTable.set("C17B", "997A");
mappingTable.set("C17C", "9981");
mappingTable.set("C17D", "9982");
mappingTable.set("C17E", "9983");
mappingTable.set("C17F", "9984");
mappingTable.set("C180", "9985");
mappingTable.set("C181", "9986");
mappingTable.set("C182", "9987");
mappingTable.set("C183", "9988");
mappingTable.set("C184", "9989");
mappingTable.set("C186", "998A");
mappingTable.set("C187", "998B");
mappingTable.set("C188", "998C");
mappingTable.set("C189", "998D");
mappingTable.set("C18A", "998E");
mappingTable.set("C18B", "998F");
mappingTable.set("C18F", "9990");
mappingTable.set("C191", "9991");
mappingTable.set("C192", "9992");
mappingTable.set("C193", "9993");
mappingTable.set("C195", "9994");
mappingTable.set("C197", "9995");
mappingTable.set("C198", "9996");
mappingTable.set("C199", "9997");
mappingTable.set("C19A", "9998");
mappingTable.set("C19B", "9999");
mappingTable.set("C19E", "999A");
mappingTable.set("C1A0", "999B");
mappingTable.set("C1A2", "999C");
mappingTable.set("C1A3", "999D");
mappingTable.set("C1A4", "999E");
mappingTable.set("C1A6", "999F");
mappingTable.set("C1A7", "99A0");
mappingTable.set("C1AA", "99A1");
mappingTable.set("C1AB", "99A2");
mappingTable.set("C1AD", "99A3");
mappingTable.set("C1AE", "99A4");
mappingTable.set("C1AF", "99A5");
mappingTable.set("C1B1", "99A6");
mappingTable.set("C1B2", "99A7");
mappingTable.set("C1B3", "99A8");
mappingTable.set("C1B4", "99A9");
mappingTable.set("C1B5", "99AA");
mappingTable.set("C1B6", "99AB");
mappingTable.set("C1B7", "99AC");
mappingTable.set("C1B8", "99AD");
mappingTable.set("C1B9", "99AE");
mappingTable.set("C1BA", "99AF");
mappingTable.set("C1BB", "99B0");
mappingTable.set("C1BC", "99B1");
mappingTable.set("C1BE", "99B2");
mappingTable.set("C1BF", "99B3");
mappingTable.set("C1C0", "99B4");
mappingTable.set("C1C1", "99B5");
mappingTable.set("C1C2", "99B6");
mappingTable.set("C1C3", "99B7");
mappingTable.set("C1C5", "99B8");
mappingTable.set("C1C6", "99B9");
mappingTable.set("C1C7", "99BA");
mappingTable.set("C1C9", "99BB");
mappingTable.set("C1CA", "99BC");
mappingTable.set("C1CB", "99BD");
mappingTable.set("C1CD", "99BE");
mappingTable.set("C1CE", "99BF");
mappingTable.set("C1CF", "99C0");
mappingTable.set("C1D0", "99C1");
mappingTable.set("C1D1", "99C2");
mappingTable.set("C1D2", "99C3");
mappingTable.set("C1D3", "99C4");
mappingTable.set("C1D5", "99C5");
mappingTable.set("C1D6", "99C6");
mappingTable.set("C1D9", "99C7");
mappingTable.set("C1DA", "99C8");
mappingTable.set("C1DB", "99C9");
mappingTable.set("C1DC", "99CA");
mappingTable.set("C1DD", "99CB");
mappingTable.set("C1DE", "99CC");
mappingTable.set("C1DF", "99CD");
mappingTable.set("C1E1", "99CE");
mappingTable.set("C1E2", "99CF");
mappingTable.set("C1E3", "99D0");
mappingTable.set("C1E5", "99D1");
mappingTable.set("C1E6", "99D2");
mappingTable.set("C1E7", "99D3");
mappingTable.set("C1E9", "99D4");
mappingTable.set("C1EA", "99D5");
mappingTable.set("C1EB", "99D6");
mappingTable.set("C1EC", "99D7");
mappingTable.set("C1ED", "99D8");
mappingTable.set("C1EE", "99D9");
mappingTable.set("C1EF", "99DA");
mappingTable.set("C1F2", "99DB");
mappingTable.set("C1F4", "99DC");
mappingTable.set("C1F5", "99DD");
mappingTable.set("C1F6", "99DE");
mappingTable.set("C1F7", "99DF");
mappingTable.set("C1F8", "99E0");
mappingTable.set("C1F9", "99E1");
mappingTable.set("C1FA", "99E2");
mappingTable.set("C1FB", "99E3");
mappingTable.set("C1FE", "99E4");
mappingTable.set("C1FF", "99E5");
mappingTable.set("C201", "99E6");
mappingTable.set("C202", "99E7");
mappingTable.set("C203", "99E8");
mappingTable.set("C205", "99E9");
mappingTable.set("C206", "99EA");
mappingTable.set("C207", "99EB");
mappingTable.set("C208", "99EC");
mappingTable.set("C209", "99ED");
mappingTable.set("C20A", "99EE");
mappingTable.set("C20B", "99EF");
mappingTable.set("C20E", "99F0");
mappingTable.set("C210", "99F1");
mappingTable.set("C212", "99F2");
mappingTable.set("C213", "99F3");
mappingTable.set("C214", "99F4");
mappingTable.set("C215", "99F5");
mappingTable.set("C216", "99F6");
mappingTable.set("C217", "99F7");
mappingTable.set("C21A", "99F8");
mappingTable.set("C21B", "99F9");
mappingTable.set("C21D", "99FA");
mappingTable.set("C21E", "99FB");
mappingTable.set("C221", "99FC");
mappingTable.set("C222", "99FD");
mappingTable.set("C223", "99FE");
mappingTable.set("C224", "9A41");
mappingTable.set("C225", "9A42");
mappingTable.set("C226", "9A43");
mappingTable.set("C227", "9A44");
mappingTable.set("C22A", "9A45");
mappingTable.set("C22C", "9A46");
mappingTable.set("C22E", "9A47");
mappingTable.set("C230", "9A48");
mappingTable.set("C233", "9A49");
mappingTable.set("C235", "9A4A");
mappingTable.set("C236", "9A4B");
mappingTable.set("C237", "9A4C");
mappingTable.set("C238", "9A4D");
mappingTable.set("C239", "9A4E");
mappingTable.set("C23A", "9A4F");
mappingTable.set("C23B", "9A50");
mappingTable.set("C23C", "9A51");
mappingTable.set("C23D", "9A52");
mappingTable.set("C23E", "9A53");
mappingTable.set("C23F", "9A54");
mappingTable.set("C240", "9A55");
mappingTable.set("C241", "9A56");
mappingTable.set("C242", "9A57");
mappingTable.set("C243", "9A58");
mappingTable.set("C244", "9A59");
mappingTable.set("C245", "9A5A");
mappingTable.set("C246", "9A61");
mappingTable.set("C247", "9A62");
mappingTable.set("C249", "9A63");
mappingTable.set("C24A", "9A64");
mappingTable.set("C24B", "9A65");
mappingTable.set("C24C", "9A66");
mappingTable.set("C24D", "9A67");
mappingTable.set("C24E", "9A68");
mappingTable.set("C24F", "9A69");
mappingTable.set("C252", "9A6A");
mappingTable.set("C253", "9A6B");
mappingTable.set("C255", "9A6C");
mappingTable.set("C256", "9A6D");
mappingTable.set("C257", "9A6E");
mappingTable.set("C259", "9A6F");
mappingTable.set("C25A", "9A70");
mappingTable.set("C25B", "9A71");
mappingTable.set("C25C", "9A72");
mappingTable.set("C25D", "9A73");
mappingTable.set("C25E", "9A74");
mappingTable.set("C25F", "9A75");
mappingTable.set("C261", "9A76");
mappingTable.set("C262", "9A77");
mappingTable.set("C263", "9A78");
mappingTable.set("C264", "9A79");
mappingTable.set("C266", "9A7A");
mappingTable.set("C267", "9A81");
mappingTable.set("C268", "9A82");
mappingTable.set("C269", "9A83");
mappingTable.set("C26A", "9A84");
mappingTable.set("C26B", "9A85");
mappingTable.set("C26E", "9A86");
mappingTable.set("C26F", "9A87");
mappingTable.set("C271", "9A88");
mappingTable.set("C272", "9A89");
mappingTable.set("C273", "9A8A");
mappingTable.set("C275", "9A8B");
mappingTable.set("C276", "9A8C");
mappingTable.set("C277", "9A8D");
mappingTable.set("C278", "9A8E");
mappingTable.set("C279", "9A8F");
mappingTable.set("C27A", "9A90");
mappingTable.set("C27B", "9A91");
mappingTable.set("C27E", "9A92");
mappingTable.set("C280", "9A93");
mappingTable.set("C282", "9A94");
mappingTable.set("C283", "9A95");
mappingTable.set("C284", "9A96");
mappingTable.set("C285", "9A97");
mappingTable.set("C286", "9A98");
mappingTable.set("C287", "9A99");
mappingTable.set("C28A", "9A9A");
mappingTable.set("C28B", "9A9B");
mappingTable.set("C28C", "9A9C");
mappingTable.set("C28D", "9A9D");
mappingTable.set("C28E", "9A9E");
mappingTable.set("C28F", "9A9F");
mappingTable.set("C291", "9AA0");
mappingTable.set("C292", "9AA1");
mappingTable.set("C293", "9AA2");
mappingTable.set("C294", "9AA3");
mappingTable.set("C295", "9AA4");
mappingTable.set("C296", "9AA5");
mappingTable.set("C297", "9AA6");
mappingTable.set("C299", "9AA7");
mappingTable.set("C29A", "9AA8");
mappingTable.set("C29C", "9AA9");
mappingTable.set("C29E", "9AAA");
mappingTable.set("C29F", "9AAB");
mappingTable.set("C2A0", "9AAC");
mappingTable.set("C2A1", "9AAD");
mappingTable.set("C2A2", "9AAE");
mappingTable.set("C2A3", "9AAF");
mappingTable.set("C2A6", "9AB0");
mappingTable.set("C2A7", "9AB1");
mappingTable.set("C2A9", "9AB2");
mappingTable.set("C2AA", "9AB3");
mappingTable.set("C2AB", "9AB4");
mappingTable.set("C2AE", "9AB5");
mappingTable.set("C2AF", "9AB6");
mappingTable.set("C2B0", "9AB7");
mappingTable.set("C2B1", "9AB8");
mappingTable.set("C2B2", "9AB9");
mappingTable.set("C2B3", "9ABA");
mappingTable.set("C2B6", "9ABB");
mappingTable.set("C2B8", "9ABC");
mappingTable.set("C2BA", "9ABD");
mappingTable.set("C2BB", "9ABE");
mappingTable.set("C2BC", "9ABF");
mappingTable.set("C2BD", "9AC0");
mappingTable.set("C2BE", "9AC1");
mappingTable.set("C2BF", "9AC2");
mappingTable.set("C2C0", "9AC3");
mappingTable.set("C2C1", "9AC4");
mappingTable.set("C2C2", "9AC5");
mappingTable.set("C2C3", "9AC6");
mappingTable.set("C2C4", "9AC7");
mappingTable.set("C2C5", "9AC8");
mappingTable.set("C2C6", "9AC9");
mappingTable.set("C2C7", "9ACA");
mappingTable.set("C2C8", "9ACB");
mappingTable.set("C2C9", "9ACC");
mappingTable.set("C2CA", "9ACD");
mappingTable.set("C2CB", "9ACE");
mappingTable.set("C2CC", "9ACF");
mappingTable.set("C2CD", "9AD0");
mappingTable.set("C2CE", "9AD1");
mappingTable.set("C2CF", "9AD2");
mappingTable.set("C2D0", "9AD3");
mappingTable.set("C2D1", "9AD4");
mappingTable.set("C2D2", "9AD5");
mappingTable.set("C2D3", "9AD6");
mappingTable.set("C2D4", "9AD7");
mappingTable.set("C2D5", "9AD8");
mappingTable.set("C2D6", "9AD9");
mappingTable.set("C2D7", "9ADA");
mappingTable.set("C2D8", "9ADB");
mappingTable.set("C2D9", "9ADC");
mappingTable.set("C2DA", "9ADD");
mappingTable.set("C2DB", "9ADE");
mappingTable.set("C2DE", "9ADF");
mappingTable.set("C2DF", "9AE0");
mappingTable.set("C2E1", "9AE1");
mappingTable.set("C2E2", "9AE2");
mappingTable.set("C2E5", "9AE3");
mappingTable.set("C2E6", "9AE4");
mappingTable.set("C2E7", "9AE5");
mappingTable.set("C2E8", "9AE6");
mappingTable.set("C2E9", "9AE7");
mappingTable.set("C2EA", "9AE8");
mappingTable.set("C2EE", "9AE9");
mappingTable.set("C2F0", "9AEA");
mappingTable.set("C2F2", "9AEB");
mappingTable.set("C2F3", "9AEC");
mappingTable.set("C2F4", "9AED");
mappingTable.set("C2F5", "9AEE");
mappingTable.set("C2F7", "9AEF");
mappingTable.set("C2FA", "9AF0");
mappingTable.set("C2FD", "9AF1");
mappingTable.set("C2FE", "9AF2");
mappingTable.set("C2FF", "9AF3");
mappingTable.set("C301", "9AF4");
mappingTable.set("C302", "9AF5");
mappingTable.set("C303", "9AF6");
mappingTable.set("C304", "9AF7");
mappingTable.set("C305", "9AF8");
mappingTable.set("C306", "9AF9");
mappingTable.set("C307", "9AFA");
mappingTable.set("C30A", "9AFB");
mappingTable.set("C30B", "9AFC");
mappingTable.set("C30E", "9AFD");
mappingTable.set("C30F", "9AFE");
mappingTable.set("C310", "9B41");
mappingTable.set("C311", "9B42");
mappingTable.set("C312", "9B43");
mappingTable.set("C316", "9B44");
mappingTable.set("C317", "9B45");
mappingTable.set("C319", "9B46");
mappingTable.set("C31A", "9B47");
mappingTable.set("C31B", "9B48");
mappingTable.set("C31D", "9B49");
mappingTable.set("C31E", "9B4A");
mappingTable.set("C31F", "9B4B");
mappingTable.set("C320", "9B4C");
mappingTable.set("C321", "9B4D");
mappingTable.set("C322", "9B4E");
mappingTable.set("C323", "9B4F");
mappingTable.set("C326", "9B50");
mappingTable.set("C327", "9B51");
mappingTable.set("C32A", "9B52");
mappingTable.set("C32B", "9B53");
mappingTable.set("C32C", "9B54");
mappingTable.set("C32D", "9B55");
mappingTable.set("C32E", "9B56");
mappingTable.set("C32F", "9B57");
mappingTable.set("C330", "9B58");
mappingTable.set("C331", "9B59");
mappingTable.set("C332", "9B5A");
mappingTable.set("C333", "9B61");
mappingTable.set("C334", "9B62");
mappingTable.set("C335", "9B63");
mappingTable.set("C336", "9B64");
mappingTable.set("C337", "9B65");
mappingTable.set("C338", "9B66");
mappingTable.set("C339", "9B67");
mappingTable.set("C33A", "9B68");
mappingTable.set("C33B", "9B69");
mappingTable.set("C33C", "9B6A");
mappingTable.set("C33D", "9B6B");
mappingTable.set("C33E", "9B6C");
mappingTable.set("C33F", "9B6D");
mappingTable.set("C340", "9B6E");
mappingTable.set("C341", "9B6F");
mappingTable.set("C342", "9B70");
mappingTable.set("C343", "9B71");
mappingTable.set("C344", "9B72");
mappingTable.set("C346", "9B73");
mappingTable.set("C347", "9B74");
mappingTable.set("C348", "9B75");
mappingTable.set("C349", "9B76");
mappingTable.set("C34A", "9B77");
mappingTable.set("C34B", "9B78");
mappingTable.set("C34C", "9B79");
mappingTable.set("C34D", "9B7A");
mappingTable.set("C34E", "9B81");
mappingTable.set("C34F", "9B82");
mappingTable.set("C350", "9B83");
mappingTable.set("C351", "9B84");
mappingTable.set("C352", "9B85");
mappingTable.set("C353", "9B86");
mappingTable.set("C354", "9B87");
mappingTable.set("C355", "9B88");
mappingTable.set("C356", "9B89");
mappingTable.set("C357", "9B8A");
mappingTable.set("C358", "9B8B");
mappingTable.set("C359", "9B8C");
mappingTable.set("C35A", "9B8D");
mappingTable.set("C35B", "9B8E");
mappingTable.set("C35C", "9B8F");
mappingTable.set("C35D", "9B90");
mappingTable.set("C35E", "9B91");
mappingTable.set("C35F", "9B92");
mappingTable.set("C360", "9B93");
mappingTable.set("C361", "9B94");
mappingTable.set("C362", "9B95");
mappingTable.set("C363", "9B96");
mappingTable.set("C364", "9B97");
mappingTable.set("C365", "9B98");
mappingTable.set("C366", "9B99");
mappingTable.set("C367", "9B9A");
mappingTable.set("C36A", "9B9B");
mappingTable.set("C36B", "9B9C");
mappingTable.set("C36D", "9B9D");
mappingTable.set("C36E", "9B9E");
mappingTable.set("C36F", "9B9F");
mappingTable.set("C371", "9BA0");
mappingTable.set("C373", "9BA1");
mappingTable.set("C374", "9BA2");
mappingTable.set("C375", "9BA3");
mappingTable.set("C376", "9BA4");
mappingTable.set("C377", "9BA5");
mappingTable.set("C37A", "9BA6");
mappingTable.set("C37B", "9BA7");
mappingTable.set("C37E", "9BA8");
mappingTable.set("C37F", "9BA9");
mappingTable.set("C380", "9BAA");
mappingTable.set("C381", "9BAB");
mappingTable.set("C382", "9BAC");
mappingTable.set("C383", "9BAD");
mappingTable.set("C385", "9BAE");
mappingTable.set("C386", "9BAF");
mappingTable.set("C387", "9BB0");
mappingTable.set("C389", "9BB1");
mappingTable.set("C38A", "9BB2");
mappingTable.set("C38B", "9BB3");
mappingTable.set("C38D", "9BB4");
mappingTable.set("C38E", "9BB5");
mappingTable.set("C38F", "9BB6");
mappingTable.set("C390", "9BB7");
mappingTable.set("C391", "9BB8");
mappingTable.set("C392", "9BB9");
mappingTable.set("C393", "9BBA");
mappingTable.set("C394", "9BBB");
mappingTable.set("C395", "9BBC");
mappingTable.set("C396", "9BBD");
mappingTable.set("C397", "9BBE");
mappingTable.set("C398", "9BBF");
mappingTable.set("C399", "9BC0");
mappingTable.set("C39A", "9BC1");
mappingTable.set("C39B", "9BC2");
mappingTable.set("C39C", "9BC3");
mappingTable.set("C39D", "9BC4");
mappingTable.set("C39E", "9BC5");
mappingTable.set("C39F", "9BC6");
mappingTable.set("C3A0", "9BC7");
mappingTable.set("C3A1", "9BC8");
mappingTable.set("C3A2", "9BC9");
mappingTable.set("C3A3", "9BCA");
mappingTable.set("C3A4", "9BCB");
mappingTable.set("C3A5", "9BCC");
mappingTable.set("C3A6", "9BCD");
mappingTable.set("C3A7", "9BCE");
mappingTable.set("C3A8", "9BCF");
mappingTable.set("C3A9", "9BD0");
mappingTable.set("C3AA", "9BD1");
mappingTable.set("C3AB", "9BD2");
mappingTable.set("C3AC", "9BD3");
mappingTable.set("C3AD", "9BD4");
mappingTable.set("C3AE", "9BD5");
mappingTable.set("C3AF", "9BD6");
mappingTable.set("C3B0", "9BD7");
mappingTable.set("C3B1", "9BD8");
mappingTable.set("C3B2", "9BD9");
mappingTable.set("C3B3", "9BDA");
mappingTable.set("C3B4", "9BDB");
mappingTable.set("C3B5", "9BDC");
mappingTable.set("C3B6", "9BDD");
mappingTable.set("C3B7", "9BDE");
mappingTable.set("C3B8", "9BDF");
mappingTable.set("C3B9", "9BE0");
mappingTable.set("C3BA", "9BE1");
mappingTable.set("C3BB", "9BE2");
mappingTable.set("C3BC", "9BE3");
mappingTable.set("C3BD", "9BE4");
mappingTable.set("C3BE", "9BE5");
mappingTable.set("C3BF", "9BE6");
mappingTable.set("C3C1", "9BE7");
mappingTable.set("C3C2", "9BE8");
mappingTable.set("C3C3", "9BE9");
mappingTable.set("C3C4", "9BEA");
mappingTable.set("C3C5", "9BEB");
mappingTable.set("C3C6", "9BEC");
mappingTable.set("C3C7", "9BED");
mappingTable.set("C3C8", "9BEE");
mappingTable.set("C3C9", "9BEF");
mappingTable.set("C3CA", "9BF0");
mappingTable.set("C3CB", "9BF1");
mappingTable.set("C3CC", "9BF2");
mappingTable.set("C3CD", "9BF3");
mappingTable.set("C3CE", "9BF4");
mappingTable.set("C3CF", "9BF5");
mappingTable.set("C3D0", "9BF6");
mappingTable.set("C3D1", "9BF7");
mappingTable.set("C3D2", "9BF8");
mappingTable.set("C3D3", "9BF9");
mappingTable.set("C3D4", "9BFA");
mappingTable.set("C3D5", "9BFB");
mappingTable.set("C3D6", "9BFC");
mappingTable.set("C3D7", "9BFD");
mappingTable.set("C3DA", "9BFE");
mappingTable.set("C3DB", "9C41");
mappingTable.set("C3DD", "9C42");
mappingTable.set("C3DE", "9C43");
mappingTable.set("C3E1", "9C44");
mappingTable.set("C3E3", "9C45");
mappingTable.set("C3E4", "9C46");
mappingTable.set("C3E5", "9C47");
mappingTable.set("C3E6", "9C48");
mappingTable.set("C3E7", "9C49");
mappingTable.set("C3EA", "9C4A");
mappingTable.set("C3EB", "9C4B");
mappingTable.set("C3EC", "9C4C");
mappingTable.set("C3EE", "9C4D");
mappingTable.set("C3EF", "9C4E");
mappingTable.set("C3F0", "9C4F");
mappingTable.set("C3F1", "9C50");
mappingTable.set("C3F2", "9C51");
mappingTable.set("C3F3", "9C52");
mappingTable.set("C3F6", "9C53");
mappingTable.set("C3F7", "9C54");
mappingTable.set("C3F9", "9C55");
mappingTable.set("C3FA", "9C56");
mappingTable.set("C3FB", "9C57");
mappingTable.set("C3FC", "9C58");
mappingTable.set("C3FD", "9C59");
mappingTable.set("C3FE", "9C5A");
mappingTable.set("C3FF", "9C61");
mappingTable.set("C400", "9C62");
mappingTable.set("C401", "9C63");
mappingTable.set("C402", "9C64");
mappingTable.set("C403", "9C65");
mappingTable.set("C404", "9C66");
mappingTable.set("C405", "9C67");
mappingTable.set("C406", "9C68");
mappingTable.set("C407", "9C69");
mappingTable.set("C409", "9C6A");
mappingTable.set("C40A", "9C6B");
mappingTable.set("C40B", "9C6C");
mappingTable.set("C40C", "9C6D");
mappingTable.set("C40D", "9C6E");
mappingTable.set("C40E", "9C6F");
mappingTable.set("C40F", "9C70");
mappingTable.set("C411", "9C71");
mappingTable.set("C412", "9C72");
mappingTable.set("C413", "9C73");
mappingTable.set("C414", "9C74");
mappingTable.set("C415", "9C75");
mappingTable.set("C416", "9C76");
mappingTable.set("C417", "9C77");
mappingTable.set("C418", "9C78");
mappingTable.set("C419", "9C79");
mappingTable.set("C41A", "9C7A");
mappingTable.set("C41B", "9C81");
mappingTable.set("C41C", "9C82");
mappingTable.set("C41D", "9C83");
mappingTable.set("C41E", "9C84");
mappingTable.set("C41F", "9C85");
mappingTable.set("C420", "9C86");
mappingTable.set("C421", "9C87");
mappingTable.set("C422", "9C88");
mappingTable.set("C423", "9C89");
mappingTable.set("C425", "9C8A");
mappingTable.set("C426", "9C8B");
mappingTable.set("C427", "9C8C");
mappingTable.set("C428", "9C8D");
mappingTable.set("C429", "9C8E");
mappingTable.set("C42A", "9C8F");
mappingTable.set("C42B", "9C90");
mappingTable.set("C42D", "9C91");
mappingTable.set("C42E", "9C92");
mappingTable.set("C42F", "9C93");
mappingTable.set("C431", "9C94");
mappingTable.set("C432", "9C95");
mappingTable.set("C433", "9C96");
mappingTable.set("C435", "9C97");
mappingTable.set("C436", "9C98");
mappingTable.set("C437", "9C99");
mappingTable.set("C438", "9C9A");
mappingTable.set("C439", "9C9B");
mappingTable.set("C43A", "9C9C");
mappingTable.set("C43B", "9C9D");
mappingTable.set("C43E", "9C9E");
mappingTable.set("C43F", "9C9F");
mappingTable.set("C440", "9CA0");
mappingTable.set("C441", "9CA1");
mappingTable.set("C442", "9CA2");
mappingTable.set("C443", "9CA3");
mappingTable.set("C444", "9CA4");
mappingTable.set("C445", "9CA5");
mappingTable.set("C446", "9CA6");
mappingTable.set("C447", "9CA7");
mappingTable.set("C449", "9CA8");
mappingTable.set("C44A", "9CA9");
mappingTable.set("C44B", "9CAA");
mappingTable.set("C44C", "9CAB");
mappingTable.set("C44D", "9CAC");
mappingTable.set("C44E", "9CAD");
mappingTable.set("C44F", "9CAE");
mappingTable.set("C450", "9CAF");
mappingTable.set("C451", "9CB0");
mappingTable.set("C452", "9CB1");
mappingTable.set("C453", "9CB2");
mappingTable.set("C454", "9CB3");
mappingTable.set("C455", "9CB4");
mappingTable.set("C456", "9CB5");
mappingTable.set("C457", "9CB6");
mappingTable.set("C458", "9CB7");
mappingTable.set("C459", "9CB8");
mappingTable.set("C45A", "9CB9");
mappingTable.set("C45B", "9CBA");
mappingTable.set("C45C", "9CBB");
mappingTable.set("C45D", "9CBC");
mappingTable.set("C45E", "9CBD");
mappingTable.set("C45F", "9CBE");
mappingTable.set("C460", "9CBF");
mappingTable.set("C461", "9CC0");
mappingTable.set("C462", "9CC1");
mappingTable.set("C463", "9CC2");
mappingTable.set("C466", "9CC3");
mappingTable.set("C467", "9CC4");
mappingTable.set("C469", "9CC5");
mappingTable.set("C46A", "9CC6");
mappingTable.set("C46B", "9CC7");
mappingTable.set("C46D", "9CC8");
mappingTable.set("C46E", "9CC9");
mappingTable.set("C46F", "9CCA");
mappingTable.set("C470", "9CCB");
mappingTable.set("C471", "9CCC");
mappingTable.set("C472", "9CCD");
mappingTable.set("C473", "9CCE");
mappingTable.set("C476", "9CCF");
mappingTable.set("C477", "9CD0");
mappingTable.set("C478", "9CD1");
mappingTable.set("C47A", "9CD2");
mappingTable.set("C47B", "9CD3");
mappingTable.set("C47C", "9CD4");
mappingTable.set("C47D", "9CD5");
mappingTable.set("C47E", "9CD6");
mappingTable.set("C47F", "9CD7");
mappingTable.set("C481", "9CD8");
mappingTable.set("C482", "9CD9");
mappingTable.set("C483", "9CDA");
mappingTable.set("C484", "9CDB");
mappingTable.set("C485", "9CDC");
mappingTable.set("C486", "9CDD");
mappingTable.set("C487", "9CDE");
mappingTable.set("C488", "9CDF");
mappingTable.set("C489", "9CE0");
mappingTable.set("C48A", "9CE1");
mappingTable.set("C48B", "9CE2");
mappingTable.set("C48C", "9CE3");
mappingTable.set("C48D", "9CE4");
mappingTable.set("C48E", "9CE5");
mappingTable.set("C48F", "9CE6");
mappingTable.set("C490", "9CE7");
mappingTable.set("C491", "9CE8");
mappingTable.set("C492", "9CE9");
mappingTable.set("C493", "9CEA");
mappingTable.set("C495", "9CEB");
mappingTable.set("C496", "9CEC");
mappingTable.set("C497", "9CED");
mappingTable.set("C498", "9CEE");
mappingTable.set("C499", "9CEF");
mappingTable.set("C49A", "9CF0");
mappingTable.set("C49B", "9CF1");
mappingTable.set("C49D", "9CF2");
mappingTable.set("C49E", "9CF3");
mappingTable.set("C49F", "9CF4");
mappingTable.set("C4A0", "9CF5");
mappingTable.set("C4A1", "9CF6");
mappingTable.set("C4A2", "9CF7");
mappingTable.set("C4A3", "9CF8");
mappingTable.set("C4A4", "9CF9");
mappingTable.set("C4A5", "9CFA");
mappingTable.set("C4A6", "9CFB");
mappingTable.set("C4A7", "9CFC");
mappingTable.set("C4A8", "9CFD");
mappingTable.set("C4A9", "9CFE");
mappingTable.set("C4AA", "9D41");
mappingTable.set("C4AB", "9D42");
mappingTable.set("C4AC", "9D43");
mappingTable.set("C4AD", "9D44");
mappingTable.set("C4AE", "9D45");
mappingTable.set("C4AF", "9D46");
mappingTable.set("C4B0", "9D47");
mappingTable.set("C4B1", "9D48");
mappingTable.set("C4B2", "9D49");
mappingTable.set("C4B3", "9D4A");
mappingTable.set("C4B4", "9D4B");
mappingTable.set("C4B5", "9D4C");
mappingTable.set("C4B6", "9D4D");
mappingTable.set("C4B7", "9D4E");
mappingTable.set("C4B9", "9D4F");
mappingTable.set("C4BA", "9D50");
mappingTable.set("C4BB", "9D51");
mappingTable.set("C4BD", "9D52");
mappingTable.set("C4BE", "9D53");
mappingTable.set("C4BF", "9D54");
mappingTable.set("C4C0", "9D55");
mappingTable.set("C4C1", "9D56");
mappingTable.set("C4C2", "9D57");
mappingTable.set("C4C3", "9D58");
mappingTable.set("C4C4", "9D59");
mappingTable.set("C4C5", "9D5A");
mappingTable.set("C4C6", "9D61");
mappingTable.set("C4C7", "9D62");
mappingTable.set("C4C8", "9D63");
mappingTable.set("C4C9", "9D64");
mappingTable.set("C4CA", "9D65");
mappingTable.set("C4CB", "9D66");
mappingTable.set("C4CC", "9D67");
mappingTable.set("C4CD", "9D68");
mappingTable.set("C4CE", "9D69");
mappingTable.set("C4CF", "9D6A");
mappingTable.set("C4D0", "9D6B");
mappingTable.set("C4D1", "9D6C");
mappingTable.set("C4D2", "9D6D");
mappingTable.set("C4D3", "9D6E");
mappingTable.set("C4D4", "9D6F");
mappingTable.set("C4D5", "9D70");
mappingTable.set("C4D6", "9D71");
mappingTable.set("C4D7", "9D72");
mappingTable.set("C4D8", "9D73");
mappingTable.set("C4D9", "9D74");
mappingTable.set("C4DA", "9D75");
mappingTable.set("C4DB", "9D76");
mappingTable.set("C4DC", "9D77");
mappingTable.set("C4DD", "9D78");
mappingTable.set("C4DE", "9D79");
mappingTable.set("C4DF", "9D7A");
mappingTable.set("C4E0", "9D81");
mappingTable.set("C4E1", "9D82");
mappingTable.set("C4E2", "9D83");
mappingTable.set("C4E3", "9D84");
mappingTable.set("C4E4", "9D85");
mappingTable.set("C4E5", "9D86");
mappingTable.set("C4E6", "9D87");
mappingTable.set("C4E7", "9D88");
mappingTable.set("C4E8", "9D89");
mappingTable.set("C4EA", "9D8A");
mappingTable.set("C4EB", "9D8B");
mappingTable.set("C4EC", "9D8C");
mappingTable.set("C4ED", "9D8D");
mappingTable.set("C4EE", "9D8E");
mappingTable.set("C4EF", "9D8F");
mappingTable.set("C4F2", "9D90");
mappingTable.set("C4F3", "9D91");
mappingTable.set("C4F5", "9D92");
mappingTable.set("C4F6", "9D93");
mappingTable.set("C4F7", "9D94");
mappingTable.set("C4F9", "9D95");
mappingTable.set("C4FB", "9D96");
mappingTable.set("C4FC", "9D97");
mappingTable.set("C4FD", "9D98");
mappingTable.set("C4FE", "9D99");
mappingTable.set("C502", "9D9A");
mappingTable.set("C503", "9D9B");
mappingTable.set("C504", "9D9C");
mappingTable.set("C505", "9D9D");
mappingTable.set("C506", "9D9E");
mappingTable.set("C507", "9D9F");
mappingTable.set("C508", "9DA0");
mappingTable.set("C509", "9DA1");
mappingTable.set("C50A", "9DA2");
mappingTable.set("C50B", "9DA3");
mappingTable.set("C50D", "9DA4");
mappingTable.set("C50E", "9DA5");
mappingTable.set("C50F", "9DA6");
mappingTable.set("C511", "9DA7");
mappingTable.set("C512", "9DA8");
mappingTable.set("C513", "9DA9");
mappingTable.set("C515", "9DAA");
mappingTable.set("C516", "9DAB");
mappingTable.set("C517", "9DAC");
mappingTable.set("C518", "9DAD");
mappingTable.set("C519", "9DAE");
mappingTable.set("C51A", "9DAF");
mappingTable.set("C51B", "9DB0");
mappingTable.set("C51D", "9DB1");
mappingTable.set("C51E", "9DB2");
mappingTable.set("C51F", "9DB3");
mappingTable.set("C520", "9DB4");
mappingTable.set("C521", "9DB5");
mappingTable.set("C522", "9DB6");
mappingTable.set("C523", "9DB7");
mappingTable.set("C524", "9DB8");
mappingTable.set("C525", "9DB9");
mappingTable.set("C526", "9DBA");
mappingTable.set("C527", "9DBB");
mappingTable.set("C52A", "9DBC");
mappingTable.set("C52B", "9DBD");
mappingTable.set("C52D", "9DBE");
mappingTable.set("C52E", "9DBF");
mappingTable.set("C52F", "9DC0");
mappingTable.set("C531", "9DC1");
mappingTable.set("C532", "9DC2");
mappingTable.set("C533", "9DC3");
mappingTable.set("C534", "9DC4");
mappingTable.set("C535", "9DC5");
mappingTable.set("C536", "9DC6");
mappingTable.set("C537", "9DC7");
mappingTable.set("C53A", "9DC8");
mappingTable.set("C53C", "9DC9");
mappingTable.set("C53E", "9DCA");
mappingTable.set("C53F", "9DCB");
mappingTable.set("C540", "9DCC");
mappingTable.set("C541", "9DCD");
mappingTable.set("C542", "9DCE");
mappingTable.set("C543", "9DCF");
mappingTable.set("C546", "9DD0");
mappingTable.set("C547", "9DD1");
mappingTable.set("C54B", "9DD2");
mappingTable.set("C54F", "9DD3");
mappingTable.set("C550", "9DD4");
mappingTable.set("C551", "9DD5");
mappingTable.set("C552", "9DD6");
mappingTable.set("C556", "9DD7");
mappingTable.set("C55A", "9DD8");
mappingTable.set("C55B", "9DD9");
mappingTable.set("C55C", "9DDA");
mappingTable.set("C55F", "9DDB");
mappingTable.set("C562", "9DDC");
mappingTable.set("C563", "9DDD");
mappingTable.set("C565", "9DDE");
mappingTable.set("C566", "9DDF");
mappingTable.set("C567", "9DE0");
mappingTable.set("C569", "9DE1");
mappingTable.set("C56A", "9DE2");
mappingTable.set("C56B", "9DE3");
mappingTable.set("C56C", "9DE4");
mappingTable.set("C56D", "9DE5");
mappingTable.set("C56E", "9DE6");
mappingTable.set("C56F", "9DE7");
mappingTable.set("C572", "9DE8");
mappingTable.set("C576", "9DE9");
mappingTable.set("C577", "9DEA");
mappingTable.set("C578", "9DEB");
mappingTable.set("C579", "9DEC");
mappingTable.set("C57A", "9DED");
mappingTable.set("C57B", "9DEE");
mappingTable.set("C57E", "9DEF");
mappingTable.set("C57F", "9DF0");
mappingTable.set("C581", "9DF1");
mappingTable.set("C582", "9DF2");
mappingTable.set("C583", "9DF3");
mappingTable.set("C585", "9DF4");
mappingTable.set("C586", "9DF5");
mappingTable.set("C588", "9DF6");
mappingTable.set("C589", "9DF7");
mappingTable.set("C58A", "9DF8");
mappingTable.set("C58B", "9DF9");
mappingTable.set("C58E", "9DFA");
mappingTable.set("C590", "9DFB");
mappingTable.set("C592", "9DFC");
mappingTable.set("C593", "9DFD");
mappingTable.set("C594", "9DFE");
mappingTable.set("C596", "9E41");
mappingTable.set("C599", "9E42");
mappingTable.set("C59A", "9E43");
mappingTable.set("C59B", "9E44");
mappingTable.set("C59D", "9E45");
mappingTable.set("C59E", "9E46");
mappingTable.set("C59F", "9E47");
mappingTable.set("C5A1", "9E48");
mappingTable.set("C5A2", "9E49");
mappingTable.set("C5A3", "9E4A");
mappingTable.set("C5A4", "9E4B");
mappingTable.set("C5A5", "9E4C");
mappingTable.set("C5A6", "9E4D");
mappingTable.set("C5A7", "9E4E");
mappingTable.set("C5A8", "9E4F");
mappingTable.set("C5AA", "9E50");
mappingTable.set("C5AB", "9E51");
mappingTable.set("C5AC", "9E52");
mappingTable.set("C5AD", "9E53");
mappingTable.set("C5AE", "9E54");
mappingTable.set("C5AF", "9E55");
mappingTable.set("C5B0", "9E56");
mappingTable.set("C5B1", "9E57");
mappingTable.set("C5B2", "9E58");
mappingTable.set("C5B3", "9E59");
mappingTable.set("C5B6", "9E5A");
mappingTable.set("C5B7", "9E61");
mappingTable.set("C5BA", "9E62");
mappingTable.set("C5BF", "9E63");
mappingTable.set("C5C0", "9E64");
mappingTable.set("C5C1", "9E65");
mappingTable.set("C5C2", "9E66");
mappingTable.set("C5C3", "9E67");
mappingTable.set("C5CB", "9E68");
mappingTable.set("C5CD", "9E69");
mappingTable.set("C5CF", "9E6A");
mappingTable.set("C5D2", "9E6B");
mappingTable.set("C5D3", "9E6C");
mappingTable.set("C5D5", "9E6D");
mappingTable.set("C5D6", "9E6E");
mappingTable.set("C5D7", "9E6F");
mappingTable.set("C5D9", "9E70");
mappingTable.set("C5DA", "9E71");
mappingTable.set("C5DB", "9E72");
mappingTable.set("C5DC", "9E73");
mappingTable.set("C5DD", "9E74");
mappingTable.set("C5DE", "9E75");
mappingTable.set("C5DF", "9E76");
mappingTable.set("C5E2", "9E77");
mappingTable.set("C5E4", "9E78");
mappingTable.set("C5E6", "9E79");
mappingTable.set("C5E7", "9E7A");
mappingTable.set("C5E8", "9E81");
mappingTable.set("C5E9", "9E82");
mappingTable.set("C5EA", "9E83");
mappingTable.set("C5EB", "9E84");
mappingTable.set("C5EF", "9E85");
mappingTable.set("C5F1", "9E86");
mappingTable.set("C5F2", "9E87");
mappingTable.set("C5F3", "9E88");
mappingTable.set("C5F5", "9E89");
mappingTable.set("C5F8", "9E8A");
mappingTable.set("C5F9", "9E8B");
mappingTable.set("C5FA", "9E8C");
mappingTable.set("C5FB", "9E8D");
mappingTable.set("C602", "9E8E");
mappingTable.set("C603", "9E8F");
mappingTable.set("C604", "9E90");
mappingTable.set("C609", "9E91");
mappingTable.set("C60A", "9E92");
mappingTable.set("C60B", "9E93");
mappingTable.set("C60D", "9E94");
mappingTable.set("C60E", "9E95");
mappingTable.set("C60F", "9E96");
mappingTable.set("C611", "9E97");
mappingTable.set("C612", "9E98");
mappingTable.set("C613", "9E99");
mappingTable.set("C614", "9E9A");
mappingTable.set("C615", "9E9B");
mappingTable.set("C616", "9E9C");
mappingTable.set("C617", "9E9D");
mappingTable.set("C61A", "9E9E");
mappingTable.set("C61D", "9E9F");
mappingTable.set("C61E", "9EA0");
mappingTable.set("C61F", "9EA1");
mappingTable.set("C620", "9EA2");
mappingTable.set("C621", "9EA3");
mappingTable.set("C622", "9EA4");
mappingTable.set("C623", "9EA5");
mappingTable.set("C626", "9EA6");
mappingTable.set("C627", "9EA7");
mappingTable.set("C629", "9EA8");
mappingTable.set("C62A", "9EA9");
mappingTable.set("C62B", "9EAA");
mappingTable.set("C62F", "9EAB");
mappingTable.set("C631", "9EAC");
mappingTable.set("C632", "9EAD");
mappingTable.set("C636", "9EAE");
mappingTable.set("C638", "9EAF");
mappingTable.set("C63A", "9EB0");
mappingTable.set("C63C", "9EB1");
mappingTable.set("C63D", "9EB2");
mappingTable.set("C63E", "9EB3");
mappingTable.set("C63F", "9EB4");
mappingTable.set("C642", "9EB5");
mappingTable.set("C643", "9EB6");
mappingTable.set("C645", "9EB7");
mappingTable.set("C646", "9EB8");
mappingTable.set("C647", "9EB9");
mappingTable.set("C649", "9EBA");
mappingTable.set("C64A", "9EBB");
mappingTable.set("C64B", "9EBC");
mappingTable.set("C64C", "9EBD");
mappingTable.set("C64D", "9EBE");
mappingTable.set("C64E", "9EBF");
mappingTable.set("C64F", "9EC0");
mappingTable.set("C652", "9EC1");
mappingTable.set("C656", "9EC2");
mappingTable.set("C657", "9EC3");
mappingTable.set("C658", "9EC4");
mappingTable.set("C659", "9EC5");
mappingTable.set("C65A", "9EC6");
mappingTable.set("C65B", "9EC7");
mappingTable.set("C65E", "9EC8");
mappingTable.set("C65F", "9EC9");
mappingTable.set("C661", "9ECA");
mappingTable.set("C662", "9ECB");
mappingTable.set("C663", "9ECC");
mappingTable.set("C664", "9ECD");
mappingTable.set("C665", "9ECE");
mappingTable.set("C666", "9ECF");
mappingTable.set("C667", "9ED0");
mappingTable.set("C668", "9ED1");
mappingTable.set("C669", "9ED2");
mappingTable.set("C66A", "9ED3");
mappingTable.set("C66B", "9ED4");
mappingTable.set("C66D", "9ED5");
mappingTable.set("C66E", "9ED6");
mappingTable.set("C670", "9ED7");
mappingTable.set("C672", "9ED8");
mappingTable.set("C673", "9ED9");
mappingTable.set("C674", "9EDA");
mappingTable.set("C675", "9EDB");
mappingTable.set("C676", "9EDC");
mappingTable.set("C677", "9EDD");
mappingTable.set("C67A", "9EDE");
mappingTable.set("C67B", "9EDF");
mappingTable.set("C67D", "9EE0");
mappingTable.set("C67E", "9EE1");
mappingTable.set("C67F", "9EE2");
mappingTable.set("C681", "9EE3");
mappingTable.set("C682", "9EE4");
mappingTable.set("C683", "9EE5");
mappingTable.set("C684", "9EE6");
mappingTable.set("C685", "9EE7");
mappingTable.set("C686", "9EE8");
mappingTable.set("C687", "9EE9");
mappingTable.set("C68A", "9EEA");
mappingTable.set("C68C", "9EEB");
mappingTable.set("C68E", "9EEC");
mappingTable.set("C68F", "9EED");
mappingTable.set("C690", "9EEE");
mappingTable.set("C691", "9EEF");
mappingTable.set("C692", "9EF0");
mappingTable.set("C693", "9EF1");
mappingTable.set("C696", "9EF2");
mappingTable.set("C697", "9EF3");
mappingTable.set("C699", "9EF4");
mappingTable.set("C69A", "9EF5");
mappingTable.set("C69B", "9EF6");
mappingTable.set("C69D", "9EF7");
mappingTable.set("C69E", "9EF8");
mappingTable.set("C69F", "9EF9");
mappingTable.set("C6A0", "9EFA");
mappingTable.set("C6A1", "9EFB");
mappingTable.set("C6A2", "9EFC");
mappingTable.set("C6A3", "9EFD");
mappingTable.set("C6A6", "9EFE");
mappingTable.set("C6A8", "9F41");
mappingTable.set("C6AA", "9F42");
mappingTable.set("C6AB", "9F43");
mappingTable.set("C6AC", "9F44");
mappingTable.set("C6AD", "9F45");
mappingTable.set("C6AE", "9F46");
mappingTable.set("C6AF", "9F47");
mappingTable.set("C6B2", "9F48");
mappingTable.set("C6B3", "9F49");
mappingTable.set("C6B5", "9F4A");
mappingTable.set("C6B6", "9F4B");
mappingTable.set("C6B7", "9F4C");
mappingTable.set("C6BB", "9F4D");
mappingTable.set("C6BC", "9F4E");
mappingTable.set("C6BD", "9F4F");
mappingTable.set("C6BE", "9F50");
mappingTable.set("C6BF", "9F51");
mappingTable.set("C6C2", "9F52");
mappingTable.set("C6C4", "9F53");
mappingTable.set("C6C6", "9F54");
mappingTable.set("C6C7", "9F55");
mappingTable.set("C6C8", "9F56");
mappingTable.set("C6C9", "9F57");
mappingTable.set("C6CA", "9F58");
mappingTable.set("C6CB", "9F59");
mappingTable.set("C6CE", "9F5A");
mappingTable.set("C6CF", "9F61");
mappingTable.set("C6D1", "9F62");
mappingTable.set("C6D2", "9F63");
mappingTable.set("C6D3", "9F64");
mappingTable.set("C6D5", "9F65");
mappingTable.set("C6D6", "9F66");
mappingTable.set("C6D7", "9F67");
mappingTable.set("C6D8", "9F68");
mappingTable.set("C6D9", "9F69");
mappingTable.set("C6DA", "9F6A");
mappingTable.set("C6DB", "9F6B");
mappingTable.set("C6DE", "9F6C");
mappingTable.set("C6DF", "9F6D");
mappingTable.set("C6E2", "9F6E");
mappingTable.set("C6E3", "9F6F");
mappingTable.set("C6E4", "9F70");
mappingTable.set("C6E5", "9F71");
mappingTable.set("C6E6", "9F72");
mappingTable.set("C6E7", "9F73");
mappingTable.set("C6EA", "9F74");
mappingTable.set("C6EB", "9F75");
mappingTable.set("C6ED", "9F76");
mappingTable.set("C6EE", "9F77");
mappingTable.set("C6EF", "9F78");
mappingTable.set("C6F1", "9F79");
mappingTable.set("C6F2", "9F7A");
mappingTable.set("C6F3", "9F81");
mappingTable.set("C6F4", "9F82");
mappingTable.set("C6F5", "9F83");
mappingTable.set("C6F6", "9F84");
mappingTable.set("C6F7", "9F85");
mappingTable.set("C6FA", "9F86");
mappingTable.set("C6FB", "9F87");
mappingTable.set("C6FC", "9F88");
mappingTable.set("C6FE", "9F89");
mappingTable.set("C6FF", "9F8A");
mappingTable.set("C700", "9F8B");
mappingTable.set("C701", "9F8C");
mappingTable.set("C702", "9F8D");
mappingTable.set("C703", "9F8E");
mappingTable.set("C706", "9F8F");
mappingTable.set("C707", "9F90");
mappingTable.set("C709", "9F91");
mappingTable.set("C70A", "9F92");
mappingTable.set("C70B", "9F93");
mappingTable.set("C70D", "9F94");
mappingTable.set("C70E", "9F95");
mappingTable.set("C70F", "9F96");
mappingTable.set("C710", "9F97");
mappingTable.set("C711", "9F98");
mappingTable.set("C712", "9F99");
mappingTable.set("C713", "9F9A");
mappingTable.set("C716", "9F9B");
mappingTable.set("C718", "9F9C");
mappingTable.set("C71A", "9F9D");
mappingTable.set("C71B", "9F9E");
mappingTable.set("C71C", "9F9F");
mappingTable.set("C71D", "9FA0");
mappingTable.set("C71E", "9FA1");
mappingTable.set("C71F", "9FA2");
mappingTable.set("C722", "9FA3");
mappingTable.set("C723", "9FA4");
mappingTable.set("C725", "9FA5");
mappingTable.set("C726", "9FA6");
mappingTable.set("C727", "9FA7");
mappingTable.set("C729", "9FA8");
mappingTable.set("C72A", "9FA9");
mappingTable.set("C72B", "9FAA");
mappingTable.set("C72C", "9FAB");
mappingTable.set("C72D", "9FAC");
mappingTable.set("C72E", "9FAD");
mappingTable.set("C72F", "9FAE");
mappingTable.set("C732", "9FAF");
mappingTable.set("C734", "9FB0");
mappingTable.set("C736", "9FB1");
mappingTable.set("C738", "9FB2");
mappingTable.set("C739", "9FB3");
mappingTable.set("C73A", "9FB4");
mappingTable.set("C73B", "9FB5");
mappingTable.set("C73E", "9FB6");
mappingTable.set("C73F", "9FB7");
mappingTable.set("C741", "9FB8");
mappingTable.set("C742", "9FB9");
mappingTable.set("C743", "9FBA");
mappingTable.set("C745", "9FBB");
mappingTable.set("C746", "9FBC");
mappingTable.set("C747", "9FBD");
mappingTable.set("C748", "9FBE");
mappingTable.set("C749", "9FBF");
mappingTable.set("C74B", "9FC0");
mappingTable.set("C74E", "9FC1");
mappingTable.set("C750", "9FC2");
mappingTable.set("C759", "9FC3");
mappingTable.set("C75A", "9FC4");
mappingTable.set("C75B", "9FC5");
mappingTable.set("C75D", "9FC6");
mappingTable.set("C75E", "9FC7");
mappingTable.set("C75F", "9FC8");
mappingTable.set("C761", "9FC9");
mappingTable.set("C762", "9FCA");
mappingTable.set("C763", "9FCB");
mappingTable.set("C764", "9FCC");
mappingTable.set("C765", "9FCD");
mappingTable.set("C766", "9FCE");
mappingTable.set("C767", "9FCF");
mappingTable.set("C769", "9FD0");
mappingTable.set("C76A", "9FD1");
mappingTable.set("C76C", "9FD2");
mappingTable.set("C76D", "9FD3");
mappingTable.set("C76E", "9FD4");
mappingTable.set("C76F", "9FD5");
mappingTable.set("C770", "9FD6");
mappingTable.set("C771", "9FD7");
mappingTable.set("C772", "9FD8");
mappingTable.set("C773", "9FD9");
mappingTable.set("C776", "9FDA");
mappingTable.set("C777", "9FDB");
mappingTable.set("C779", "9FDC");
mappingTable.set("C77A", "9FDD");
mappingTable.set("C77B", "9FDE");
mappingTable.set("C77F", "9FDF");
mappingTable.set("C780", "9FE0");
mappingTable.set("C781", "9FE1");
mappingTable.set("C782", "9FE2");
mappingTable.set("C786", "9FE3");
mappingTable.set("C78B", "9FE4");
mappingTable.set("C78C", "9FE5");
mappingTable.set("C78D", "9FE6");
mappingTable.set("C78F", "9FE7");
mappingTable.set("C792", "9FE8");
mappingTable.set("C793", "9FE9");
mappingTable.set("C795", "9FEA");
mappingTable.set("C799", "9FEB");
mappingTable.set("C79B", "9FEC");
mappingTable.set("C79C", "9FED");
mappingTable.set("C79D", "9FEE");
mappingTable.set("C79E", "9FEF");
mappingTable.set("C79F", "9FF0");
mappingTable.set("C7A2", "9FF1");
mappingTable.set("C7A7", "9FF2");
mappingTable.set("C7A8", "9FF3");
mappingTable.set("C7A9", "9FF4");
mappingTable.set("C7AA", "9FF5");
mappingTable.set("C7AB", "9FF6");
mappingTable.set("C7AE", "9FF7");
mappingTable.set("C7AF", "9FF8");
mappingTable.set("C7B1", "9FF9");
mappingTable.set("C7B2", "9FFA");
mappingTable.set("C7B3", "9FFB");
mappingTable.set("C7B5", "9FFC");
mappingTable.set("C7B6", "9FFD");
mappingTable.set("C7B7", "9FFE");
mappingTable.set("C7B8", "A041");
mappingTable.set("C7B9", "A042");
mappingTable.set("C7BA", "A043");
mappingTable.set("C7BB", "A044");
mappingTable.set("C7BE", "A045");
mappingTable.set("C7C2", "A046");
mappingTable.set("C7C3", "A047");
mappingTable.set("C7C4", "A048");
mappingTable.set("C7C5", "A049");
mappingTable.set("C7C6", "A04A");
mappingTable.set("C7C7", "A04B");
mappingTable.set("C7CA", "A04C");
mappingTable.set("C7CB", "A04D");
mappingTable.set("C7CD", "A04E");
mappingTable.set("C7CF", "A04F");
mappingTable.set("C7D1", "A050");
mappingTable.set("C7D2", "A051");
mappingTable.set("C7D3", "A052");
mappingTable.set("C7D4", "A053");
mappingTable.set("C7D5", "A054");
mappingTable.set("C7D6", "A055");
mappingTable.set("C7D7", "A056");
mappingTable.set("C7D9", "A057");
mappingTable.set("C7DA", "A058");
mappingTable.set("C7DB", "A059");
mappingTable.set("C7DC", "A05A");
mappingTable.set("C7DE", "A061");
mappingTable.set("C7DF", "A062");
mappingTable.set("C7E0", "A063");
mappingTable.set("C7E1", "A064");
mappingTable.set("C7E2", "A065");
mappingTable.set("C7E3", "A066");
mappingTable.set("C7E5", "A067");
mappingTable.set("C7E6", "A068");
mappingTable.set("C7E7", "A069");
mappingTable.set("C7E9", "A06A");
mappingTable.set("C7EA", "A06B");
mappingTable.set("C7EB", "A06C");
mappingTable.set("C7ED", "A06D");
mappingTable.set("C7EE", "A06E");
mappingTable.set("C7EF", "A06F");
mappingTable.set("C7F0", "A070");
mappingTable.set("C7F1", "A071");
mappingTable.set("C7F2", "A072");
mappingTable.set("C7F3", "A073");
mappingTable.set("C7F4", "A074");
mappingTable.set("C7F5", "A075");
mappingTable.set("C7F6", "A076");
mappingTable.set("C7F7", "A077");
mappingTable.set("C7F8", "A078");
mappingTable.set("C7F9", "A079");
mappingTable.set("C7FA", "A07A");
mappingTable.set("C7FB", "A081");
mappingTable.set("C7FC", "A082");
mappingTable.set("C7FD", "A083");
mappingTable.set("C7FE", "A084");
mappingTable.set("C7FF", "A085");
mappingTable.set("C802", "A086");
mappingTable.set("C803", "A087");
mappingTable.set("C805", "A088");
mappingTable.set("C806", "A089");
mappingTable.set("C807", "A08A");
mappingTable.set("C809", "A08B");
mappingTable.set("C80B", "A08C");
mappingTable.set("C80C", "A08D");
mappingTable.set("C80D", "A08E");
mappingTable.set("C80E", "A08F");
mappingTable.set("C80F", "A090");
mappingTable.set("C812", "A091");
mappingTable.set("C814", "A092");
mappingTable.set("C817", "A093");
mappingTable.set("C818", "A094");
mappingTable.set("C819", "A095");
mappingTable.set("C81A", "A096");
mappingTable.set("C81B", "A097");
mappingTable.set("C81E", "A098");
mappingTable.set("C81F", "A099");
mappingTable.set("C821", "A09A");
mappingTable.set("C822", "A09B");
mappingTable.set("C823", "A09C");
mappingTable.set("C825", "A09D");
mappingTable.set("C826", "A09E");
mappingTable.set("C827", "A09F");
mappingTable.set("C828", "A0A0");
mappingTable.set("C829", "A0A1");
mappingTable.set("C82A", "A0A2");
mappingTable.set("C82B", "A0A3");
mappingTable.set("C82E", "A0A4");
mappingTable.set("C830", "A0A5");
mappingTable.set("C832", "A0A6");
mappingTable.set("C833", "A0A7");
mappingTable.set("C834", "A0A8");
mappingTable.set("C835", "A0A9");
mappingTable.set("C836", "A0AA");
mappingTable.set("C837", "A0AB");
mappingTable.set("C839", "A0AC");
mappingTable.set("C83A", "A0AD");
mappingTable.set("C83B", "A0AE");
mappingTable.set("C83D", "A0AF");
mappingTable.set("C83E", "A0B0");
mappingTable.set("C83F", "A0B1");
mappingTable.set("C841", "A0B2");
mappingTable.set("C842", "A0B3");
mappingTable.set("C843", "A0B4");
mappingTable.set("C844", "A0B5");
mappingTable.set("C845", "A0B6");
mappingTable.set("C846", "A0B7");
mappingTable.set("C847", "A0B8");
mappingTable.set("C84A", "A0B9");
mappingTable.set("C84B", "A0BA");
mappingTable.set("C84E", "A0BB");
mappingTable.set("C84F", "A0BC");
mappingTable.set("C850", "A0BD");
mappingTable.set("C851", "A0BE");
mappingTable.set("C852", "A0BF");
mappingTable.set("C853", "A0C0");
mappingTable.set("C855", "A0C1");
mappingTable.set("C856", "A0C2");
mappingTable.set("C857", "A0C3");
mappingTable.set("C858", "A0C4");
mappingTable.set("C859", "A0C5");
mappingTable.set("C85A", "A0C6");
mappingTable.set("C85B", "A0C7");
mappingTable.set("C85C", "A0C8");
mappingTable.set("C85D", "A0C9");
mappingTable.set("C85E", "A0CA");
mappingTable.set("C85F", "A0CB");
mappingTable.set("C860", "A0CC");
mappingTable.set("C861", "A0CD");
mappingTable.set("C862", "A0CE");
mappingTable.set("C863", "A0CF");
mappingTable.set("C864", "A0D0");
mappingTable.set("C865", "A0D1");
mappingTable.set("C866", "A0D2");
mappingTable.set("C867", "A0D3");
mappingTable.set("C868", "A0D4");
mappingTable.set("C869", "A0D5");
mappingTable.set("C86A", "A0D6");
mappingTable.set("C86B", "A0D7");
mappingTable.set("C86C", "A0D8");
mappingTable.set("C86D", "A0D9");
mappingTable.set("C86E", "A0DA");
mappingTable.set("C86F", "A0DB");
mappingTable.set("C872", "A0DC");
mappingTable.set("C873", "A0DD");
mappingTable.set("C875", "A0DE");
mappingTable.set("C876", "A0DF");
mappingTable.set("C877", "A0E0");
mappingTable.set("C879", "A0E1");
mappingTable.set("C87B", "A0E2");
mappingTable.set("C87C", "A0E3");
mappingTable.set("C87D", "A0E4");
mappingTable.set("C87E", "A0E5");
mappingTable.set("C87F", "A0E6");
mappingTable.set("C882", "A0E7");
mappingTable.set("C884", "A0E8");
mappingTable.set("C888", "A0E9");
mappingTable.set("C889", "A0EA");
mappingTable.set("C88A", "A0EB");
mappingTable.set("C88E", "A0EC");
mappingTable.set("C88F", "A0ED");
mappingTable.set("C890", "A0EE");
mappingTable.set("C891", "A0EF");
mappingTable.set("C892", "A0F0");
mappingTable.set("C893", "A0F1");
mappingTable.set("C895", "A0F2");
mappingTable.set("C896", "A0F3");
mappingTable.set("C897", "A0F4");
mappingTable.set("C898", "A0F5");
mappingTable.set("C899", "A0F6");
mappingTable.set("C89A", "A0F7");
mappingTable.set("C89B", "A0F8");
mappingTable.set("C89C", "A0F9");
mappingTable.set("C89E", "A0FA");
mappingTable.set("C8A0", "A0FB");
mappingTable.set("C8A2", "A0FC");
mappingTable.set("C8A3", "A0FD");
mappingTable.set("C8A4", "A0FE");
mappingTable.set("C8A5", "A141");
mappingTable.set("C8A6", "A142");
mappingTable.set("C8A7", "A143");
mappingTable.set("C8A9", "A144");
mappingTable.set("C8AA", "A145");
mappingTable.set("C8AB", "A146");
mappingTable.set("C8AC", "A147");
mappingTable.set("C8AD", "A148");
mappingTable.set("C8AE", "A149");
mappingTable.set("C8AF", "A14A");
mappingTable.set("C8B0", "A14B");
mappingTable.set("C8B1", "A14C");
mappingTable.set("C8B2", "A14D");
mappingTable.set("C8B3", "A14E");
mappingTable.set("C8B4", "A14F");
mappingTable.set("C8B5", "A150");
mappingTable.set("C8B6", "A151");
mappingTable.set("C8B7", "A152");
mappingTable.set("C8B8", "A153");
mappingTable.set("C8B9", "A154");
mappingTable.set("C8BA", "A155");
mappingTable.set("C8BB", "A156");
mappingTable.set("C8BE", "A157");
mappingTable.set("C8BF", "A158");
mappingTable.set("C8C0", "A159");
mappingTable.set("C8C1", "A15A");
mappingTable.set("C8C2", "A161");
mappingTable.set("C8C3", "A162");
mappingTable.set("C8C5", "A163");
mappingTable.set("C8C6", "A164");
mappingTable.set("C8C7", "A165");
mappingTable.set("C8C9", "A166");
mappingTable.set("C8CA", "A167");
mappingTable.set("C8CB", "A168");
mappingTable.set("C8CD", "A169");
mappingTable.set("C8CE", "A16A");
mappingTable.set("C8CF", "A16B");
mappingTable.set("C8D0", "A16C");
mappingTable.set("C8D1", "A16D");
mappingTable.set("C8D2", "A16E");
mappingTable.set("C8D3", "A16F");
mappingTable.set("C8D6", "A170");
mappingTable.set("C8D8", "A171");
mappingTable.set("C8DA", "A172");
mappingTable.set("C8DB", "A173");
mappingTable.set("C8DC", "A174");
mappingTable.set("C8DD", "A175");
mappingTable.set("C8DE", "A176");
mappingTable.set("C8DF", "A177");
mappingTable.set("C8E2", "A178");
mappingTable.set("C8E3", "A179");
mappingTable.set("C8E5", "A17A");
mappingTable.set("C8E6", "A181");
mappingTable.set("C8E7", "A182");
mappingTable.set("C8E8", "A183");
mappingTable.set("C8E9", "A184");
mappingTable.set("C8EA", "A185");
mappingTable.set("C8EB", "A186");
mappingTable.set("C8EC", "A187");
mappingTable.set("C8ED", "A188");
mappingTable.set("C8EE", "A189");
mappingTable.set("C8EF", "A18A");
mappingTable.set("C8F0", "A18B");
mappingTable.set("C8F1", "A18C");
mappingTable.set("C8F2", "A18D");
mappingTable.set("C8F3", "A18E");
mappingTable.set("C8F4", "A18F");
mappingTable.set("C8F6", "A190");
mappingTable.set("C8F7", "A191");
mappingTable.set("C8F8", "A192");
mappingTable.set("C8F9", "A193");
mappingTable.set("C8FA", "A194");
mappingTable.set("C8FB", "A195");
mappingTable.set("C8FE", "A196");
mappingTable.set("C8FF", "A197");
mappingTable.set("C901", "A198");
mappingTable.set("C902", "A199");
mappingTable.set("C903", "A19A");
mappingTable.set("C907", "A19B");
mappingTable.set("C908", "A19C");
mappingTable.set("C909", "A19D");
mappingTable.set("C90A", "A19E");
mappingTable.set("C90B", "A19F");
mappingTable.set("C90E", "A1A0");
mappingTable.set("0020", "A1A1");
mappingTable.set("3001", "A1A2");
mappingTable.set("3002", "A1A3");
mappingTable.set("00B7", "A1A4");
mappingTable.set("2025", "A1A5");
mappingTable.set("2026", "A1A6");
mappingTable.set("00A8", "A1A7");
mappingTable.set("3003", "A1A8");
mappingTable.set("00AD", "A1A9");
mappingTable.set("2015", "A1AA");
mappingTable.set("2225", "A1AB");
mappingTable.set("FF3C", "A1AC");
mappingTable.set("223C", "A1AD");
mappingTable.set("2018", "A1AE");
mappingTable.set("2019", "A1AF");
mappingTable.set("201C", "A1B0");
mappingTable.set("201D", "A1B1");
mappingTable.set("3014", "A1B2");
mappingTable.set("3015", "A1B3");
mappingTable.set("3008", "A1B4");
mappingTable.set("3009", "A1B5");
mappingTable.set("300A", "A1B6");
mappingTable.set("300B", "A1B7");
mappingTable.set("300C", "A1B8");
mappingTable.set("300D", "A1B9");
mappingTable.set("300E", "A1BA");
mappingTable.set("300F", "A1BB");
mappingTable.set("3010", "A1BC");
mappingTable.set("3011", "A1BD");
mappingTable.set("00B1", "A1BE");
mappingTable.set("00D7", "A1BF");
mappingTable.set("00F7", "A1C0");
mappingTable.set("2260", "A1C1");
mappingTable.set("2264", "A1C2");
mappingTable.set("2265", "A1C3");
mappingTable.set("221E", "A1C4");
mappingTable.set("2234", "A1C5");
mappingTable.set("00B0", "A1C6");
mappingTable.set("2032", "A1C7");
mappingTable.set("2033", "A1C8");
mappingTable.set("2103", "A1C9");
mappingTable.set("0041", "A1CA");
mappingTable.set("FFE0", "A1CB");
mappingTable.set("FFE1", "A1CC");
mappingTable.set("FFE5", "A1CD");
mappingTable.set("2642", "A1CE");
mappingTable.set("2640", "A1CF");
mappingTable.set("2220", "A1D0");
mappingTable.set("22A5", "A1D1");
mappingTable.set("2312", "A1D2");
mappingTable.set("2202", "A1D3");
mappingTable.set("2207", "A1D4");
mappingTable.set("2261", "A1D5");
mappingTable.set("2252", "A1D6");
mappingTable.set("00A7", "A1D7");
mappingTable.set("203B", "A1D8");
mappingTable.set("2606", "A1D9");
mappingTable.set("2605", "A1DA");
mappingTable.set("25CB", "A1DB");
mappingTable.set("25CF", "A1DC");
mappingTable.set("25CE", "A1DD");
mappingTable.set("25C7", "A1DE");
mappingTable.set("25C6", "A1DF");
mappingTable.set("25A1", "A1E0");
mappingTable.set("25A0", "A1E1");
mappingTable.set("25B3", "A1E2");
mappingTable.set("25B2", "A1E3");
mappingTable.set("25BD", "A1E4");
mappingTable.set("25BC", "A1E5");
mappingTable.set("2192", "A1E6");
mappingTable.set("2190", "A1E7");
mappingTable.set("2191", "A1E8");
mappingTable.set("2193", "A1E9");
mappingTable.set("2194", "A1EA");
mappingTable.set("3013", "A1EB");
mappingTable.set("226A", "A1EC");
mappingTable.set("226B", "A1ED");
mappingTable.set("221A", "A1EE");
mappingTable.set("223D", "A1EF");
mappingTable.set("221D", "A1F0");
mappingTable.set("2235", "A1F1");
mappingTable.set("222B", "A1F2");
mappingTable.set("222C", "A1F3");
mappingTable.set("2208", "A1F4");
mappingTable.set("220B", "A1F5");
mappingTable.set("2286", "A1F6");
mappingTable.set("2287", "A1F7");
mappingTable.set("2282", "A1F8");
mappingTable.set("2283", "A1F9");
mappingTable.set("222A", "A1FA");
mappingTable.set("2229", "A1FB");
mappingTable.set("2227", "A1FC");
mappingTable.set("2228", "A1FD");
mappingTable.set("FFE2", "A1FE");
mappingTable.set("C910", "A241");
mappingTable.set("C912", "A242");
mappingTable.set("C913", "A243");
mappingTable.set("C914", "A244");
mappingTable.set("C915", "A245");
mappingTable.set("C916", "A246");
mappingTable.set("C917", "A247");
mappingTable.set("C919", "A248");
mappingTable.set("C91A", "A249");
mappingTable.set("C91B", "A24A");
mappingTable.set("C91C", "A24B");
mappingTable.set("C91D", "A24C");
mappingTable.set("C91E", "A24D");
mappingTable.set("C91F", "A24E");
mappingTable.set("C920", "A24F");
mappingTable.set("C921", "A250");
mappingTable.set("C922", "A251");
mappingTable.set("C923", "A252");
mappingTable.set("C924", "A253");
mappingTable.set("C925", "A254");
mappingTable.set("C926", "A255");
mappingTable.set("C927", "A256");
mappingTable.set("C928", "A257");
mappingTable.set("C929", "A258");
mappingTable.set("C92A", "A259");
mappingTable.set("C92B", "A25A");
mappingTable.set("C92D", "A261");
mappingTable.set("C92E", "A262");
mappingTable.set("C92F", "A263");
mappingTable.set("C930", "A264");
mappingTable.set("C931", "A265");
mappingTable.set("C932", "A266");
mappingTable.set("C933", "A267");
mappingTable.set("C935", "A268");
mappingTable.set("C936", "A269");
mappingTable.set("C937", "A26A");
mappingTable.set("C938", "A26B");
mappingTable.set("C939", "A26C");
mappingTable.set("C93A", "A26D");
mappingTable.set("C93B", "A26E");
mappingTable.set("C93C", "A26F");
mappingTable.set("C93D", "A270");
mappingTable.set("C93E", "A271");
mappingTable.set("C93F", "A272");
mappingTable.set("C940", "A273");
mappingTable.set("C941", "A274");
mappingTable.set("C942", "A275");
mappingTable.set("C943", "A276");
mappingTable.set("C944", "A277");
mappingTable.set("C945", "A278");
mappingTable.set("C946", "A279");
mappingTable.set("C947", "A27A");
mappingTable.set("C948", "A281");
mappingTable.set("C949", "A282");
mappingTable.set("C94A", "A283");
mappingTable.set("C94B", "A284");
mappingTable.set("C94C", "A285");
mappingTable.set("C94D", "A286");
mappingTable.set("C94E", "A287");
mappingTable.set("C94F", "A288");
mappingTable.set("C952", "A289");
mappingTable.set("C953", "A28A");
mappingTable.set("C955", "A28B");
mappingTable.set("C956", "A28C");
mappingTable.set("C957", "A28D");
mappingTable.set("C959", "A28E");
mappingTable.set("C95A", "A28F");
mappingTable.set("C95B", "A290");
mappingTable.set("C95C", "A291");
mappingTable.set("C95D", "A292");
mappingTable.set("C95E", "A293");
mappingTable.set("C95F", "A294");
mappingTable.set("C962", "A295");
mappingTable.set("C964", "A296");
mappingTable.set("C965", "A297");
mappingTable.set("C966", "A298");
mappingTable.set("C967", "A299");
mappingTable.set("C968", "A29A");
mappingTable.set("C969", "A29B");
mappingTable.set("C96A", "A29C");
mappingTable.set("C96B", "A29D");
mappingTable.set("C96D", "A29E");
mappingTable.set("C96E", "A29F");
mappingTable.set("C96F", "A2A0");
mappingTable.set("21D2", "A2A1");
mappingTable.set("21D4", "A2A2");
mappingTable.set("2200", "A2A3");
mappingTable.set("2203", "A2A4");
mappingTable.set("00B4", "A2A5");
mappingTable.set("FF5E", "A2A6");
mappingTable.set("02C7", "A2A7");
mappingTable.set("02D8", "A2A8");
mappingTable.set("02DD", "A2A9");
mappingTable.set("02DA", "A2AA");
mappingTable.set("02D9", "A2AB");
mappingTable.set("00B8", "A2AC");
mappingTable.set("02DB", "A2AD");
mappingTable.set("00A1", "A2AE");
mappingTable.set("00BF", "A2AF");
mappingTable.set("02D0", "A2B0");
mappingTable.set("222E", "A2B1");
mappingTable.set("2211", "A2B2");
mappingTable.set("220F", "A2B3");
mappingTable.set("00A4", "A2B4");
mappingTable.set("2109", "A2B5");
mappingTable.set("2030", "A2B6");
mappingTable.set("25C1", "A2B7");
mappingTable.set("25C0", "A2B8");
mappingTable.set("25B7", "A2B9");
mappingTable.set("25B6", "A2BA");
mappingTable.set("2664", "A2BB");
mappingTable.set("2660", "A2BC");
mappingTable.set("2661", "A2BD");
mappingTable.set("2665", "A2BE");
mappingTable.set("2667", "A2BF");
mappingTable.set("2663", "A2C0");
mappingTable.set("2299", "A2C1");
mappingTable.set("25C8", "A2C2");
mappingTable.set("25A3", "A2C3");
mappingTable.set("25D0", "A2C4");
mappingTable.set("25D1", "A2C5");
mappingTable.set("2592", "A2C6");
mappingTable.set("25A4", "A2C7");
mappingTable.set("25A5", "A2C8");
mappingTable.set("25A8", "A2C9");
mappingTable.set("25A7", "A2CA");
mappingTable.set("25A6", "A2CB");
mappingTable.set("25A9", "A2CC");
mappingTable.set("2668", "A2CD");
mappingTable.set("260F", "A2CE");
mappingTable.set("260E", "A2CF");
mappingTable.set("261C", "A2D0");
mappingTable.set("261E", "A2D1");
mappingTable.set("00B6", "A2D2");
mappingTable.set("2020", "A2D3");
mappingTable.set("2021", "A2D4");
mappingTable.set("2195", "A2D5");
mappingTable.set("2197", "A2D6");
mappingTable.set("2199", "A2D7");
mappingTable.set("2196", "A2D8");
mappingTable.set("2198", "A2D9");
mappingTable.set("266D", "A2DA");
mappingTable.set("2669", "A2DB");
mappingTable.set("266A", "A2DC");
mappingTable.set("266C", "A2DD");
mappingTable.set("327F", "A2DE");
mappingTable.set("321C", "A2DF");
mappingTable.set("2116", "A2E0");
mappingTable.set("33C7", "A2E1");
mappingTable.set("2122", "A2E2");
mappingTable.set("33C2", "A2E3");
mappingTable.set("33D8", "A2E4");
mappingTable.set("2121", "A2E5");
mappingTable.set("20AC", "A2E6");
mappingTable.set("00AE", "A2E7");
mappingTable.set("C971", "A341");
mappingTable.set("C972", "A342");
mappingTable.set("C973", "A343");
mappingTable.set("C975", "A344");
mappingTable.set("C976", "A345");
mappingTable.set("C977", "A346");
mappingTable.set("C978", "A347");
mappingTable.set("C979", "A348");
mappingTable.set("C97A", "A349");
mappingTable.set("C97B", "A34A");
mappingTable.set("C97D", "A34B");
mappingTable.set("C97E", "A34C");
mappingTable.set("C97F", "A34D");
mappingTable.set("C980", "A34E");
mappingTable.set("C981", "A34F");
mappingTable.set("C982", "A350");
mappingTable.set("C983", "A351");
mappingTable.set("C984", "A352");
mappingTable.set("C985", "A353");
mappingTable.set("C986", "A354");
mappingTable.set("C987", "A355");
mappingTable.set("C98A", "A356");
mappingTable.set("C98B", "A357");
mappingTable.set("C98D", "A358");
mappingTable.set("C98E", "A359");
mappingTable.set("C98F", "A35A");
mappingTable.set("C991", "A361");
mappingTable.set("C992", "A362");
mappingTable.set("C993", "A363");
mappingTable.set("C994", "A364");
mappingTable.set("C995", "A365");
mappingTable.set("C996", "A366");
mappingTable.set("C997", "A367");
mappingTable.set("C99A", "A368");
mappingTable.set("C99C", "A369");
mappingTable.set("C99E", "A36A");
mappingTable.set("C99F", "A36B");
mappingTable.set("C9A0", "A36C");
mappingTable.set("C9A1", "A36D");
mappingTable.set("C9A2", "A36E");
mappingTable.set("C9A3", "A36F");
mappingTable.set("C9A4", "A370");
mappingTable.set("C9A5", "A371");
mappingTable.set("C9A6", "A372");
mappingTable.set("C9A7", "A373");
mappingTable.set("C9A8", "A374");
mappingTable.set("C9A9", "A375");
mappingTable.set("C9AA", "A376");
mappingTable.set("C9AB", "A377");
mappingTable.set("C9AC", "A378");
mappingTable.set("C9AD", "A379");
mappingTable.set("C9AE", "A37A");
mappingTable.set("C9AF", "A381");
mappingTable.set("C9B0", "A382");
mappingTable.set("C9B1", "A383");
mappingTable.set("C9B2", "A384");
mappingTable.set("C9B3", "A385");
mappingTable.set("C9B4", "A386");
mappingTable.set("C9B5", "A387");
mappingTable.set("C9B6", "A388");
mappingTable.set("C9B7", "A389");
mappingTable.set("C9B8", "A38A");
mappingTable.set("C9B9", "A38B");
mappingTable.set("C9BA", "A38C");
mappingTable.set("C9BB", "A38D");
mappingTable.set("C9BC", "A38E");
mappingTable.set("C9BD", "A38F");
mappingTable.set("C9BE", "A390");
mappingTable.set("C9BF", "A391");
mappingTable.set("C9C2", "A392");
mappingTable.set("C9C3", "A393");
mappingTable.set("C9C5", "A394");
mappingTable.set("C9C6", "A395");
mappingTable.set("C9C9", "A396");
mappingTable.set("C9CB", "A397");
mappingTable.set("C9CC", "A398");
mappingTable.set("C9CD", "A399");
mappingTable.set("C9CE", "A39A");
mappingTable.set("C9CF", "A39B");
mappingTable.set("C9D2", "A39C");
mappingTable.set("C9D4", "A39D");
mappingTable.set("C9D7", "A39E");
mappingTable.set("C9D8", "A39F");
mappingTable.set("C9DB", "A3A0");
mappingTable.set("FF01", "A3A1");
mappingTable.set("FF02", "A3A2");
mappingTable.set("FF03", "A3A3");
mappingTable.set("FF04", "A3A4");
mappingTable.set("FF05", "A3A5");
mappingTable.set("FF06", "A3A6");
mappingTable.set("FF07", "A3A7");
mappingTable.set("FF08", "A3A8");
mappingTable.set("FF09", "A3A9");
mappingTable.set("FF0A", "A3AA");
mappingTable.set("FF0B", "A3AB");
mappingTable.set("FF0C", "A3AC");
mappingTable.set("FF0D", "A3AD");
mappingTable.set("FF0E", "A3AE");
mappingTable.set("FF0F", "A3AF");
mappingTable.set("0030", "A3B0");
mappingTable.set("0031", "A3B1");
mappingTable.set("0032", "A3B2");
mappingTable.set("0033", "A3B3");
mappingTable.set("0034", "A3B4");
mappingTable.set("0035", "A3B5");
mappingTable.set("0036", "A3B6");
mappingTable.set("0037", "A3B7");
mappingTable.set("0038", "A3B8");
mappingTable.set("0039", "A3B9");
mappingTable.set("FF1A", "A3BA");
mappingTable.set("FF1B", "A3BB");
mappingTable.set("FF1C", "A3BC");
mappingTable.set("FF1D", "A3BD");
mappingTable.set("FF1E", "A3BE");
mappingTable.set("FF1F", "A3BF");
mappingTable.set("FF20", "A3C0");
mappingTable.set("FF21", "A3C1");
mappingTable.set("FF22", "A3C2");
mappingTable.set("FF23", "A3C3");
mappingTable.set("FF24", "A3C4");
mappingTable.set("FF25", "A3C5");
mappingTable.set("FF26", "A3C6");
mappingTable.set("FF27", "A3C7");
mappingTable.set("FF28", "A3C8");
mappingTable.set("FF29", "A3C9");
mappingTable.set("FF2A", "A3CA");
mappingTable.set("FF2B", "A3CB");
mappingTable.set("FF2C", "A3CC");
mappingTable.set("FF2D", "A3CD");
mappingTable.set("FF2E", "A3CE");
mappingTable.set("FF2F", "A3CF");
mappingTable.set("FF30", "A3D0");
mappingTable.set("FF31", "A3D1");
mappingTable.set("FF32", "A3D2");
mappingTable.set("FF33", "A3D3");
mappingTable.set("FF34", "A3D4");
mappingTable.set("FF35", "A3D5");
mappingTable.set("FF36", "A3D6");
mappingTable.set("FF37", "A3D7");
mappingTable.set("FF38", "A3D8");
mappingTable.set("FF39", "A3D9");
mappingTable.set("FF3A", "A3DA");
mappingTable.set("FF3B", "A3DB");
mappingTable.set("FFE6", "A3DC");
mappingTable.set("FF3D", "A3DD");
mappingTable.set("FF3E", "A3DE");
mappingTable.set("FF3F", "A3DF");
mappingTable.set("FF40", "A3E0");
mappingTable.set("FF41", "A3E1");
mappingTable.set("FF42", "A3E2");
mappingTable.set("FF43", "A3E3");
mappingTable.set("FF44", "A3E4");
mappingTable.set("FF45", "A3E5");
mappingTable.set("FF46", "A3E6");
mappingTable.set("FF47", "A3E7");
mappingTable.set("FF48", "A3E8");
mappingTable.set("FF49", "A3E9");
mappingTable.set("FF4A", "A3EA");
mappingTable.set("FF4B", "A3EB");
mappingTable.set("FF4C", "A3EC");
mappingTable.set("FF4D", "A3ED");
mappingTable.set("FF4E", "A3EE");
mappingTable.set("FF4F", "A3EF");
mappingTable.set("FF50", "A3F0");
mappingTable.set("FF51", "A3F1");
mappingTable.set("FF52", "A3F2");
mappingTable.set("FF53", "A3F3");
mappingTable.set("FF54", "A3F4");
mappingTable.set("FF55", "A3F5");
mappingTable.set("FF56", "A3F6");
mappingTable.set("FF57", "A3F7");
mappingTable.set("FF58", "A3F8");
mappingTable.set("FF59", "A3F9");
mappingTable.set("FF5A", "A3FA");
mappingTable.set("FF5B", "A3FB");
mappingTable.set("FF5C", "A3FC");
mappingTable.set("FF5D", "A3FD");
mappingTable.set("FFE3", "A3FE");
mappingTable.set("C9DE", "A441");
mappingTable.set("C9DF", "A442");
mappingTable.set("C9E1", "A443");
mappingTable.set("C9E3", "A444");
mappingTable.set("C9E5", "A445");
mappingTable.set("C9E6", "A446");
mappingTable.set("C9E8", "A447");
mappingTable.set("C9E9", "A448");
mappingTable.set("C9EA", "A449");
mappingTable.set("C9EB", "A44A");
mappingTable.set("C9EE", "A44B");
mappingTable.set("C9F2", "A44C");
mappingTable.set("C9F3", "A44D");
mappingTable.set("C9F4", "A44E");
mappingTable.set("C9F5", "A44F");
mappingTable.set("C9F6", "A450");
mappingTable.set("C9F7", "A451");
mappingTable.set("C9FA", "A452");
mappingTable.set("C9FB", "A453");
mappingTable.set("C9FD", "A454");
mappingTable.set("C9FE", "A455");
mappingTable.set("C9FF", "A456");
mappingTable.set("CA01", "A457");
mappingTable.set("CA02", "A458");
mappingTable.set("CA03", "A459");
mappingTable.set("CA04", "A45A");
mappingTable.set("CA05", "A461");
mappingTable.set("CA06", "A462");
mappingTable.set("CA07", "A463");
mappingTable.set("CA0A", "A464");
mappingTable.set("CA0E", "A465");
mappingTable.set("CA0F", "A466");
mappingTable.set("CA10", "A467");
mappingTable.set("CA11", "A468");
mappingTable.set("CA12", "A469");
mappingTable.set("CA13", "A46A");
mappingTable.set("CA15", "A46B");
mappingTable.set("CA16", "A46C");
mappingTable.set("CA17", "A46D");
mappingTable.set("CA19", "A46E");
mappingTable.set("CA1A", "A46F");
mappingTable.set("CA1B", "A470");
mappingTable.set("CA1C", "A471");
mappingTable.set("CA1D", "A472");
mappingTable.set("CA1E", "A473");
mappingTable.set("CA1F", "A474");
mappingTable.set("CA20", "A475");
mappingTable.set("CA21", "A476");
mappingTable.set("CA22", "A477");
mappingTable.set("CA23", "A478");
mappingTable.set("CA24", "A479");
mappingTable.set("CA25", "A47A");
mappingTable.set("CA26", "A481");
mappingTable.set("CA27", "A482");
mappingTable.set("CA28", "A483");
mappingTable.set("CA2A", "A484");
mappingTable.set("CA2B", "A485");
mappingTable.set("CA2C", "A486");
mappingTable.set("CA2D", "A487");
mappingTable.set("CA2E", "A488");
mappingTable.set("CA2F", "A489");
mappingTable.set("CA30", "A48A");
mappingTable.set("CA31", "A48B");
mappingTable.set("CA32", "A48C");
mappingTable.set("CA33", "A48D");
mappingTable.set("CA34", "A48E");
mappingTable.set("CA35", "A48F");
mappingTable.set("CA36", "A490");
mappingTable.set("CA37", "A491");
mappingTable.set("CA38", "A492");
mappingTable.set("CA39", "A493");
mappingTable.set("CA3A", "A494");
mappingTable.set("CA3B", "A495");
mappingTable.set("CA3C", "A496");
mappingTable.set("CA3D", "A497");
mappingTable.set("CA3E", "A498");
mappingTable.set("CA3F", "A499");
mappingTable.set("CA40", "A49A");
mappingTable.set("CA41", "A49B");
mappingTable.set("CA42", "A49C");
mappingTable.set("CA43", "A49D");
mappingTable.set("CA44", "A49E");
mappingTable.set("CA45", "A49F");
mappingTable.set("CA46", "A4A0");
mappingTable.set("3131", "A4A1");
mappingTable.set("3132", "A4A2");
mappingTable.set("3133", "A4A3");
mappingTable.set("3134", "A4A4");
mappingTable.set("3135", "A4A5");
mappingTable.set("3136", "A4A6");
mappingTable.set("3137", "A4A7");
mappingTable.set("3138", "A4A8");
mappingTable.set("3139", "A4A9");
mappingTable.set("313A", "A4AA");
mappingTable.set("313B", "A4AB");
mappingTable.set("313C", "A4AC");
mappingTable.set("313D", "A4AD");
mappingTable.set("313E", "A4AE");
mappingTable.set("313F", "A4AF");
mappingTable.set("3140", "A4B0");
mappingTable.set("3141", "A4B1");
mappingTable.set("3142", "A4B2");
mappingTable.set("3143", "A4B3");
mappingTable.set("3144", "A4B4");
mappingTable.set("3145", "A4B5");
mappingTable.set("3146", "A4B6");
mappingTable.set("3147", "A4B7");
mappingTable.set("3148", "A4B8");
mappingTable.set("3149", "A4B9");
mappingTable.set("314A", "A4BA");
mappingTable.set("314B", "A4BB");
mappingTable.set("314C", "A4BC");
mappingTable.set("314D", "A4BD");
mappingTable.set("314E", "A4BE");
mappingTable.set("314F", "A4BF");
mappingTable.set("3150", "A4C0");
mappingTable.set("3151", "A4C1");
mappingTable.set("3152", "A4C2");
mappingTable.set("3153", "A4C3");
mappingTable.set("3154", "A4C4");
mappingTable.set("3155", "A4C5");
mappingTable.set("3156", "A4C6");
mappingTable.set("3157", "A4C7");
mappingTable.set("3158", "A4C8");
mappingTable.set("3159", "A4C9");
mappingTable.set("315A", "A4CA");
mappingTable.set("315B", "A4CB");
mappingTable.set("315C", "A4CC");
mappingTable.set("315D", "A4CD");
mappingTable.set("315E", "A4CE");
mappingTable.set("315F", "A4CF");
mappingTable.set("3160", "A4D0");
mappingTable.set("3161", "A4D1");
mappingTable.set("3162", "A4D2");
mappingTable.set("3163", "A4D3");
mappingTable.set("3164", "A4D4");
mappingTable.set("3165", "A4D5");
mappingTable.set("3166", "A4D6");
mappingTable.set("3167", "A4D7");
mappingTable.set("3168", "A4D8");
mappingTable.set("3169", "A4D9");
mappingTable.set("316A", "A4DA");
mappingTable.set("316B", "A4DB");
mappingTable.set("316C", "A4DC");
mappingTable.set("316D", "A4DD");
mappingTable.set("316E", "A4DE");
mappingTable.set("316F", "A4DF");
mappingTable.set("3170", "A4E0");
mappingTable.set("3171", "A4E1");
mappingTable.set("3172", "A4E2");
mappingTable.set("3173", "A4E3");
mappingTable.set("3174", "A4E4");
mappingTable.set("3175", "A4E5");
mappingTable.set("3176", "A4E6");
mappingTable.set("3177", "A4E7");
mappingTable.set("3178", "A4E8");
mappingTable.set("3179", "A4E9");
mappingTable.set("317A", "A4EA");
mappingTable.set("317B", "A4EB");
mappingTable.set("317C", "A4EC");
mappingTable.set("317D", "A4ED");
mappingTable.set("317E", "A4EE");
mappingTable.set("317F", "A4EF");
mappingTable.set("3180", "A4F0");
mappingTable.set("3181", "A4F1");
mappingTable.set("3182", "A4F2");
mappingTable.set("3183", "A4F3");
mappingTable.set("3184", "A4F4");
mappingTable.set("3185", "A4F5");
mappingTable.set("3186", "A4F6");
mappingTable.set("3187", "A4F7");
mappingTable.set("3188", "A4F8");
mappingTable.set("3189", "A4F9");
mappingTable.set("318A", "A4FA");
mappingTable.set("318B", "A4FB");
mappingTable.set("318C", "A4FC");
mappingTable.set("318D", "A4FD");
mappingTable.set("318E", "A4FE");
mappingTable.set("CA47", "A541");
mappingTable.set("CA48", "A542");
mappingTable.set("CA49", "A543");
mappingTable.set("CA4A", "A544");
mappingTable.set("CA4B", "A545");
mappingTable.set("CA4E", "A546");
mappingTable.set("CA4F", "A547");
mappingTable.set("CA51", "A548");
mappingTable.set("CA52", "A549");
mappingTable.set("CA53", "A54A");
mappingTable.set("CA55", "A54B");
mappingTable.set("CA56", "A54C");
mappingTable.set("CA57", "A54D");
mappingTable.set("CA58", "A54E");
mappingTable.set("CA59", "A54F");
mappingTable.set("CA5A", "A550");
mappingTable.set("CA5B", "A551");
mappingTable.set("CA5E", "A552");
mappingTable.set("CA62", "A553");
mappingTable.set("CA63", "A554");
mappingTable.set("CA64", "A555");
mappingTable.set("CA65", "A556");
mappingTable.set("CA66", "A557");
mappingTable.set("CA67", "A558");
mappingTable.set("CA69", "A559");
mappingTable.set("CA6A", "A55A");
mappingTable.set("CA6B", "A561");
mappingTable.set("CA6C", "A562");
mappingTable.set("CA6D", "A563");
mappingTable.set("CA6E", "A564");
mappingTable.set("CA6F", "A565");
mappingTable.set("CA70", "A566");
mappingTable.set("CA71", "A567");
mappingTable.set("CA72", "A568");
mappingTable.set("CA73", "A569");
mappingTable.set("CA74", "A56A");
mappingTable.set("CA75", "A56B");
mappingTable.set("CA76", "A56C");
mappingTable.set("CA77", "A56D");
mappingTable.set("CA78", "A56E");
mappingTable.set("CA79", "A56F");
mappingTable.set("CA7A", "A570");
mappingTable.set("CA7B", "A571");
mappingTable.set("CA7C", "A572");
mappingTable.set("CA7E", "A573");
mappingTable.set("CA7F", "A574");
mappingTable.set("CA80", "A575");
mappingTable.set("CA81", "A576");
mappingTable.set("CA82", "A577");
mappingTable.set("CA83", "A578");
mappingTable.set("CA85", "A579");
mappingTable.set("CA86", "A57A");
mappingTable.set("CA87", "A581");
mappingTable.set("CA88", "A582");
mappingTable.set("CA89", "A583");
mappingTable.set("CA8A", "A584");
mappingTable.set("CA8B", "A585");
mappingTable.set("CA8C", "A586");
mappingTable.set("CA8D", "A587");
mappingTable.set("CA8E", "A588");
mappingTable.set("CA8F", "A589");
mappingTable.set("CA90", "A58A");
mappingTable.set("CA91", "A58B");
mappingTable.set("CA92", "A58C");
mappingTable.set("CA93", "A58D");
mappingTable.set("CA94", "A58E");
mappingTable.set("CA95", "A58F");
mappingTable.set("CA96", "A590");
mappingTable.set("CA97", "A591");
mappingTable.set("CA99", "A592");
mappingTable.set("CA9A", "A593");
mappingTable.set("CA9B", "A594");
mappingTable.set("CA9C", "A595");
mappingTable.set("CA9D", "A596");
mappingTable.set("CA9E", "A597");
mappingTable.set("CA9F", "A598");
mappingTable.set("CAA0", "A599");
mappingTable.set("CAA1", "A59A");
mappingTable.set("CAA2", "A59B");
mappingTable.set("CAA3", "A59C");
mappingTable.set("CAA4", "A59D");
mappingTable.set("CAA5", "A59E");
mappingTable.set("CAA6", "A59F");
mappingTable.set("CAA7", "A5A0");
mappingTable.set("2170", "A5A1");
mappingTable.set("2171", "A5A2");
mappingTable.set("2172", "A5A3");
mappingTable.set("2173", "A5A4");
mappingTable.set("2174", "A5A5");
mappingTable.set("2175", "A5A6");
mappingTable.set("2176", "A5A7");
mappingTable.set("2177", "A5A8");
mappingTable.set("2178", "A5A9");
mappingTable.set("2179", "A5AA");
mappingTable.set("2160", "A5B0");
mappingTable.set("2161", "A5B1");
mappingTable.set("2162", "A5B2");
mappingTable.set("2163", "A5B3");
mappingTable.set("2164", "A5B4");
mappingTable.set("2165", "A5B5");
mappingTable.set("2166", "A5B6");
mappingTable.set("2167", "A5B7");
mappingTable.set("2168", "A5B8");
mappingTable.set("2169", "A5B9");
mappingTable.set("0391", "A5C1");
mappingTable.set("0392", "A5C2");
mappingTable.set("0393", "A5C3");
mappingTable.set("0394", "A5C4");
mappingTable.set("0395", "A5C5");
mappingTable.set("0396", "A5C6");
mappingTable.set("0397", "A5C7");
mappingTable.set("0398", "A5C8");
mappingTable.set("0399", "A5C9");
mappingTable.set("039A", "A5CA");
mappingTable.set("039B", "A5CB");
mappingTable.set("039C", "A5CC");
mappingTable.set("039D", "A5CD");
mappingTable.set("039E", "A5CE");
mappingTable.set("039F", "A5CF");
mappingTable.set("03A0", "A5D0");
mappingTable.set("03A1", "A5D1");
mappingTable.set("03A3", "A5D2");
mappingTable.set("03A4", "A5D3");
mappingTable.set("03A5", "A5D4");
mappingTable.set("03A6", "A5D5");
mappingTable.set("03A7", "A5D6");
mappingTable.set("03A8", "A5D7");
mappingTable.set("03A9", "A5D8");
mappingTable.set("03B1", "A5E1");
mappingTable.set("03B2", "A5E2");
mappingTable.set("03B3", "A5E3");
mappingTable.set("03B4", "A5E4");
mappingTable.set("03B5", "A5E5");
mappingTable.set("03B6", "A5E6");
mappingTable.set("03B7", "A5E7");
mappingTable.set("03B8", "A5E8");
mappingTable.set("03B9", "A5E9");
mappingTable.set("03BA", "A5EA");
mappingTable.set("03BB", "A5EB");
mappingTable.set("03BC", "A5EC");
mappingTable.set("03BD", "A5ED");
mappingTable.set("03BE", "A5EE");
mappingTable.set("03BF", "A5EF");
mappingTable.set("03C0", "A5F0");
mappingTable.set("03C1", "A5F1");
mappingTable.set("03C3", "A5F2");
mappingTable.set("03C4", "A5F3");
mappingTable.set("03C5", "A5F4");
mappingTable.set("03C6", "A5F5");
mappingTable.set("03C7", "A5F6");
mappingTable.set("03C8", "A5F7");
mappingTable.set("03C9", "A5F8");
mappingTable.set("CAA8", "A641");
mappingTable.set("CAA9", "A642");
mappingTable.set("CAAA", "A643");
mappingTable.set("CAAB", "A644");
mappingTable.set("CAAC", "A645");
mappingTable.set("CAAD", "A646");
mappingTable.set("CAAE", "A647");
mappingTable.set("CAAF", "A648");
mappingTable.set("CAB0", "A649");
mappingTable.set("CAB1", "A64A");
mappingTable.set("CAB2", "A64B");
mappingTable.set("CAB3", "A64C");
mappingTable.set("CAB4", "A64D");
mappingTable.set("CAB5", "A64E");
mappingTable.set("CAB6", "A64F");
mappingTable.set("CAB7", "A650");
mappingTable.set("CAB8", "A651");
mappingTable.set("CAB9", "A652");
mappingTable.set("CABA", "A653");
mappingTable.set("CABB", "A654");
mappingTable.set("CABE", "A655");
mappingTable.set("CABF", "A656");
mappingTable.set("CAC1", "A657");
mappingTable.set("CAC2", "A658");
mappingTable.set("CAC3", "A659");
mappingTable.set("CAC5", "A65A");
mappingTable.set("CAC6", "A661");
mappingTable.set("CAC7", "A662");
mappingTable.set("CAC8", "A663");
mappingTable.set("CAC9", "A664");
mappingTable.set("CACA", "A665");
mappingTable.set("CACB", "A666");
mappingTable.set("CACE", "A667");
mappingTable.set("CAD0", "A668");
mappingTable.set("CAD2", "A669");
mappingTable.set("CAD4", "A66A");
mappingTable.set("CAD5", "A66B");
mappingTable.set("CAD6", "A66C");
mappingTable.set("CAD7", "A66D");
mappingTable.set("CADA", "A66E");
mappingTable.set("CADB", "A66F");
mappingTable.set("CADC", "A670");
mappingTable.set("CADD", "A671");
mappingTable.set("CADE", "A672");
mappingTable.set("CADF", "A673");
mappingTable.set("CAE1", "A674");
mappingTable.set("CAE2", "A675");
mappingTable.set("CAE3", "A676");
mappingTable.set("CAE4", "A677");
mappingTable.set("CAE5", "A678");
mappingTable.set("CAE6", "A679");
mappingTable.set("CAE7", "A67A");
mappingTable.set("CAE8", "A681");
mappingTable.set("CAE9", "A682");
mappingTable.set("CAEA", "A683");
mappingTable.set("CAEB", "A684");
mappingTable.set("CAED", "A685");
mappingTable.set("CAEE", "A686");
mappingTable.set("CAEF", "A687");
mappingTable.set("CAF0", "A688");
mappingTable.set("CAF1", "A689");
mappingTable.set("CAF2", "A68A");
mappingTable.set("CAF3", "A68B");
mappingTable.set("CAF5", "A68C");
mappingTable.set("CAF6", "A68D");
mappingTable.set("CAF7", "A68E");
mappingTable.set("CAF8", "A68F");
mappingTable.set("CAF9", "A690");
mappingTable.set("CAFA", "A691");
mappingTable.set("CAFB", "A692");
mappingTable.set("CAFC", "A693");
mappingTable.set("CAFD", "A694");
mappingTable.set("CAFE", "A695");
mappingTable.set("CAFF", "A696");
mappingTable.set("CB00", "A697");
mappingTable.set("CB01", "A698");
mappingTable.set("CB02", "A699");
mappingTable.set("CB03", "A69A");
mappingTable.set("CB04", "A69B");
mappingTable.set("CB05", "A69C");
mappingTable.set("CB06", "A69D");
mappingTable.set("CB07", "A69E");
mappingTable.set("CB09", "A69F");
mappingTable.set("CB0A", "A6A0");
mappingTable.set("2500", "A6A1");
mappingTable.set("2502", "A6A2");
mappingTable.set("250C", "A6A3");
mappingTable.set("2510", "A6A4");
mappingTable.set("2518", "A6A5");
mappingTable.set("2514", "A6A6");
mappingTable.set("251C", "A6A7");
mappingTable.set("252C", "A6A8");
mappingTable.set("2524", "A6A9");
mappingTable.set("2534", "A6AA");
mappingTable.set("253C", "A6AB");
mappingTable.set("2501", "A6AC");
mappingTable.set("2503", "A6AD");
mappingTable.set("250F", "A6AE");
mappingTable.set("2513", "A6AF");
mappingTable.set("251B", "A6B0");
mappingTable.set("2517", "A6B1");
mappingTable.set("2523", "A6B2");
mappingTable.set("2533", "A6B3");
mappingTable.set("252B", "A6B4");
mappingTable.set("253B", "A6B5");
mappingTable.set("254B", "A6B6");
mappingTable.set("2520", "A6B7");
mappingTable.set("252F", "A6B8");
mappingTable.set("2528", "A6B9");
mappingTable.set("2537", "A6BA");
mappingTable.set("253F", "A6BB");
mappingTable.set("251D", "A6BC");
mappingTable.set("2530", "A6BD");
mappingTable.set("2525", "A6BE");
mappingTable.set("2538", "A6BF");
mappingTable.set("2542", "A6C0");
mappingTable.set("2512", "A6C1");
mappingTable.set("2511", "A6C2");
mappingTable.set("251A", "A6C3");
mappingTable.set("2519", "A6C4");
mappingTable.set("2516", "A6C5");
mappingTable.set("2515", "A6C6");
mappingTable.set("250E", "A6C7");
mappingTable.set("250D", "A6C8");
mappingTable.set("251E", "A6C9");
mappingTable.set("251F", "A6CA");
mappingTable.set("2521", "A6CB");
mappingTable.set("2522", "A6CC");
mappingTable.set("2526", "A6CD");
mappingTable.set("2527", "A6CE");
mappingTable.set("2529", "A6CF");
mappingTable.set("252A", "A6D0");
mappingTable.set("252D", "A6D1");
mappingTable.set("252E", "A6D2");
mappingTable.set("2531", "A6D3");
mappingTable.set("2532", "A6D4");
mappingTable.set("2535", "A6D5");
mappingTable.set("2536", "A6D6");
mappingTable.set("2539", "A6D7");
mappingTable.set("253A", "A6D8");
mappingTable.set("253D", "A6D9");
mappingTable.set("253E", "A6DA");
mappingTable.set("2540", "A6DB");
mappingTable.set("2541", "A6DC");
mappingTable.set("2543", "A6DD");
mappingTable.set("2544", "A6DE");
mappingTable.set("2545", "A6DF");
mappingTable.set("2546", "A6E0");
mappingTable.set("2547", "A6E1");
mappingTable.set("2548", "A6E2");
mappingTable.set("2549", "A6E3");
mappingTable.set("254A", "A6E4");
mappingTable.set("CB0B", "A741");
mappingTable.set("CB0C", "A742");
mappingTable.set("CB0D", "A743");
mappingTable.set("CB0E", "A744");
mappingTable.set("CB0F", "A745");
mappingTable.set("CB11", "A746");
mappingTable.set("CB12", "A747");
mappingTable.set("CB13", "A748");
mappingTable.set("CB15", "A749");
mappingTable.set("CB16", "A74A");
mappingTable.set("CB17", "A74B");
mappingTable.set("CB19", "A74C");
mappingTable.set("CB1A", "A74D");
mappingTable.set("CB1B", "A74E");
mappingTable.set("CB1C", "A74F");
mappingTable.set("CB1D", "A750");
mappingTable.set("CB1E", "A751");
mappingTable.set("CB1F", "A752");
mappingTable.set("CB22", "A753");
mappingTable.set("CB23", "A754");
mappingTable.set("CB24", "A755");
mappingTable.set("CB25", "A756");
mappingTable.set("CB26", "A757");
mappingTable.set("CB27", "A758");
mappingTable.set("CB28", "A759");
mappingTable.set("CB29", "A75A");
mappingTable.set("CB2A", "A761");
mappingTable.set("CB2B", "A762");
mappingTable.set("CB2C", "A763");
mappingTable.set("CB2D", "A764");
mappingTable.set("CB2E", "A765");
mappingTable.set("CB2F", "A766");
mappingTable.set("CB30", "A767");
mappingTable.set("CB31", "A768");
mappingTable.set("CB32", "A769");
mappingTable.set("CB33", "A76A");
mappingTable.set("CB34", "A76B");
mappingTable.set("CB35", "A76C");
mappingTable.set("CB36", "A76D");
mappingTable.set("CB37", "A76E");
mappingTable.set("CB38", "A76F");
mappingTable.set("CB39", "A770");
mappingTable.set("CB3A", "A771");
mappingTable.set("CB3B", "A772");
mappingTable.set("CB3C", "A773");
mappingTable.set("CB3D", "A774");
mappingTable.set("CB3E", "A775");
mappingTable.set("CB3F", "A776");
mappingTable.set("CB40", "A777");
mappingTable.set("CB42", "A778");
mappingTable.set("CB43", "A779");
mappingTable.set("CB44", "A77A");
mappingTable.set("CB45", "A781");
mappingTable.set("CB46", "A782");
mappingTable.set("CB47", "A783");
mappingTable.set("CB4A", "A784");
mappingTable.set("CB4B", "A785");
mappingTable.set("CB4D", "A786");
mappingTable.set("CB4E", "A787");
mappingTable.set("CB4F", "A788");
mappingTable.set("CB51", "A789");
mappingTable.set("CB52", "A78A");
mappingTable.set("CB53", "A78B");
mappingTable.set("CB54", "A78C");
mappingTable.set("CB55", "A78D");
mappingTable.set("CB56", "A78E");
mappingTable.set("CB57", "A78F");
mappingTable.set("CB5A", "A790");
mappingTable.set("CB5B", "A791");
mappingTable.set("CB5C", "A792");
mappingTable.set("CB5E", "A793");
mappingTable.set("CB5F", "A794");
mappingTable.set("CB60", "A795");
mappingTable.set("CB61", "A796");
mappingTable.set("CB62", "A797");
mappingTable.set("CB63", "A798");
mappingTable.set("CB65", "A799");
mappingTable.set("CB66", "A79A");
mappingTable.set("CB67", "A79B");
mappingTable.set("CB68", "A79C");
mappingTable.set("CB69", "A79D");
mappingTable.set("CB6A", "A79E");
mappingTable.set("CB6B", "A79F");
mappingTable.set("CB6C", "A7A0");
mappingTable.set("3395", "A7A1");
mappingTable.set("3396", "A7A2");
mappingTable.set("3397", "A7A3");
mappingTable.set("2113", "A7A4");
mappingTable.set("3398", "A7A5");
mappingTable.set("33C4", "A7A6");
mappingTable.set("33A3", "A7A7");
mappingTable.set("33A4", "A7A8");
mappingTable.set("33A5", "A7A9");
mappingTable.set("33A6", "A7AA");
mappingTable.set("3399", "A7AB");
mappingTable.set("339A", "A7AC");
mappingTable.set("339B", "A7AD");
mappingTable.set("339C", "A7AE");
mappingTable.set("339D", "A7AF");
mappingTable.set("339E", "A7B0");
mappingTable.set("339F", "A7B1");
mappingTable.set("33A0", "A7B2");
mappingTable.set("33A1", "A7B3");
mappingTable.set("33A2", "A7B4");
mappingTable.set("33CA", "A7B5");
mappingTable.set("338D", "A7B6");
mappingTable.set("338E", "A7B7");
mappingTable.set("338F", "A7B8");
mappingTable.set("33CF", "A7B9");
mappingTable.set("3388", "A7BA");
mappingTable.set("3389", "A7BB");
mappingTable.set("33C8", "A7BC");
mappingTable.set("33A7", "A7BD");
mappingTable.set("33A8", "A7BE");
mappingTable.set("33B0", "A7BF");
mappingTable.set("33B1", "A7C0");
mappingTable.set("33B2", "A7C1");
mappingTable.set("33B3", "A7C2");
mappingTable.set("33B4", "A7C3");
mappingTable.set("33B5", "A7C4");
mappingTable.set("33B6", "A7C5");
mappingTable.set("33B7", "A7C6");
mappingTable.set("33B8", "A7C7");
mappingTable.set("33B9", "A7C8");
mappingTable.set("3380", "A7C9");
mappingTable.set("3381", "A7CA");
mappingTable.set("3382", "A7CB");
mappingTable.set("3383", "A7CC");
mappingTable.set("3384", "A7CD");
mappingTable.set("33BA", "A7CE");
mappingTable.set("33BB", "A7CF");
mappingTable.set("33BC", "A7D0");
mappingTable.set("33BD", "A7D1");
mappingTable.set("33BE", "A7D2");
mappingTable.set("33BF", "A7D3");
mappingTable.set("3390", "A7D4");
mappingTable.set("3391", "A7D5");
mappingTable.set("3392", "A7D6");
mappingTable.set("3393", "A7D7");
mappingTable.set("3394", "A7D8");
mappingTable.set("03A9", "A7D9");
mappingTable.set("33C0", "A7DA");
mappingTable.set("33C1", "A7DB");
mappingTable.set("338A", "A7DC");
mappingTable.set("338B", "A7DD");
mappingTable.set("338C", "A7DE");
mappingTable.set("33D6", "A7DF");
mappingTable.set("33C5", "A7E0");
mappingTable.set("33AD", "A7E1");
mappingTable.set("33AE", "A7E2");
mappingTable.set("33AF", "A7E3");
mappingTable.set("33DB", "A7E4");
mappingTable.set("33A9", "A7E5");
mappingTable.set("33AA", "A7E6");
mappingTable.set("33AB", "A7E7");
mappingTable.set("33AC", "A7E8");
mappingTable.set("33DD", "A7E9");
mappingTable.set("33D0", "A7EA");
mappingTable.set("33D3", "A7EB");
mappingTable.set("33C3", "A7EC");
mappingTable.set("33C9", "A7ED");
mappingTable.set("33DC", "A7EE");
mappingTable.set("33C6", "A7EF");
mappingTable.set("CB6D", "A841");
mappingTable.set("CB6E", "A842");
mappingTable.set("CB6F", "A843");
mappingTable.set("CB70", "A844");
mappingTable.set("CB71", "A845");
mappingTable.set("CB72", "A846");
mappingTable.set("CB73", "A847");
mappingTable.set("CB74", "A848");
mappingTable.set("CB75", "A849");
mappingTable.set("CB76", "A84A");
mappingTable.set("CB77", "A84B");
mappingTable.set("CB7A", "A84C");
mappingTable.set("CB7B", "A84D");
mappingTable.set("CB7C", "A84E");
mappingTable.set("CB7D", "A84F");
mappingTable.set("CB7E", "A850");
mappingTable.set("CB7F", "A851");
mappingTable.set("CB80", "A852");
mappingTable.set("CB81", "A853");
mappingTable.set("CB82", "A854");
mappingTable.set("CB83", "A855");
mappingTable.set("CB84", "A856");
mappingTable.set("CB85", "A857");
mappingTable.set("CB86", "A858");
mappingTable.set("CB87", "A859");
mappingTable.set("CB88", "A85A");
mappingTable.set("CB89", "A861");
mappingTable.set("CB8A", "A862");
mappingTable.set("CB8B", "A863");
mappingTable.set("CB8C", "A864");
mappingTable.set("CB8D", "A865");
mappingTable.set("CB8E", "A866");
mappingTable.set("CB8F", "A867");
mappingTable.set("CB90", "A868");
mappingTable.set("CB91", "A869");
mappingTable.set("CB92", "A86A");
mappingTable.set("CB93", "A86B");
mappingTable.set("CB94", "A86C");
mappingTable.set("CB95", "A86D");
mappingTable.set("CB96", "A86E");
mappingTable.set("CB97", "A86F");
mappingTable.set("CB98", "A870");
mappingTable.set("CB99", "A871");
mappingTable.set("CB9A", "A872");
mappingTable.set("CB9B", "A873");
mappingTable.set("CB9D", "A874");
mappingTable.set("CB9E", "A875");
mappingTable.set("CB9F", "A876");
mappingTable.set("CBA0", "A877");
mappingTable.set("CBA1", "A878");
mappingTable.set("CBA2", "A879");
mappingTable.set("CBA3", "A87A");
mappingTable.set("CBA4", "A881");
mappingTable.set("CBA5", "A882");
mappingTable.set("CBA6", "A883");
mappingTable.set("CBA7", "A884");
mappingTable.set("CBA8", "A885");
mappingTable.set("CBA9", "A886");
mappingTable.set("CBAA", "A887");
mappingTable.set("CBAB", "A888");
mappingTable.set("CBAC", "A889");
mappingTable.set("CBAD", "A88A");
mappingTable.set("CBAE", "A88B");
mappingTable.set("CBAF", "A88C");
mappingTable.set("CBB0", "A88D");
mappingTable.set("CBB1", "A88E");
mappingTable.set("CBB2", "A88F");
mappingTable.set("CBB3", "A890");
mappingTable.set("CBB4", "A891");
mappingTable.set("CBB5", "A892");
mappingTable.set("CBB6", "A893");
mappingTable.set("CBB7", "A894");
mappingTable.set("CBB9", "A895");
mappingTable.set("CBBA", "A896");
mappingTable.set("CBBB", "A897");
mappingTable.set("CBBC", "A898");
mappingTable.set("CBBD", "A899");
mappingTable.set("CBBE", "A89A");
mappingTable.set("CBBF", "A89B");
mappingTable.set("CBC0", "A89C");
mappingTable.set("CBC1", "A89D");
mappingTable.set("CBC2", "A89E");
mappingTable.set("CBC3", "A89F");
mappingTable.set("CBC4", "A8A0");
mappingTable.set("00C6", "A8A1");
mappingTable.set("00D0", "A8A2");
mappingTable.set("00AA", "A8A3");
mappingTable.set("0126", "A8A4");
mappingTable.set("0132", "A8A6");
mappingTable.set("013F", "A8A8");
mappingTable.set("0141", "A8A9");
mappingTable.set("00D8", "A8AA");
mappingTable.set("0152", "A8AB");
mappingTable.set("00BA", "A8AC");
mappingTable.set("00DE", "A8AD");
mappingTable.set("0166", "A8AE");
mappingTable.set("014A", "A8AF");
mappingTable.set("3260", "A8B1");
mappingTable.set("3261", "A8B2");
mappingTable.set("3262", "A8B3");
mappingTable.set("3263", "A8B4");
mappingTable.set("3264", "A8B5");
mappingTable.set("3265", "A8B6");
mappingTable.set("3266", "A8B7");
mappingTable.set("3267", "A8B8");
mappingTable.set("3268", "A8B9");
mappingTable.set("3269", "A8BA");
mappingTable.set("326A", "A8BB");
mappingTable.set("326B", "A8BC");
mappingTable.set("326C", "A8BD");
mappingTable.set("326D", "A8BE");
mappingTable.set("326E", "A8BF");
mappingTable.set("326F", "A8C0");
mappingTable.set("3270", "A8C1");
mappingTable.set("3271", "A8C2");
mappingTable.set("3272", "A8C3");
mappingTable.set("3273", "A8C4");
mappingTable.set("3274", "A8C5");
mappingTable.set("3275", "A8C6");
mappingTable.set("3276", "A8C7");
mappingTable.set("3277", "A8C8");
mappingTable.set("3278", "A8C9");
mappingTable.set("3279", "A8CA");
mappingTable.set("327A", "A8CB");
mappingTable.set("327B", "A8CC");
mappingTable.set("24D0", "A8CD");
mappingTable.set("24D1", "A8CE");
mappingTable.set("24D2", "A8CF");
mappingTable.set("24D3", "A8D0");
mappingTable.set("24D4", "A8D1");
mappingTable.set("24D5", "A8D2");
mappingTable.set("24D6", "A8D3");
mappingTable.set("24D7", "A8D4");
mappingTable.set("24D8", "A8D5");
mappingTable.set("24D9", "A8D6");
mappingTable.set("24DA", "A8D7");
mappingTable.set("24DB", "A8D8");
mappingTable.set("24DC", "A8D9");
mappingTable.set("24DD", "A8DA");
mappingTable.set("24DE", "A8DB");
mappingTable.set("24DF", "A8DC");
mappingTable.set("24E0", "A8DD");
mappingTable.set("24E1", "A8DE");
mappingTable.set("24E2", "A8DF");
mappingTable.set("24E3", "A8E0");
mappingTable.set("24E4", "A8E1");
mappingTable.set("24E5", "A8E2");
mappingTable.set("24E6", "A8E3");
mappingTable.set("24E7", "A8E4");
mappingTable.set("24E8", "A8E5");
mappingTable.set("24E9", "A8E6");
mappingTable.set("2460", "A8E7");
mappingTable.set("2461", "A8E8");
mappingTable.set("2462", "A8E9");
mappingTable.set("2463", "A8EA");
mappingTable.set("2464", "A8EB");
mappingTable.set("2465", "A8EC");
mappingTable.set("2466", "A8ED");
mappingTable.set("2467", "A8EE");
mappingTable.set("2468", "A8EF");
mappingTable.set("2469", "A8F0");
mappingTable.set("246A", "A8F1");
mappingTable.set("246B", "A8F2");
mappingTable.set("246C", "A8F3");
mappingTable.set("246D", "A8F4");
mappingTable.set("246E", "A8F5");
mappingTable.set("00BD", "A8F6");
mappingTable.set("2153", "A8F7");
mappingTable.set("2154", "A8F8");
mappingTable.set("00BC", "A8F9");
mappingTable.set("00BE", "A8FA");
mappingTable.set("215B", "A8FB");
mappingTable.set("215C", "A8FC");
mappingTable.set("215D", "A8FD");
mappingTable.set("215E", "A8FE");
mappingTable.set("CBC5", "A941");
mappingTable.set("CBC6", "A942");
mappingTable.set("CBC7", "A943");
mappingTable.set("CBC8", "A944");
mappingTable.set("CBC9", "A945");
mappingTable.set("CBCA", "A946");
mappingTable.set("CBCB", "A947");
mappingTable.set("CBCC", "A948");
mappingTable.set("CBCD", "A949");
mappingTable.set("CBCE", "A94A");
mappingTable.set("CBCF", "A94B");
mappingTable.set("CBD0", "A94C");
mappingTable.set("CBD1", "A94D");
mappingTable.set("CBD2", "A94E");
mappingTable.set("CBD3", "A94F");
mappingTable.set("CBD5", "A950");
mappingTable.set("CBD6", "A951");
mappingTable.set("CBD7", "A952");
mappingTable.set("CBD8", "A953");
mappingTable.set("CBD9", "A954");
mappingTable.set("CBDA", "A955");
mappingTable.set("CBDB", "A956");
mappingTable.set("CBDC", "A957");
mappingTable.set("CBDD", "A958");
mappingTable.set("CBDE", "A959");
mappingTable.set("CBDF", "A95A");
mappingTable.set("CBE0", "A961");
mappingTable.set("CBE1", "A962");
mappingTable.set("CBE2", "A963");
mappingTable.set("CBE3", "A964");
mappingTable.set("CBE5", "A965");
mappingTable.set("CBE6", "A966");
mappingTable.set("CBE8", "A967");
mappingTable.set("CBEA", "A968");
mappingTable.set("CBEB", "A969");
mappingTable.set("CBEC", "A96A");
mappingTable.set("CBED", "A96B");
mappingTable.set("CBEE", "A96C");
mappingTable.set("CBEF", "A96D");
mappingTable.set("CBF0", "A96E");
mappingTable.set("CBF1", "A96F");
mappingTable.set("CBF2", "A970");
mappingTable.set("CBF3", "A971");
mappingTable.set("CBF4", "A972");
mappingTable.set("CBF5", "A973");
mappingTable.set("CBF6", "A974");
mappingTable.set("CBF7", "A975");
mappingTable.set("CBF8", "A976");
mappingTable.set("CBF9", "A977");
mappingTable.set("CBFA", "A978");
mappingTable.set("CBFB", "A979");
mappingTable.set("CBFC", "A97A");
mappingTable.set("CBFD", "A981");
mappingTable.set("CBFE", "A982");
mappingTable.set("CBFF", "A983");
mappingTable.set("CC00", "A984");
mappingTable.set("CC01", "A985");
mappingTable.set("CC02", "A986");
mappingTable.set("CC03", "A987");
mappingTable.set("CC04", "A988");
mappingTable.set("CC05", "A989");
mappingTable.set("CC06", "A98A");
mappingTable.set("CC07", "A98B");
mappingTable.set("CC08", "A98C");
mappingTable.set("CC09", "A98D");
mappingTable.set("CC0A", "A98E");
mappingTable.set("CC0B", "A98F");
mappingTable.set("CC0E", "A990");
mappingTable.set("CC0F", "A991");
mappingTable.set("CC11", "A992");
mappingTable.set("CC12", "A993");
mappingTable.set("CC13", "A994");
mappingTable.set("CC15", "A995");
mappingTable.set("CC16", "A996");
mappingTable.set("CC17", "A997");
mappingTable.set("CC18", "A998");
mappingTable.set("CC19", "A999");
mappingTable.set("CC1A", "A99A");
mappingTable.set("CC1B", "A99B");
mappingTable.set("CC1E", "A99C");
mappingTable.set("CC1F", "A99D");
mappingTable.set("CC20", "A99E");
mappingTable.set("CC23", "A99F");
mappingTable.set("CC24", "A9A0");
mappingTable.set("00E6", "A9A1");
mappingTable.set("0111", "A9A2");
mappingTable.set("00F0", "A9A3");
mappingTable.set("0127", "A9A4");
mappingTable.set("0131", "A9A5");
mappingTable.set("0133", "A9A6");
mappingTable.set("0138", "A9A7");
mappingTable.set("0140", "A9A8");
mappingTable.set("0142", "A9A9");
mappingTable.set("00F8", "A9AA");
mappingTable.set("0153", "A9AB");
mappingTable.set("00DF", "A9AC");
mappingTable.set("00FE", "A9AD");
mappingTable.set("0167", "A9AE");
mappingTable.set("014B", "A9AF");
mappingTable.set("0149", "A9B0");
mappingTable.set("3200", "A9B1");
mappingTable.set("3201", "A9B2");
mappingTable.set("3202", "A9B3");
mappingTable.set("3203", "A9B4");
mappingTable.set("3204", "A9B5");
mappingTable.set("3205", "A9B6");
mappingTable.set("3206", "A9B7");
mappingTable.set("3207", "A9B8");
mappingTable.set("3208", "A9B9");
mappingTable.set("3209", "A9BA");
mappingTable.set("320A", "A9BB");
mappingTable.set("320B", "A9BC");
mappingTable.set("320C", "A9BD");
mappingTable.set("320D", "A9BE");
mappingTable.set("320E", "A9BF");
mappingTable.set("320F", "A9C0");
mappingTable.set("3210", "A9C1");
mappingTable.set("3211", "A9C2");
mappingTable.set("3212", "A9C3");
mappingTable.set("3213", "A9C4");
mappingTable.set("3214", "A9C5");
mappingTable.set("3215", "A9C6");
mappingTable.set("3216", "A9C7");
mappingTable.set("3217", "A9C8");
mappingTable.set("3218", "A9C9");
mappingTable.set("3219", "A9CA");
mappingTable.set("321A", "A9CB");
mappingTable.set("321B", "A9CC");
mappingTable.set("249C", "A9CD");
mappingTable.set("249D", "A9CE");
mappingTable.set("249E", "A9CF");
mappingTable.set("249F", "A9D0");
mappingTable.set("24A0", "A9D1");
mappingTable.set("24A1", "A9D2");
mappingTable.set("24A2", "A9D3");
mappingTable.set("24A3", "A9D4");
mappingTable.set("24A4", "A9D5");
mappingTable.set("24A5", "A9D6");
mappingTable.set("24A6", "A9D7");
mappingTable.set("24A7", "A9D8");
mappingTable.set("24A8", "A9D9");
mappingTable.set("24A9", "A9DA");
mappingTable.set("24AA", "A9DB");
mappingTable.set("24AB", "A9DC");
mappingTable.set("24AC", "A9DD");
mappingTable.set("24AD", "A9DE");
mappingTable.set("24AE", "A9DF");
mappingTable.set("24AF", "A9E0");
mappingTable.set("24B0", "A9E1");
mappingTable.set("24B1", "A9E2");
mappingTable.set("24B2", "A9E3");
mappingTable.set("24B3", "A9E4");
mappingTable.set("24B4", "A9E5");
mappingTable.set("24B5", "A9E6");
mappingTable.set("2474", "A9E7");
mappingTable.set("2475", "A9E8");
mappingTable.set("2476", "A9E9");
mappingTable.set("2477", "A9EA");
mappingTable.set("2478", "A9EB");
mappingTable.set("2479", "A9EC");
mappingTable.set("247A", "A9ED");
mappingTable.set("247B", "A9EE");
mappingTable.set("247C", "A9EF");
mappingTable.set("247D", "A9F0");
mappingTable.set("247E", "A9F1");
mappingTable.set("247F", "A9F2");
mappingTable.set("2480", "A9F3");
mappingTable.set("2481", "A9F4");
mappingTable.set("2482", "A9F5");
mappingTable.set("00B9", "A9F6");
mappingTable.set("00B2", "A9F7");
mappingTable.set("00B3", "A9F8");
mappingTable.set("2074", "A9F9");
mappingTable.set("207F", "A9FA");
mappingTable.set("2081", "A9FB");
mappingTable.set("2082", "A9FC");
mappingTable.set("2083", "A9FD");
mappingTable.set("2084", "A9FE");
mappingTable.set("CC25", "AA41");
mappingTable.set("CC26", "AA42");
mappingTable.set("CC2A", "AA43");
mappingTable.set("CC2B", "AA44");
mappingTable.set("CC2D", "AA45");
mappingTable.set("CC2F", "AA46");
mappingTable.set("CC31", "AA47");
mappingTable.set("CC32", "AA48");
mappingTable.set("CC33", "AA49");
mappingTable.set("CC34", "AA4A");
mappingTable.set("CC35", "AA4B");
mappingTable.set("CC36", "AA4C");
mappingTable.set("CC37", "AA4D");
mappingTable.set("CC3A", "AA4E");
mappingTable.set("CC3F", "AA4F");
mappingTable.set("CC40", "AA50");
mappingTable.set("CC41", "AA51");
mappingTable.set("CC42", "AA52");
mappingTable.set("CC43", "AA53");
mappingTable.set("CC46", "AA54");
mappingTable.set("CC47", "AA55");
mappingTable.set("CC49", "AA56");
mappingTable.set("CC4A", "AA57");
mappingTable.set("CC4B", "AA58");
mappingTable.set("CC4D", "AA59");
mappingTable.set("CC4E", "AA5A");
mappingTable.set("CC4F", "AA61");
mappingTable.set("CC50", "AA62");
mappingTable.set("CC51", "AA63");
mappingTable.set("CC52", "AA64");
mappingTable.set("CC53", "AA65");
mappingTable.set("CC56", "AA66");
mappingTable.set("CC5A", "AA67");
mappingTable.set("CC5B", "AA68");
mappingTable.set("CC5C", "AA69");
mappingTable.set("CC5D", "AA6A");
mappingTable.set("CC5E", "AA6B");
mappingTable.set("CC5F", "AA6C");
mappingTable.set("CC61", "AA6D");
mappingTable.set("CC62", "AA6E");
mappingTable.set("CC63", "AA6F");
mappingTable.set("CC65", "AA70");
mappingTable.set("CC67", "AA71");
mappingTable.set("CC69", "AA72");
mappingTable.set("CC6A", "AA73");
mappingTable.set("CC6B", "AA74");
mappingTable.set("CC6C", "AA75");
mappingTable.set("CC6D", "AA76");
mappingTable.set("CC6E", "AA77");
mappingTable.set("CC6F", "AA78");
mappingTable.set("CC71", "AA79");
mappingTable.set("CC72", "AA7A");
mappingTable.set("CC73", "AA81");
mappingTable.set("CC74", "AA82");
mappingTable.set("CC76", "AA83");
mappingTable.set("CC77", "AA84");
mappingTable.set("CC78", "AA85");
mappingTable.set("CC79", "AA86");
mappingTable.set("CC7A", "AA87");
mappingTable.set("CC7B", "AA88");
mappingTable.set("CC7C", "AA89");
mappingTable.set("CC7D", "AA8A");
mappingTable.set("CC7E", "AA8B");
mappingTable.set("CC7F", "AA8C");
mappingTable.set("CC80", "AA8D");
mappingTable.set("CC81", "AA8E");
mappingTable.set("CC82", "AA8F");
mappingTable.set("CC83", "AA90");
mappingTable.set("CC84", "AA91");
mappingTable.set("CC85", "AA92");
mappingTable.set("CC86", "AA93");
mappingTable.set("CC87", "AA94");
mappingTable.set("CC88", "AA95");
mappingTable.set("CC89", "AA96");
mappingTable.set("CC8A", "AA97");
mappingTable.set("CC8B", "AA98");
mappingTable.set("CC8C", "AA99");
mappingTable.set("CC8D", "AA9A");
mappingTable.set("CC8E", "AA9B");
mappingTable.set("CC8F", "AA9C");
mappingTable.set("CC90", "AA9D");
mappingTable.set("CC91", "AA9E");
mappingTable.set("CC92", "AA9F");
mappingTable.set("CC93", "AAA0");
mappingTable.set("3041", "AAA1");
mappingTable.set("3042", "AAA2");
mappingTable.set("3043", "AAA3");
mappingTable.set("3044", "AAA4");
mappingTable.set("3045", "AAA5");
mappingTable.set("3046", "AAA6");
mappingTable.set("3047", "AAA7");
mappingTable.set("3048", "AAA8");
mappingTable.set("3049", "AAA9");
mappingTable.set("304A", "AAAA");
mappingTable.set("304B", "AAAB");
mappingTable.set("304C", "AAAC");
mappingTable.set("304D", "AAAD");
mappingTable.set("304E", "AAAE");
mappingTable.set("304F", "AAAF");
mappingTable.set("3050", "AAB0");
mappingTable.set("3051", "AAB1");
mappingTable.set("3052", "AAB2");
mappingTable.set("3053", "AAB3");
mappingTable.set("3054", "AAB4");
mappingTable.set("3055", "AAB5");
mappingTable.set("3056", "AAB6");
mappingTable.set("3057", "AAB7");
mappingTable.set("3058", "AAB8");
mappingTable.set("3059", "AAB9");
mappingTable.set("305A", "AABA");
mappingTable.set("305B", "AABB");
mappingTable.set("305C", "AABC");
mappingTable.set("305D", "AABD");
mappingTable.set("305E", "AABE");
mappingTable.set("305F", "AABF");
mappingTable.set("3060", "AAC0");
mappingTable.set("3061", "AAC1");
mappingTable.set("3062", "AAC2");
mappingTable.set("3063", "AAC3");
mappingTable.set("3064", "AAC4");
mappingTable.set("3065", "AAC5");
mappingTable.set("3066", "AAC6");
mappingTable.set("3067", "AAC7");
mappingTable.set("3068", "AAC8");
mappingTable.set("3069", "AAC9");
mappingTable.set("306A", "AACA");
mappingTable.set("306B", "AACB");
mappingTable.set("306C", "AACC");
mappingTable.set("306D", "AACD");
mappingTable.set("306E", "AACE");
mappingTable.set("306F", "AACF");
mappingTable.set("3070", "AAD0");
mappingTable.set("3071", "AAD1");
mappingTable.set("3072", "AAD2");
mappingTable.set("3073", "AAD3");
mappingTable.set("3074", "AAD4");
mappingTable.set("3075", "AAD5");
mappingTable.set("3076", "AAD6");
mappingTable.set("3077", "AAD7");
mappingTable.set("3078", "AAD8");
mappingTable.set("3079", "AAD9");
mappingTable.set("307A", "AADA");
mappingTable.set("307B", "AADB");
mappingTable.set("307C", "AADC");
mappingTable.set("307D", "AADD");
mappingTable.set("307E", "AADE");
mappingTable.set("307F", "AADF");
mappingTable.set("3080", "AAE0");
mappingTable.set("3081", "AAE1");
mappingTable.set("3082", "AAE2");
mappingTable.set("3083", "AAE3");
mappingTable.set("3084", "AAE4");
mappingTable.set("3085", "AAE5");
mappingTable.set("3086", "AAE6");
mappingTable.set("3087", "AAE7");
mappingTable.set("3088", "AAE8");
mappingTable.set("3089", "AAE9");
mappingTable.set("308A", "AAEA");
mappingTable.set("308B", "AAEB");
mappingTable.set("308C", "AAEC");
mappingTable.set("308D", "AAED");
mappingTable.set("308E", "AAEE");
mappingTable.set("308F", "AAEF");
mappingTable.set("3090", "AAF0");
mappingTable.set("3091", "AAF1");
mappingTable.set("3092", "AAF2");
mappingTable.set("3093", "AAF3");
mappingTable.set("CC94", "AB41");
mappingTable.set("CC95", "AB42");
mappingTable.set("CC96", "AB43");
mappingTable.set("CC97", "AB44");
mappingTable.set("CC9A", "AB45");
mappingTable.set("CC9B", "AB46");
mappingTable.set("CC9D", "AB47");
mappingTable.set("CC9E", "AB48");
mappingTable.set("CC9F", "AB49");
mappingTable.set("CCA1", "AB4A");
mappingTable.set("CCA2", "AB4B");
mappingTable.set("CCA3", "AB4C");
mappingTable.set("CCA4", "AB4D");
mappingTable.set("CCA5", "AB4E");
mappingTable.set("CCA6", "AB4F");
mappingTable.set("CCA7", "AB50");
mappingTable.set("CCAA", "AB51");
mappingTable.set("CCAE", "AB52");
mappingTable.set("CCAF", "AB53");
mappingTable.set("CCB0", "AB54");
mappingTable.set("CCB1", "AB55");
mappingTable.set("CCB2", "AB56");
mappingTable.set("CCB3", "AB57");
mappingTable.set("CCB6", "AB58");
mappingTable.set("CCB7", "AB59");
mappingTable.set("CCB9", "AB5A");
mappingTable.set("CCBA", "AB61");
mappingTable.set("CCBB", "AB62");
mappingTable.set("CCBD", "AB63");
mappingTable.set("CCBE", "AB64");
mappingTable.set("CCBF", "AB65");
mappingTable.set("CCC0", "AB66");
mappingTable.set("CCC1", "AB67");
mappingTable.set("CCC2", "AB68");
mappingTable.set("CCC3", "AB69");
mappingTable.set("CCC6", "AB6A");
mappingTable.set("CCC8", "AB6B");
mappingTable.set("CCCA", "AB6C");
mappingTable.set("CCCB", "AB6D");
mappingTable.set("CCCC", "AB6E");
mappingTable.set("CCCD", "AB6F");
mappingTable.set("CCCE", "AB70");
mappingTable.set("CCCF", "AB71");
mappingTable.set("CCD1", "AB72");
mappingTable.set("CCD2", "AB73");
mappingTable.set("CCD3", "AB74");
mappingTable.set("CCD5", "AB75");
mappingTable.set("CCD6", "AB76");
mappingTable.set("CCD7", "AB77");
mappingTable.set("CCD8", "AB78");
mappingTable.set("CCD9", "AB79");
mappingTable.set("CCDA", "AB7A");
mappingTable.set("CCDB", "AB81");
mappingTable.set("CCDC", "AB82");
mappingTable.set("CCDD", "AB83");
mappingTable.set("CCDE", "AB84");
mappingTable.set("CCDF", "AB85");
mappingTable.set("CCE0", "AB86");
mappingTable.set("CCE1", "AB87");
mappingTable.set("CCE2", "AB88");
mappingTable.set("CCE3", "AB89");
mappingTable.set("CCE5", "AB8A");
mappingTable.set("CCE6", "AB8B");
mappingTable.set("CCE7", "AB8C");
mappingTable.set("CCE8", "AB8D");
mappingTable.set("CCE9", "AB8E");
mappingTable.set("CCEA", "AB8F");
mappingTable.set("CCEB", "AB90");
mappingTable.set("CCED", "AB91");
mappingTable.set("CCEE", "AB92");
mappingTable.set("CCEF", "AB93");
mappingTable.set("CCF1", "AB94");
mappingTable.set("CCF2", "AB95");
mappingTable.set("CCF3", "AB96");
mappingTable.set("CCF4", "AB97");
mappingTable.set("CCF5", "AB98");
mappingTable.set("CCF6", "AB99");
mappingTable.set("CCF7", "AB9A");
mappingTable.set("CCF8", "AB9B");
mappingTable.set("CCF9", "AB9C");
mappingTable.set("CCFA", "AB9D");
mappingTable.set("CCFB", "AB9E");
mappingTable.set("CCFC", "AB9F");
mappingTable.set("CCFD", "ABA0");
mappingTable.set("30A1", "ABA1");
mappingTable.set("30A2", "ABA2");
mappingTable.set("30A3", "ABA3");
mappingTable.set("30A4", "ABA4");
mappingTable.set("30A5", "ABA5");
mappingTable.set("30A6", "ABA6");
mappingTable.set("30A7", "ABA7");
mappingTable.set("30A8", "ABA8");
mappingTable.set("30A9", "ABA9");
mappingTable.set("30AA", "ABAA");
mappingTable.set("30AB", "ABAB");
mappingTable.set("30AC", "ABAC");
mappingTable.set("30AD", "ABAD");
mappingTable.set("30AE", "ABAE");
mappingTable.set("30AF", "ABAF");
mappingTable.set("30B0", "ABB0");
mappingTable.set("30B1", "ABB1");
mappingTable.set("30B2", "ABB2");
mappingTable.set("30B3", "ABB3");
mappingTable.set("30B4", "ABB4");
mappingTable.set("30B5", "ABB5");
mappingTable.set("30B6", "ABB6");
mappingTable.set("30B7", "ABB7");
mappingTable.set("30B8", "ABB8");
mappingTable.set("30B9", "ABB9");
mappingTable.set("30BA", "ABBA");
mappingTable.set("30BB", "ABBB");
mappingTable.set("30BC", "ABBC");
mappingTable.set("30BD", "ABBD");
mappingTable.set("30BE", "ABBE");
mappingTable.set("30BF", "ABBF");
mappingTable.set("30C0", "ABC0");
mappingTable.set("30C1", "ABC1");
mappingTable.set("30C2", "ABC2");
mappingTable.set("30C3", "ABC3");
mappingTable.set("30C4", "ABC4");
mappingTable.set("30C5", "ABC5");
mappingTable.set("30C6", "ABC6");
mappingTable.set("30C7", "ABC7");
mappingTable.set("30C8", "ABC8");
mappingTable.set("30C9", "ABC9");
mappingTable.set("30CA", "ABCA");
mappingTable.set("30CB", "ABCB");
mappingTable.set("30CC", "ABCC");
mappingTable.set("30CD", "ABCD");
mappingTable.set("30CE", "ABCE");
mappingTable.set("30CF", "ABCF");
mappingTable.set("30D0", "ABD0");
mappingTable.set("30D1", "ABD1");
mappingTable.set("30D2", "ABD2");
mappingTable.set("30D3", "ABD3");
mappingTable.set("30D4", "ABD4");
mappingTable.set("30D5", "ABD5");
mappingTable.set("30D6", "ABD6");
mappingTable.set("30D7", "ABD7");
mappingTable.set("30D8", "ABD8");
mappingTable.set("30D9", "ABD9");
mappingTable.set("30DA", "ABDA");
mappingTable.set("30DB", "ABDB");
mappingTable.set("30DC", "ABDC");
mappingTable.set("30DD", "ABDD");
mappingTable.set("30DE", "ABDE");
mappingTable.set("30DF", "ABDF");
mappingTable.set("30E0", "ABE0");
mappingTable.set("30E1", "ABE1");
mappingTable.set("30E2", "ABE2");
mappingTable.set("30E3", "ABE3");
mappingTable.set("30E4", "ABE4");
mappingTable.set("30E5", "ABE5");
mappingTable.set("30E6", "ABE6");
mappingTable.set("30E7", "ABE7");
mappingTable.set("30E8", "ABE8");
mappingTable.set("30E9", "ABE9");
mappingTable.set("30EA", "ABEA");
mappingTable.set("30EB", "ABEB");
mappingTable.set("30EC", "ABEC");
mappingTable.set("30ED", "ABED");
mappingTable.set("30EE", "ABEE");
mappingTable.set("30EF", "ABEF");
mappingTable.set("30F0", "ABF0");
mappingTable.set("30F1", "ABF1");
mappingTable.set("30F2", "ABF2");
mappingTable.set("30F3", "ABF3");
mappingTable.set("30F4", "ABF4");
mappingTable.set("30F5", "ABF5");
mappingTable.set("30F6", "ABF6");
mappingTable.set("CCFE", "AC41");
mappingTable.set("CCFF", "AC42");
mappingTable.set("CD00", "AC43");
mappingTable.set("CD02", "AC44");
mappingTable.set("CD03", "AC45");
mappingTable.set("CD04", "AC46");
mappingTable.set("CD05", "AC47");
mappingTable.set("CD06", "AC48");
mappingTable.set("CD07", "AC49");
mappingTable.set("CD0A", "AC4A");
mappingTable.set("CD0B", "AC4B");
mappingTable.set("CD0D", "AC4C");
mappingTable.set("CD0E", "AC4D");
mappingTable.set("CD0F", "AC4E");
mappingTable.set("CD11", "AC4F");
mappingTable.set("CD12", "AC50");
mappingTable.set("CD13", "AC51");
mappingTable.set("CD14", "AC52");
mappingTable.set("CD15", "AC53");
mappingTable.set("CD16", "AC54");
mappingTable.set("CD17", "AC55");
mappingTable.set("CD1A", "AC56");
mappingTable.set("CD1C", "AC57");
mappingTable.set("CD1E", "AC58");
mappingTable.set("CD1F", "AC59");
mappingTable.set("CD20", "AC5A");
mappingTable.set("CD21", "AC61");
mappingTable.set("CD22", "AC62");
mappingTable.set("CD23", "AC63");
mappingTable.set("CD25", "AC64");
mappingTable.set("CD26", "AC65");
mappingTable.set("CD27", "AC66");
mappingTable.set("CD29", "AC67");
mappingTable.set("CD2A", "AC68");
mappingTable.set("CD2B", "AC69");
mappingTable.set("CD2D", "AC6A");
mappingTable.set("CD2E", "AC6B");
mappingTable.set("CD2F", "AC6C");
mappingTable.set("CD30", "AC6D");
mappingTable.set("CD31", "AC6E");
mappingTable.set("CD32", "AC6F");
mappingTable.set("CD33", "AC70");
mappingTable.set("CD34", "AC71");
mappingTable.set("CD35", "AC72");
mappingTable.set("CD36", "AC73");
mappingTable.set("CD37", "AC74");
mappingTable.set("CD38", "AC75");
mappingTable.set("CD3A", "AC76");
mappingTable.set("CD3B", "AC77");
mappingTable.set("CD3C", "AC78");
mappingTable.set("CD3D", "AC79");
mappingTable.set("CD3E", "AC7A");
mappingTable.set("CD3F", "AC81");
mappingTable.set("CD40", "AC82");
mappingTable.set("CD41", "AC83");
mappingTable.set("CD42", "AC84");
mappingTable.set("CD43", "AC85");
mappingTable.set("CD44", "AC86");
mappingTable.set("CD45", "AC87");
mappingTable.set("CD46", "AC88");
mappingTable.set("CD47", "AC89");
mappingTable.set("CD48", "AC8A");
mappingTable.set("CD49", "AC8B");
mappingTable.set("CD4A", "AC8C");
mappingTable.set("CD4B", "AC8D");
mappingTable.set("CD4C", "AC8E");
mappingTable.set("CD4D", "AC8F");
mappingTable.set("CD4E", "AC90");
mappingTable.set("CD4F", "AC91");
mappingTable.set("CD50", "AC92");
mappingTable.set("CD51", "AC93");
mappingTable.set("CD52", "AC94");
mappingTable.set("CD53", "AC95");
mappingTable.set("CD54", "AC96");
mappingTable.set("CD55", "AC97");
mappingTable.set("CD56", "AC98");
mappingTable.set("CD57", "AC99");
mappingTable.set("CD58", "AC9A");
mappingTable.set("CD59", "AC9B");
mappingTable.set("CD5A", "AC9C");
mappingTable.set("CD5B", "AC9D");
mappingTable.set("CD5D", "AC9E");
mappingTable.set("CD5E", "AC9F");
mappingTable.set("CD5F", "ACA0");
mappingTable.set("0410", "ACA1");
mappingTable.set("0411", "ACA2");
mappingTable.set("0412", "ACA3");
mappingTable.set("0413", "ACA4");
mappingTable.set("0414", "ACA5");
mappingTable.set("0415", "ACA6");
mappingTable.set("0401", "ACA7");
mappingTable.set("0416", "ACA8");
mappingTable.set("0417", "ACA9");
mappingTable.set("0418", "ACAA");
mappingTable.set("0419", "ACAB");
mappingTable.set("041A", "ACAC");
mappingTable.set("041B", "ACAD");
mappingTable.set("041C", "ACAE");
mappingTable.set("041D", "ACAF");
mappingTable.set("041E", "ACB0");
mappingTable.set("041F", "ACB1");
mappingTable.set("0420", "ACB2");
mappingTable.set("0421", "ACB3");
mappingTable.set("0422", "ACB4");
mappingTable.set("0423", "ACB5");
mappingTable.set("0424", "ACB6");
mappingTable.set("0425", "ACB7");
mappingTable.set("0426", "ACB8");
mappingTable.set("0427", "ACB9");
mappingTable.set("0428", "ACBA");
mappingTable.set("0429", "ACBB");
mappingTable.set("042A", "ACBC");
mappingTable.set("042B", "ACBD");
mappingTable.set("042C", "ACBE");
mappingTable.set("042D", "ACBF");
mappingTable.set("042E", "ACC0");
mappingTable.set("042F", "ACC1");
mappingTable.set("0430", "ACD1");
mappingTable.set("0431", "ACD2");
mappingTable.set("0432", "ACD3");
mappingTable.set("0433", "ACD4");
mappingTable.set("0434", "ACD5");
mappingTable.set("0435", "ACD6");
mappingTable.set("0451", "ACD7");
mappingTable.set("0436", "ACD8");
mappingTable.set("0437", "ACD9");
mappingTable.set("0438", "ACDA");
mappingTable.set("0439", "ACDB");
mappingTable.set("043A", "ACDC");
mappingTable.set("043B", "ACDD");
mappingTable.set("043C", "ACDE");
mappingTable.set("043D", "ACDF");
mappingTable.set("043E", "ACE0");
mappingTable.set("043F", "ACE1");
mappingTable.set("0440", "ACE2");
mappingTable.set("0441", "ACE3");
mappingTable.set("0442", "ACE4");
mappingTable.set("0443", "ACE5");
mappingTable.set("0444", "ACE6");
mappingTable.set("0445", "ACE7");
mappingTable.set("0446", "ACE8");
mappingTable.set("0447", "ACE9");
mappingTable.set("0448", "ACEA");
mappingTable.set("0449", "ACEB");
mappingTable.set("044A", "ACEC");
mappingTable.set("044B", "ACED");
mappingTable.set("044C", "ACEE");
mappingTable.set("044D", "ACEF");
mappingTable.set("044E", "ACF0");
mappingTable.set("044F", "ACF1");
mappingTable.set("CD61", "AD41");
mappingTable.set("CD62", "AD42");
mappingTable.set("CD63", "AD43");
mappingTable.set("CD65", "AD44");
mappingTable.set("CD66", "AD45");
mappingTable.set("CD67", "AD46");
mappingTable.set("CD68", "AD47");
mappingTable.set("CD69", "AD48");
mappingTable.set("CD6A", "AD49");
mappingTable.set("CD6B", "AD4A");
mappingTable.set("CD6E", "AD4B");
mappingTable.set("CD70", "AD4C");
mappingTable.set("CD72", "AD4D");
mappingTable.set("CD73", "AD4E");
mappingTable.set("CD74", "AD4F");
mappingTable.set("CD75", "AD50");
mappingTable.set("CD76", "AD51");
mappingTable.set("CD77", "AD52");
mappingTable.set("CD79", "AD53");
mappingTable.set("CD7A", "AD54");
mappingTable.set("CD7B", "AD55");
mappingTable.set("CD7C", "AD56");
mappingTable.set("CD7D", "AD57");
mappingTable.set("CD7E", "AD58");
mappingTable.set("CD7F", "AD59");
mappingTable.set("CD80", "AD5A");
mappingTable.set("CD81", "AD61");
mappingTable.set("CD82", "AD62");
mappingTable.set("CD83", "AD63");
mappingTable.set("CD84", "AD64");
mappingTable.set("CD85", "AD65");
mappingTable.set("CD86", "AD66");
mappingTable.set("CD87", "AD67");
mappingTable.set("CD89", "AD68");
mappingTable.set("CD8A", "AD69");
mappingTable.set("CD8B", "AD6A");
mappingTable.set("CD8C", "AD6B");
mappingTable.set("CD8D", "AD6C");
mappingTable.set("CD8E", "AD6D");
mappingTable.set("CD8F", "AD6E");
mappingTable.set("CD90", "AD6F");
mappingTable.set("CD91", "AD70");
mappingTable.set("CD92", "AD71");
mappingTable.set("CD93", "AD72");
mappingTable.set("CD96", "AD73");
mappingTable.set("CD97", "AD74");
mappingTable.set("CD99", "AD75");
mappingTable.set("CD9A", "AD76");
mappingTable.set("CD9B", "AD77");
mappingTable.set("CD9D", "AD78");
mappingTable.set("CD9E", "AD79");
mappingTable.set("CD9F", "AD7A");
mappingTable.set("CDA0", "AD81");
mappingTable.set("CDA1", "AD82");
mappingTable.set("CDA2", "AD83");
mappingTable.set("CDA3", "AD84");
mappingTable.set("CDA6", "AD85");
mappingTable.set("CDA8", "AD86");
mappingTable.set("CDAA", "AD87");
mappingTable.set("CDAB", "AD88");
mappingTable.set("CDAC", "AD89");
mappingTable.set("CDAD", "AD8A");
mappingTable.set("CDAE", "AD8B");
mappingTable.set("CDAF", "AD8C");
mappingTable.set("CDB1", "AD8D");
mappingTable.set("CDB2", "AD8E");
mappingTable.set("CDB3", "AD8F");
mappingTable.set("CDB4", "AD90");
mappingTable.set("CDB5", "AD91");
mappingTable.set("CDB6", "AD92");
mappingTable.set("CDB7", "AD93");
mappingTable.set("CDB8", "AD94");
mappingTable.set("CDB9", "AD95");
mappingTable.set("CDBA", "AD96");
mappingTable.set("CDBB", "AD97");
mappingTable.set("CDBC", "AD98");
mappingTable.set("CDBD", "AD99");
mappingTable.set("CDBE", "AD9A");
mappingTable.set("CDBF", "AD9B");
mappingTable.set("CDC0", "AD9C");
mappingTable.set("CDC1", "AD9D");
mappingTable.set("CDC2", "AD9E");
mappingTable.set("CDC3", "AD9F");
mappingTable.set("CDC5", "ADA0");
mappingTable.set("CDC6", "AE41");
mappingTable.set("CDC7", "AE42");
mappingTable.set("CDC8", "AE43");
mappingTable.set("CDC9", "AE44");
mappingTable.set("CDCA", "AE45");
mappingTable.set("CDCB", "AE46");
mappingTable.set("CDCD", "AE47");
mappingTable.set("CDCE", "AE48");
mappingTable.set("CDCF", "AE49");
mappingTable.set("CDD1", "AE4A");
mappingTable.set("CDD2", "AE4B");
mappingTable.set("CDD3", "AE4C");
mappingTable.set("CDD4", "AE4D");
mappingTable.set("CDD5", "AE4E");
mappingTable.set("CDD6", "AE4F");
mappingTable.set("CDD7", "AE50");
mappingTable.set("CDD8", "AE51");
mappingTable.set("CDD9", "AE52");
mappingTable.set("CDDA", "AE53");
mappingTable.set("CDDB", "AE54");
mappingTable.set("CDDC", "AE55");
mappingTable.set("CDDD", "AE56");
mappingTable.set("CDDE", "AE57");
mappingTable.set("CDDF", "AE58");
mappingTable.set("CDE0", "AE59");
mappingTable.set("CDE1", "AE5A");
mappingTable.set("CDE2", "AE61");
mappingTable.set("CDE3", "AE62");
mappingTable.set("CDE4", "AE63");
mappingTable.set("CDE5", "AE64");
mappingTable.set("CDE6", "AE65");
mappingTable.set("CDE7", "AE66");
mappingTable.set("CDE9", "AE67");
mappingTable.set("CDEA", "AE68");
mappingTable.set("CDEB", "AE69");
mappingTable.set("CDED", "AE6A");
mappingTable.set("CDEE", "AE6B");
mappingTable.set("CDEF", "AE6C");
mappingTable.set("CDF1", "AE6D");
mappingTable.set("CDF2", "AE6E");
mappingTable.set("CDF3", "AE6F");
mappingTable.set("CDF4", "AE70");
mappingTable.set("CDF5", "AE71");
mappingTable.set("CDF6", "AE72");
mappingTable.set("CDF7", "AE73");
mappingTable.set("CDFA", "AE74");
mappingTable.set("CDFC", "AE75");
mappingTable.set("CDFE", "AE76");
mappingTable.set("CDFF", "AE77");
mappingTable.set("CE00", "AE78");
mappingTable.set("CE01", "AE79");
mappingTable.set("CE02", "AE7A");
mappingTable.set("CE03", "AE81");
mappingTable.set("CE05", "AE82");
mappingTable.set("CE06", "AE83");
mappingTable.set("CE07", "AE84");
mappingTable.set("CE09", "AE85");
mappingTable.set("CE0A", "AE86");
mappingTable.set("CE0B", "AE87");
mappingTable.set("CE0D", "AE88");
mappingTable.set("CE0E", "AE89");
mappingTable.set("CE0F", "AE8A");
mappingTable.set("CE10", "AE8B");
mappingTable.set("CE11", "AE8C");
mappingTable.set("CE12", "AE8D");
mappingTable.set("CE13", "AE8E");
mappingTable.set("CE15", "AE8F");
mappingTable.set("CE16", "AE90");
mappingTable.set("CE17", "AE91");
mappingTable.set("CE18", "AE92");
mappingTable.set("CE1A", "AE93");
mappingTable.set("CE1B", "AE94");
mappingTable.set("CE1C", "AE95");
mappingTable.set("CE1D", "AE96");
mappingTable.set("CE1E", "AE97");
mappingTable.set("CE1F", "AE98");
mappingTable.set("CE22", "AE99");
mappingTable.set("CE23", "AE9A");
mappingTable.set("CE25", "AE9B");
mappingTable.set("CE26", "AE9C");
mappingTable.set("CE27", "AE9D");
mappingTable.set("CE29", "AE9E");
mappingTable.set("CE2A", "AE9F");
mappingTable.set("CE2B", "AEA0");
mappingTable.set("CE2C", "AF41");
mappingTable.set("CE2D", "AF42");
mappingTable.set("CE2E", "AF43");
mappingTable.set("CE2F", "AF44");
mappingTable.set("CE32", "AF45");
mappingTable.set("CE34", "AF46");
mappingTable.set("CE36", "AF47");
mappingTable.set("CE37", "AF48");
mappingTable.set("CE38", "AF49");
mappingTable.set("CE39", "AF4A");
mappingTable.set("CE3A", "AF4B");
mappingTable.set("CE3B", "AF4C");
mappingTable.set("CE3C", "AF4D");
mappingTable.set("CE3D", "AF4E");
mappingTable.set("CE3E", "AF4F");
mappingTable.set("CE3F", "AF50");
mappingTable.set("CE40", "AF51");
mappingTable.set("CE41", "AF52");
mappingTable.set("CE42", "AF53");
mappingTable.set("CE43", "AF54");
mappingTable.set("CE44", "AF55");
mappingTable.set("CE45", "AF56");
mappingTable.set("CE46", "AF57");
mappingTable.set("CE47", "AF58");
mappingTable.set("CE48", "AF59");
mappingTable.set("CE49", "AF5A");
mappingTable.set("CE4A", "AF61");
mappingTable.set("CE4B", "AF62");
mappingTable.set("CE4C", "AF63");
mappingTable.set("CE4D", "AF64");
mappingTable.set("CE4E", "AF65");
mappingTable.set("CE4F", "AF66");
mappingTable.set("CE50", "AF67");
mappingTable.set("CE51", "AF68");
mappingTable.set("CE52", "AF69");
mappingTable.set("CE53", "AF6A");
mappingTable.set("CE54", "AF6B");
mappingTable.set("CE55", "AF6C");
mappingTable.set("CE56", "AF6D");
mappingTable.set("CE57", "AF6E");
mappingTable.set("CE5A", "AF6F");
mappingTable.set("CE5B", "AF70");
mappingTable.set("CE5D", "AF71");
mappingTable.set("CE5E", "AF72");
mappingTable.set("CE62", "AF73");
mappingTable.set("CE63", "AF74");
mappingTable.set("CE64", "AF75");
mappingTable.set("CE65", "AF76");
mappingTable.set("CE66", "AF77");
mappingTable.set("CE67", "AF78");
mappingTable.set("CE6A", "AF79");
mappingTable.set("CE6C", "AF7A");
mappingTable.set("CE6E", "AF81");
mappingTable.set("CE6F", "AF82");
mappingTable.set("CE70", "AF83");
mappingTable.set("CE71", "AF84");
mappingTable.set("CE72", "AF85");
mappingTable.set("CE73", "AF86");
mappingTable.set("CE76", "AF87");
mappingTable.set("CE77", "AF88");
mappingTable.set("CE79", "AF89");
mappingTable.set("CE7A", "AF8A");
mappingTable.set("CE7B", "AF8B");
mappingTable.set("CE7D", "AF8C");
mappingTable.set("CE7E", "AF8D");
mappingTable.set("CE7F", "AF8E");
mappingTable.set("CE80", "AF8F");
mappingTable.set("CE81", "AF90");
mappingTable.set("CE82", "AF91");
mappingTable.set("CE83", "AF92");
mappingTable.set("CE86", "AF93");
mappingTable.set("CE88", "AF94");
mappingTable.set("CE8A", "AF95");
mappingTable.set("CE8B", "AF96");
mappingTable.set("CE8C", "AF97");
mappingTable.set("CE8D", "AF98");
mappingTable.set("CE8E", "AF99");
mappingTable.set("CE8F", "AF9A");
mappingTable.set("CE92", "AF9B");
mappingTable.set("CE93", "AF9C");
mappingTable.set("CE95", "AF9D");
mappingTable.set("CE96", "AF9E");
mappingTable.set("CE97", "AF9F");
mappingTable.set("CE99", "AFA0");
mappingTable.set("CE9A", "B041");
mappingTable.set("CE9B", "B042");
mappingTable.set("CE9C", "B043");
mappingTable.set("CE9D", "B044");
mappingTable.set("CE9E", "B045");
mappingTable.set("CE9F", "B046");
mappingTable.set("CEA2", "B047");
mappingTable.set("CEA6", "B048");
mappingTable.set("CEA7", "B049");
mappingTable.set("CEA8", "B04A");
mappingTable.set("CEA9", "B04B");
mappingTable.set("CEAA", "B04C");
mappingTable.set("CEAB", "B04D");
mappingTable.set("CEAE", "B04E");
mappingTable.set("CEAF", "B04F");
mappingTable.set("CEB0", "B050");
mappingTable.set("CEB1", "B051");
mappingTable.set("CEB2", "B052");
mappingTable.set("CEB3", "B053");
mappingTable.set("CEB4", "B054");
mappingTable.set("CEB5", "B055");
mappingTable.set("CEB6", "B056");
mappingTable.set("CEB7", "B057");
mappingTable.set("CEB8", "B058");
mappingTable.set("CEB9", "B059");
mappingTable.set("CEBA", "B05A");
mappingTable.set("CEBB", "B061");
mappingTable.set("CEBC", "B062");
mappingTable.set("CEBD", "B063");
mappingTable.set("CEBE", "B064");
mappingTable.set("CEBF", "B065");
mappingTable.set("CEC0", "B066");
mappingTable.set("CEC2", "B067");
mappingTable.set("CEC3", "B068");
mappingTable.set("CEC4", "B069");
mappingTable.set("CEC5", "B06A");
mappingTable.set("CEC6", "B06B");
mappingTable.set("CEC7", "B06C");
mappingTable.set("CEC8", "B06D");
mappingTable.set("CEC9", "B06E");
mappingTable.set("CECA", "B06F");
mappingTable.set("CECB", "B070");
mappingTable.set("CECC", "B071");
mappingTable.set("CECD", "B072");
mappingTable.set("CECE", "B073");
mappingTable.set("CECF", "B074");
mappingTable.set("CED0", "B075");
mappingTable.set("CED1", "B076");
mappingTable.set("CED2", "B077");
mappingTable.set("CED3", "B078");
mappingTable.set("CED4", "B079");
mappingTable.set("CED5", "B07A");
mappingTable.set("CED6", "B081");
mappingTable.set("CED7", "B082");
mappingTable.set("CED8", "B083");
mappingTable.set("CED9", "B084");
mappingTable.set("CEDA", "B085");
mappingTable.set("CEDB", "B086");
mappingTable.set("CEDC", "B087");
mappingTable.set("CEDD", "B088");
mappingTable.set("CEDE", "B089");
mappingTable.set("CEDF", "B08A");
mappingTable.set("CEE0", "B08B");
mappingTable.set("CEE1", "B08C");
mappingTable.set("CEE2", "B08D");
mappingTable.set("CEE3", "B08E");
mappingTable.set("CEE6", "B08F");
mappingTable.set("CEE7", "B090");
mappingTable.set("CEE9", "B091");
mappingTable.set("CEEA", "B092");
mappingTable.set("CEED", "B093");
mappingTable.set("CEEE", "B094");
mappingTable.set("CEEF", "B095");
mappingTable.set("CEF0", "B096");
mappingTable.set("CEF1", "B097");
mappingTable.set("CEF2", "B098");
mappingTable.set("CEF3", "B099");
mappingTable.set("CEF6", "B09A");
mappingTable.set("CEFA", "B09B");
mappingTable.set("CEFB", "B09C");
mappingTable.set("CEFC", "B09D");
mappingTable.set("CEFD", "B09E");
mappingTable.set("CEFE", "B09F");
mappingTable.set("CEFF", "B0A0");
mappingTable.set("AC00", "B0A1");
mappingTable.set("AC01", "B0A2");
mappingTable.set("AC04", "B0A3");
mappingTable.set("AC07", "B0A4");
mappingTable.set("AC08", "B0A5");
mappingTable.set("AC09", "B0A6");
mappingTable.set("AC0A", "B0A7");
mappingTable.set("AC10", "B0A8");
mappingTable.set("AC11", "B0A9");
mappingTable.set("AC12", "B0AA");
mappingTable.set("AC13", "B0AB");
mappingTable.set("AC14", "B0AC");
mappingTable.set("AC15", "B0AD");
mappingTable.set("AC16", "B0AE");
mappingTable.set("AC17", "B0AF");
mappingTable.set("AC19", "B0B0");
mappingTable.set("AC1A", "B0B1");
mappingTable.set("AC1B", "B0B2");
mappingTable.set("AC1C", "B0B3");
mappingTable.set("AC1D", "B0B4");
mappingTable.set("AC20", "B0B5");
mappingTable.set("AC24", "B0B6");
mappingTable.set("AC2C", "B0B7");
mappingTable.set("AC2D", "B0B8");
mappingTable.set("AC2F", "B0B9");
mappingTable.set("AC30", "B0BA");
mappingTable.set("AC31", "B0BB");
mappingTable.set("AC38", "B0BC");
mappingTable.set("AC39", "B0BD");
mappingTable.set("AC3C", "B0BE");
mappingTable.set("AC40", "B0BF");
mappingTable.set("AC4B", "B0C0");
mappingTable.set("AC4D", "B0C1");
mappingTable.set("AC54", "B0C2");
mappingTable.set("AC58", "B0C3");
mappingTable.set("AC5C", "B0C4");
mappingTable.set("AC70", "B0C5");
mappingTable.set("AC71", "B0C6");
mappingTable.set("AC74", "B0C7");
mappingTable.set("AC77", "B0C8");
mappingTable.set("AC78", "B0C9");
mappingTable.set("AC7A", "B0CA");
mappingTable.set("AC80", "B0CB");
mappingTable.set("AC81", "B0CC");
mappingTable.set("AC83", "B0CD");
mappingTable.set("AC84", "B0CE");
mappingTable.set("AC85", "B0CF");
mappingTable.set("AC86", "B0D0");
mappingTable.set("AC89", "B0D1");
mappingTable.set("AC8A", "B0D2");
mappingTable.set("AC8B", "B0D3");
mappingTable.set("AC8C", "B0D4");
mappingTable.set("AC90", "B0D5");
mappingTable.set("AC94", "B0D6");
mappingTable.set("AC9C", "B0D7");
mappingTable.set("AC9D", "B0D8");
mappingTable.set("AC9F", "B0D9");
mappingTable.set("ACA0", "B0DA");
mappingTable.set("ACA1", "B0DB");
mappingTable.set("ACA8", "B0DC");
mappingTable.set("ACA9", "B0DD");
mappingTable.set("ACAA", "B0DE");
mappingTable.set("ACAC", "B0DF");
mappingTable.set("ACAF", "B0E0");
mappingTable.set("ACB0", "B0E1");
mappingTable.set("ACB8", "B0E2");
mappingTable.set("ACB9", "B0E3");
mappingTable.set("ACBB", "B0E4");
mappingTable.set("ACBC", "B0E5");
mappingTable.set("ACBD", "B0E6");
mappingTable.set("ACC1", "B0E7");
mappingTable.set("ACC4", "B0E8");
mappingTable.set("ACC8", "B0E9");
mappingTable.set("ACCC", "B0EA");
mappingTable.set("ACD5", "B0EB");
mappingTable.set("ACD7", "B0EC");
mappingTable.set("ACE0", "B0ED");
mappingTable.set("ACE1", "B0EE");
mappingTable.set("ACE4", "B0EF");
mappingTable.set("ACE7", "B0F0");
mappingTable.set("ACE8", "B0F1");
mappingTable.set("ACEA", "B0F2");
mappingTable.set("ACEC", "B0F3");
mappingTable.set("ACEF", "B0F4");
mappingTable.set("ACF0", "B0F5");
mappingTable.set("ACF1", "B0F6");
mappingTable.set("ACF3", "B0F7");
mappingTable.set("ACF5", "B0F8");
mappingTable.set("ACF6", "B0F9");
mappingTable.set("ACFC", "B0FA");
mappingTable.set("ACFD", "B0FB");
mappingTable.set("AD00", "B0FC");
mappingTable.set("AD04", "B0FD");
mappingTable.set("AD06", "B0FE");
mappingTable.set("CF02", "B141");
mappingTable.set("CF03", "B142");
mappingTable.set("CF05", "B143");
mappingTable.set("CF06", "B144");
mappingTable.set("CF07", "B145");
mappingTable.set("CF09", "B146");
mappingTable.set("CF0A", "B147");
mappingTable.set("CF0B", "B148");
mappingTable.set("CF0C", "B149");
mappingTable.set("CF0D", "B14A");
mappingTable.set("CF0E", "B14B");
mappingTable.set("CF0F", "B14C");
mappingTable.set("CF12", "B14D");
mappingTable.set("CF14", "B14E");
mappingTable.set("CF16", "B14F");
mappingTable.set("CF17", "B150");
mappingTable.set("CF18", "B151");
mappingTable.set("CF19", "B152");
mappingTable.set("CF1A", "B153");
mappingTable.set("CF1B", "B154");
mappingTable.set("CF1D", "B155");
mappingTable.set("CF1E", "B156");
mappingTable.set("CF1F", "B157");
mappingTable.set("CF21", "B158");
mappingTable.set("CF22", "B159");
mappingTable.set("CF23", "B15A");
mappingTable.set("CF25", "B161");
mappingTable.set("CF26", "B162");
mappingTable.set("CF27", "B163");
mappingTable.set("CF28", "B164");
mappingTable.set("CF29", "B165");
mappingTable.set("CF2A", "B166");
mappingTable.set("CF2B", "B167");
mappingTable.set("CF2E", "B168");
mappingTable.set("CF32", "B169");
mappingTable.set("CF33", "B16A");
mappingTable.set("CF34", "B16B");
mappingTable.set("CF35", "B16C");
mappingTable.set("CF36", "B16D");
mappingTable.set("CF37", "B16E");
mappingTable.set("CF39", "B16F");
mappingTable.set("CF3A", "B170");
mappingTable.set("CF3B", "B171");
mappingTable.set("CF3C", "B172");
mappingTable.set("CF3D", "B173");
mappingTable.set("CF3E", "B174");
mappingTable.set("CF3F", "B175");
mappingTable.set("CF40", "B176");
mappingTable.set("CF41", "B177");
mappingTable.set("CF42", "B178");
mappingTable.set("CF43", "B179");
mappingTable.set("CF44", "B17A");
mappingTable.set("CF45", "B181");
mappingTable.set("CF46", "B182");
mappingTable.set("CF47", "B183");
mappingTable.set("CF48", "B184");
mappingTable.set("CF49", "B185");
mappingTable.set("CF4A", "B186");
mappingTable.set("CF4B", "B187");
mappingTable.set("CF4C", "B188");
mappingTable.set("CF4D", "B189");
mappingTable.set("CF4E", "B18A");
mappingTable.set("CF4F", "B18B");
mappingTable.set("CF50", "B18C");
mappingTable.set("CF51", "B18D");
mappingTable.set("CF52", "B18E");
mappingTable.set("CF53", "B18F");
mappingTable.set("CF56", "B190");
mappingTable.set("CF57", "B191");
mappingTable.set("CF59", "B192");
mappingTable.set("CF5A", "B193");
mappingTable.set("CF5B", "B194");
mappingTable.set("CF5D", "B195");
mappingTable.set("CF5E", "B196");
mappingTable.set("CF5F", "B197");
mappingTable.set("CF60", "B198");
mappingTable.set("CF61", "B199");
mappingTable.set("CF62", "B19A");
mappingTable.set("CF63", "B19B");
mappingTable.set("CF66", "B19C");
mappingTable.set("CF68", "B19D");
mappingTable.set("CF6A", "B19E");
mappingTable.set("CF6B", "B19F");
mappingTable.set("CF6C", "B1A0");
mappingTable.set("AD0C", "B1A1");
mappingTable.set("AD0D", "B1A2");
mappingTable.set("AD0F", "B1A3");
mappingTable.set("AD11", "B1A4");
mappingTable.set("AD18", "B1A5");
mappingTable.set("AD1C", "B1A6");
mappingTable.set("AD20", "B1A7");
mappingTable.set("AD29", "B1A8");
mappingTable.set("AD2C", "B1A9");
mappingTable.set("AD2D", "B1AA");
mappingTable.set("AD34", "B1AB");
mappingTable.set("AD35", "B1AC");
mappingTable.set("AD38", "B1AD");
mappingTable.set("AD3C", "B1AE");
mappingTable.set("AD44", "B1AF");
mappingTable.set("AD45", "B1B0");
mappingTable.set("AD47", "B1B1");
mappingTable.set("AD49", "B1B2");
mappingTable.set("AD50", "B1B3");
mappingTable.set("AD54", "B1B4");
mappingTable.set("AD58", "B1B5");
mappingTable.set("AD61", "B1B6");
mappingTable.set("AD63", "B1B7");
mappingTable.set("AD6C", "B1B8");
mappingTable.set("AD6D", "B1B9");
mappingTable.set("AD70", "B1BA");
mappingTable.set("AD73", "B1BB");
mappingTable.set("AD74", "B1BC");
mappingTable.set("AD75", "B1BD");
mappingTable.set("AD76", "B1BE");
mappingTable.set("AD7B", "B1BF");
mappingTable.set("AD7C", "B1C0");
mappingTable.set("AD7D", "B1C1");
mappingTable.set("AD7F", "B1C2");
mappingTable.set("AD81", "B1C3");
mappingTable.set("AD82", "B1C4");
mappingTable.set("AD88", "B1C5");
mappingTable.set("AD89", "B1C6");
mappingTable.set("AD8C", "B1C7");
mappingTable.set("AD90", "B1C8");
mappingTable.set("AD9C", "B1C9");
mappingTable.set("AD9D", "B1CA");
mappingTable.set("ADA4", "B1CB");
mappingTable.set("ADB7", "B1CC");
mappingTable.set("ADC0", "B1CD");
mappingTable.set("ADC1", "B1CE");
mappingTable.set("ADC4", "B1CF");
mappingTable.set("ADC8", "B1D0");
mappingTable.set("ADD0", "B1D1");
mappingTable.set("ADD1", "B1D2");
mappingTable.set("ADD3", "B1D3");
mappingTable.set("ADDC", "B1D4");
mappingTable.set("ADE0", "B1D5");
mappingTable.set("ADE4", "B1D6");
mappingTable.set("ADF8", "B1D7");
mappingTable.set("ADF9", "B1D8");
mappingTable.set("ADFC", "B1D9");
mappingTable.set("ADFF", "B1DA");
mappingTable.set("AE00", "B1DB");
mappingTable.set("AE01", "B1DC");
mappingTable.set("AE08", "B1DD");
mappingTable.set("AE09", "B1DE");
mappingTable.set("AE0B", "B1DF");
mappingTable.set("AE0D", "B1E0");
mappingTable.set("AE14", "B1E1");
mappingTable.set("AE30", "B1E2");
mappingTable.set("AE31", "B1E3");
mappingTable.set("AE34", "B1E4");
mappingTable.set("AE37", "B1E5");
mappingTable.set("AE38", "B1E6");
mappingTable.set("AE3A", "B1E7");
mappingTable.set("AE40", "B1E8");
mappingTable.set("AE41", "B1E9");
mappingTable.set("AE43", "B1EA");
mappingTable.set("AE45", "B1EB");
mappingTable.set("AE46", "B1EC");
mappingTable.set("AE4A", "B1ED");
mappingTable.set("AE4C", "B1EE");
mappingTable.set("AE4D", "B1EF");
mappingTable.set("AE4E", "B1F0");
mappingTable.set("AE50", "B1F1");
mappingTable.set("AE54", "B1F2");
mappingTable.set("AE56", "B1F3");
mappingTable.set("AE5C", "B1F4");
mappingTable.set("AE5D", "B1F5");
mappingTable.set("AE5F", "B1F6");
mappingTable.set("AE60", "B1F7");
mappingTable.set("AE61", "B1F8");
mappingTable.set("AE65", "B1F9");
mappingTable.set("AE68", "B1FA");
mappingTable.set("AE69", "B1FB");
mappingTable.set("AE6C", "B1FC");
mappingTable.set("AE70", "B1FD");
mappingTable.set("AE78", "B1FE");
mappingTable.set("CF6D", "B241");
mappingTable.set("CF6E", "B242");
mappingTable.set("CF6F", "B243");
mappingTable.set("CF72", "B244");
mappingTable.set("CF73", "B245");
mappingTable.set("CF75", "B246");
mappingTable.set("CF76", "B247");
mappingTable.set("CF77", "B248");
mappingTable.set("CF79", "B249");
mappingTable.set("CF7A", "B24A");
mappingTable.set("CF7B", "B24B");
mappingTable.set("CF7C", "B24C");
mappingTable.set("CF7D", "B24D");
mappingTable.set("CF7E", "B24E");
mappingTable.set("CF7F", "B24F");
mappingTable.set("CF81", "B250");
mappingTable.set("CF82", "B251");
mappingTable.set("CF83", "B252");
mappingTable.set("CF84", "B253");
mappingTable.set("CF86", "B254");
mappingTable.set("CF87", "B255");
mappingTable.set("CF88", "B256");
mappingTable.set("CF89", "B257");
mappingTable.set("CF8A", "B258");
mappingTable.set("CF8B", "B259");
mappingTable.set("CF8D", "B25A");
mappingTable.set("CF8E", "B261");
mappingTable.set("CF8F", "B262");
mappingTable.set("CF90", "B263");
mappingTable.set("CF91", "B264");
mappingTable.set("CF92", "B265");
mappingTable.set("CF93", "B266");
mappingTable.set("CF94", "B267");
mappingTable.set("CF95", "B268");
mappingTable.set("CF96", "B269");
mappingTable.set("CF97", "B26A");
mappingTable.set("CF98", "B26B");
mappingTable.set("CF99", "B26C");
mappingTable.set("CF9A", "B26D");
mappingTable.set("CF9B", "B26E");
mappingTable.set("CF9C", "B26F");
mappingTable.set("CF9D", "B270");
mappingTable.set("CF9E", "B271");
mappingTable.set("CF9F", "B272");
mappingTable.set("CFA0", "B273");
mappingTable.set("CFA2", "B274");
mappingTable.set("CFA3", "B275");
mappingTable.set("CFA4", "B276");
mappingTable.set("CFA5", "B277");
mappingTable.set("CFA6", "B278");
mappingTable.set("CFA7", "B279");
mappingTable.set("CFA9", "B27A");
mappingTable.set("CFAA", "B281");
mappingTable.set("CFAB", "B282");
mappingTable.set("CFAC", "B283");
mappingTable.set("CFAD", "B284");
mappingTable.set("CFAE", "B285");
mappingTable.set("CFAF", "B286");
mappingTable.set("CFB1", "B287");
mappingTable.set("CFB2", "B288");
mappingTable.set("CFB3", "B289");
mappingTable.set("CFB4", "B28A");
mappingTable.set("CFB5", "B28B");
mappingTable.set("CFB6", "B28C");
mappingTable.set("CFB7", "B28D");
mappingTable.set("CFB8", "B28E");
mappingTable.set("CFB9", "B28F");
mappingTable.set("CFBA", "B290");
mappingTable.set("CFBB", "B291");
mappingTable.set("CFBC", "B292");
mappingTable.set("CFBD", "B293");
mappingTable.set("CFBE", "B294");
mappingTable.set("CFBF", "B295");
mappingTable.set("CFC0", "B296");
mappingTable.set("CFC1", "B297");
mappingTable.set("CFC2", "B298");
mappingTable.set("CFC3", "B299");
mappingTable.set("CFC5", "B29A");
mappingTable.set("CFC6", "B29B");
mappingTable.set("CFC7", "B29C");
mappingTable.set("CFC8", "B29D");
mappingTable.set("CFC9", "B29E");
mappingTable.set("CFCA", "B29F");
mappingTable.set("CFCB", "B2A0");
mappingTable.set("AE79", "B2A1");
mappingTable.set("AE7B", "B2A2");
mappingTable.set("AE7C", "B2A3");
mappingTable.set("AE7D", "B2A4");
mappingTable.set("AE84", "B2A5");
mappingTable.set("AE85", "B2A6");
mappingTable.set("AE8C", "B2A7");
mappingTable.set("AEBC", "B2A8");
mappingTable.set("AEBD", "B2A9");
mappingTable.set("AEBE", "B2AA");
mappingTable.set("AEC0", "B2AB");
mappingTable.set("AEC4", "B2AC");
mappingTable.set("AECC", "B2AD");
mappingTable.set("AECD", "B2AE");
mappingTable.set("AECF", "B2AF");
mappingTable.set("AED0", "B2B0");
mappingTable.set("AED1", "B2B1");
mappingTable.set("AED8", "B2B2");
mappingTable.set("AED9", "B2B3");
mappingTable.set("AEDC", "B2B4");
mappingTable.set("AEE8", "B2B5");
mappingTable.set("AEEB", "B2B6");
mappingTable.set("AEED", "B2B7");
mappingTable.set("AEF4", "B2B8");
mappingTable.set("AEF8", "B2B9");
mappingTable.set("AEFC", "B2BA");
mappingTable.set("AF07", "B2BB");
mappingTable.set("AF08", "B2BC");
mappingTable.set("AF0D", "B2BD");
mappingTable.set("AF10", "B2BE");
mappingTable.set("AF2C", "B2BF");
mappingTable.set("AF2D", "B2C0");
mappingTable.set("AF30", "B2C1");
mappingTable.set("AF32", "B2C2");
mappingTable.set("AF34", "B2C3");
mappingTable.set("AF3C", "B2C4");
mappingTable.set("AF3D", "B2C5");
mappingTable.set("AF3F", "B2C6");
mappingTable.set("AF41", "B2C7");
mappingTable.set("AF42", "B2C8");
mappingTable.set("AF43", "B2C9");
mappingTable.set("AF48", "B2CA");
mappingTable.set("AF49", "B2CB");
mappingTable.set("AF50", "B2CC");
mappingTable.set("AF5C", "B2CD");
mappingTable.set("AF5D", "B2CE");
mappingTable.set("AF64", "B2CF");
mappingTable.set("AF65", "B2D0");
mappingTable.set("AF79", "B2D1");
mappingTable.set("AF80", "B2D2");
mappingTable.set("AF84", "B2D3");
mappingTable.set("AF88", "B2D4");
mappingTable.set("AF90", "B2D5");
mappingTable.set("AF91", "B2D6");
mappingTable.set("AF95", "B2D7");
mappingTable.set("AF9C", "B2D8");
mappingTable.set("AFB8", "B2D9");
mappingTable.set("AFB9", "B2DA");
mappingTable.set("AFBC", "B2DB");
mappingTable.set("AFC0", "B2DC");
mappingTable.set("AFC7", "B2DD");
mappingTable.set("AFC8", "B2DE");
mappingTable.set("AFC9", "B2DF");
mappingTable.set("AFCB", "B2E0");
mappingTable.set("AFCD", "B2E1");
mappingTable.set("AFCE", "B2E2");
mappingTable.set("AFD4", "B2E3");
mappingTable.set("AFDC", "B2E4");
mappingTable.set("AFE8", "B2E5");
mappingTable.set("AFE9", "B2E6");
mappingTable.set("AFF0", "B2E7");
mappingTable.set("AFF1", "B2E8");
mappingTable.set("AFF4", "B2E9");
mappingTable.set("AFF8", "B2EA");
mappingTable.set("B000", "B2EB");
mappingTable.set("B001", "B2EC");
mappingTable.set("B004", "B2ED");
mappingTable.set("B00C", "B2EE");
mappingTable.set("B010", "B2EF");
mappingTable.set("B014", "B2F0");
mappingTable.set("B01C", "B2F1");
mappingTable.set("B01D", "B2F2");
mappingTable.set("B028", "B2F3");
mappingTable.set("B044", "B2F4");
mappingTable.set("B045", "B2F5");
mappingTable.set("B048", "B2F6");
mappingTable.set("B04A", "B2F7");
mappingTable.set("B04C", "B2F8");
mappingTable.set("B04E", "B2F9");
mappingTable.set("B053", "B2FA");
mappingTable.set("B054", "B2FB");
mappingTable.set("B055", "B2FC");
mappingTable.set("B057", "B2FD");
mappingTable.set("B059", "B2FE");
mappingTable.set("CFCC", "B341");
mappingTable.set("CFCD", "B342");
mappingTable.set("CFCE", "B343");
mappingTable.set("CFCF", "B344");
mappingTable.set("CFD0", "B345");
mappingTable.set("CFD1", "B346");
mappingTable.set("CFD2", "B347");
mappingTable.set("CFD3", "B348");
mappingTable.set("CFD4", "B349");
mappingTable.set("CFD5", "B34A");
mappingTable.set("CFD6", "B34B");
mappingTable.set("CFD7", "B34C");
mappingTable.set("CFD8", "B34D");
mappingTable.set("CFD9", "B34E");
mappingTable.set("CFDA", "B34F");
mappingTable.set("CFDB", "B350");
mappingTable.set("CFDC", "B351");
mappingTable.set("CFDD", "B352");
mappingTable.set("CFDE", "B353");
mappingTable.set("CFDF", "B354");
mappingTable.set("CFE2", "B355");
mappingTable.set("CFE3", "B356");
mappingTable.set("CFE5", "B357");
mappingTable.set("CFE6", "B358");
mappingTable.set("CFE7", "B359");
mappingTable.set("CFE9", "B35A");
mappingTable.set("CFEA", "B361");
mappingTable.set("CFEB", "B362");
mappingTable.set("CFEC", "B363");
mappingTable.set("CFED", "B364");
mappingTable.set("CFEE", "B365");
mappingTable.set("CFEF", "B366");
mappingTable.set("CFF2", "B367");
mappingTable.set("CFF4", "B368");
mappingTable.set("CFF6", "B369");
mappingTable.set("CFF7", "B36A");
mappingTable.set("CFF8", "B36B");
mappingTable.set("CFF9", "B36C");
mappingTable.set("CFFA", "B36D");
mappingTable.set("CFFB", "B36E");
mappingTable.set("CFFD", "B36F");
mappingTable.set("CFFE", "B370");
mappingTable.set("CFFF", "B371");
mappingTable.set("D001", "B372");
mappingTable.set("D002", "B373");
mappingTable.set("D003", "B374");
mappingTable.set("D005", "B375");
mappingTable.set("D006", "B376");
mappingTable.set("D007", "B377");
mappingTable.set("D008", "B378");
mappingTable.set("D009", "B379");
mappingTable.set("D00A", "B37A");
mappingTable.set("D00B", "B381");
mappingTable.set("D00C", "B382");
mappingTable.set("D00D", "B383");
mappingTable.set("D00E", "B384");
mappingTable.set("D00F", "B385");
mappingTable.set("D010", "B386");
mappingTable.set("D012", "B387");
mappingTable.set("D013", "B388");
mappingTable.set("D014", "B389");
mappingTable.set("D015", "B38A");
mappingTable.set("D016", "B38B");
mappingTable.set("D017", "B38C");
mappingTable.set("D019", "B38D");
mappingTable.set("D01A", "B38E");
mappingTable.set("D01B", "B38F");
mappingTable.set("D01C", "B390");
mappingTable.set("D01D", "B391");
mappingTable.set("D01E", "B392");
mappingTable.set("D01F", "B393");
mappingTable.set("D020", "B394");
mappingTable.set("D021", "B395");
mappingTable.set("D022", "B396");
mappingTable.set("D023", "B397");
mappingTable.set("D024", "B398");
mappingTable.set("D025", "B399");
mappingTable.set("D026", "B39A");
mappingTable.set("D027", "B39B");
mappingTable.set("D028", "B39C");
mappingTable.set("D029", "B39D");
mappingTable.set("D02A", "B39E");
mappingTable.set("D02B", "B39F");
mappingTable.set("D02C", "B3A0");
mappingTable.set("B05D", "B3A1");
mappingTable.set("B07C", "B3A2");
mappingTable.set("B07D", "B3A3");
mappingTable.set("B080", "B3A4");
mappingTable.set("B084", "B3A5");
mappingTable.set("B08C", "B3A6");
mappingTable.set("B08D", "B3A7");
mappingTable.set("B08F", "B3A8");
mappingTable.set("B091", "B3A9");
mappingTable.set("B098", "B3AA");
mappingTable.set("B099", "B3AB");
mappingTable.set("B09A", "B3AC");
mappingTable.set("B09C", "B3AD");
mappingTable.set("B09F", "B3AE");
mappingTable.set("B0A0", "B3AF");
mappingTable.set("B0A1", "B3B0");
mappingTable.set("B0A2", "B3B1");
mappingTable.set("B0A8", "B3B2");
mappingTable.set("B0A9", "B3B3");
mappingTable.set("B0AB", "B3B4");
mappingTable.set("B0AC", "B3B5");
mappingTable.set("B0AD", "B3B6");
mappingTable.set("B0AE", "B3B7");
mappingTable.set("B0AF", "B3B8");
mappingTable.set("B0B1", "B3B9");
mappingTable.set("B0B3", "B3BA");
mappingTable.set("B0B4", "B3BB");
mappingTable.set("B0B5", "B3BC");
mappingTable.set("B0B8", "B3BD");
mappingTable.set("B0BC", "B3BE");
mappingTable.set("B0C4", "B3BF");
mappingTable.set("B0C5", "B3C0");
mappingTable.set("B0C7", "B3C1");
mappingTable.set("B0C8", "B3C2");
mappingTable.set("B0C9", "B3C3");
mappingTable.set("B0D0", "B3C4");
mappingTable.set("B0D1", "B3C5");
mappingTable.set("B0D4", "B3C6");
mappingTable.set("B0D8", "B3C7");
mappingTable.set("B0E0", "B3C8");
mappingTable.set("B0E5", "B3C9");
mappingTable.set("B108", "B3CA");
mappingTable.set("B109", "B3CB");
mappingTable.set("B10B", "B3CC");
mappingTable.set("B10C", "B3CD");
mappingTable.set("B110", "B3CE");
mappingTable.set("B112", "B3CF");
mappingTable.set("B113", "B3D0");
mappingTable.set("B118", "B3D1");
mappingTable.set("B119", "B3D2");
mappingTable.set("B11B", "B3D3");
mappingTable.set("B11C", "B3D4");
mappingTable.set("B11D", "B3D5");
mappingTable.set("B123", "B3D6");
mappingTable.set("B124", "B3D7");
mappingTable.set("B125", "B3D8");
mappingTable.set("B128", "B3D9");
mappingTable.set("B12C", "B3DA");
mappingTable.set("B134", "B3DB");
mappingTable.set("B135", "B3DC");
mappingTable.set("B137", "B3DD");
mappingTable.set("B138", "B3DE");
mappingTable.set("B139", "B3DF");
mappingTable.set("B140", "B3E0");
mappingTable.set("B141", "B3E1");
mappingTable.set("B144", "B3E2");
mappingTable.set("B148", "B3E3");
mappingTable.set("B150", "B3E4");
mappingTable.set("B151", "B3E5");
mappingTable.set("B154", "B3E6");
mappingTable.set("B155", "B3E7");
mappingTable.set("B158", "B3E8");
mappingTable.set("B15C", "B3E9");
mappingTable.set("B160", "B3EA");
mappingTable.set("B178", "B3EB");
mappingTable.set("B179", "B3EC");
mappingTable.set("B17C", "B3ED");
mappingTable.set("B180", "B3EE");
mappingTable.set("B182", "B3EF");
mappingTable.set("B188", "B3F0");
mappingTable.set("B189", "B3F1");
mappingTable.set("B18B", "B3F2");
mappingTable.set("B18D", "B3F3");
mappingTable.set("B192", "B3F4");
mappingTable.set("B193", "B3F5");
mappingTable.set("B194", "B3F6");
mappingTable.set("B198", "B3F7");
mappingTable.set("B19C", "B3F8");
mappingTable.set("B1A8", "B3F9");
mappingTable.set("B1CC", "B3FA");
mappingTable.set("B1D0", "B3FB");
mappingTable.set("B1D4", "B3FC");
mappingTable.set("B1DC", "B3FD");
mappingTable.set("B1DD", "B3FE");
mappingTable.set("D02E", "B441");
mappingTable.set("D02F", "B442");
mappingTable.set("D030", "B443");
mappingTable.set("D031", "B444");
mappingTable.set("D032", "B445");
mappingTable.set("D033", "B446");
mappingTable.set("D036", "B447");
mappingTable.set("D037", "B448");
mappingTable.set("D039", "B449");
mappingTable.set("D03A", "B44A");
mappingTable.set("D03B", "B44B");
mappingTable.set("D03D", "B44C");
mappingTable.set("D03E", "B44D");
mappingTable.set("D03F", "B44E");
mappingTable.set("D040", "B44F");
mappingTable.set("D041", "B450");
mappingTable.set("D042", "B451");
mappingTable.set("D043", "B452");
mappingTable.set("D046", "B453");
mappingTable.set("D048", "B454");
mappingTable.set("D04A", "B455");
mappingTable.set("D04B", "B456");
mappingTable.set("D04C", "B457");
mappingTable.set("D04D", "B458");
mappingTable.set("D04E", "B459");
mappingTable.set("D04F", "B45A");
mappingTable.set("D051", "B461");
mappingTable.set("D052", "B462");
mappingTable.set("D053", "B463");
mappingTable.set("D055", "B464");
mappingTable.set("D056", "B465");
mappingTable.set("D057", "B466");
mappingTable.set("D059", "B467");
mappingTable.set("D05A", "B468");
mappingTable.set("D05B", "B469");
mappingTable.set("D05C", "B46A");
mappingTable.set("D05D", "B46B");
mappingTable.set("D05E", "B46C");
mappingTable.set("D05F", "B46D");
mappingTable.set("D061", "B46E");
mappingTable.set("D062", "B46F");
mappingTable.set("D063", "B470");
mappingTable.set("D064", "B471");
mappingTable.set("D065", "B472");
mappingTable.set("D066", "B473");
mappingTable.set("D067", "B474");
mappingTable.set("D068", "B475");
mappingTable.set("D069", "B476");
mappingTable.set("D06A", "B477");
mappingTable.set("D06B", "B478");
mappingTable.set("D06E", "B479");
mappingTable.set("D06F", "B47A");
mappingTable.set("D071", "B481");
mappingTable.set("D072", "B482");
mappingTable.set("D073", "B483");
mappingTable.set("D075", "B484");
mappingTable.set("D076", "B485");
mappingTable.set("D077", "B486");
mappingTable.set("D078", "B487");
mappingTable.set("D079", "B488");
mappingTable.set("D07A", "B489");
mappingTable.set("D07B", "B48A");
mappingTable.set("D07E", "B48B");
mappingTable.set("D07F", "B48C");
mappingTable.set("D080", "B48D");
mappingTable.set("D082", "B48E");
mappingTable.set("D083", "B48F");
mappingTable.set("D084", "B490");
mappingTable.set("D085", "B491");
mappingTable.set("D086", "B492");
mappingTable.set("D087", "B493");
mappingTable.set("D088", "B494");
mappingTable.set("D089", "B495");
mappingTable.set("D08A", "B496");
mappingTable.set("D08B", "B497");
mappingTable.set("D08C", "B498");
mappingTable.set("D08D", "B499");
mappingTable.set("D08E", "B49A");
mappingTable.set("D08F", "B49B");
mappingTable.set("D090", "B49C");
mappingTable.set("D091", "B49D");
mappingTable.set("D092", "B49E");
mappingTable.set("D093", "B49F");
mappingTable.set("D094", "B4A0");
mappingTable.set("B1DF", "B4A1");
mappingTable.set("B1E8", "B4A2");
mappingTable.set("B1E9", "B4A3");
mappingTable.set("B1EC", "B4A4");
mappingTable.set("B1F0", "B4A5");
mappingTable.set("B1F9", "B4A6");
mappingTable.set("B1FB", "B4A7");
mappingTable.set("B1FD", "B4A8");
mappingTable.set("B204", "B4A9");
mappingTable.set("B205", "B4AA");
mappingTable.set("B208", "B4AB");
mappingTable.set("B20B", "B4AC");
mappingTable.set("B20C", "B4AD");
mappingTable.set("B214", "B4AE");
mappingTable.set("B215", "B4AF");
mappingTable.set("B217", "B4B0");
mappingTable.set("B219", "B4B1");
mappingTable.set("B220", "B4B2");
mappingTable.set("B234", "B4B3");
mappingTable.set("B23C", "B4B4");
mappingTable.set("B258", "B4B5");
mappingTable.set("B25C", "B4B6");
mappingTable.set("B260", "B4B7");
mappingTable.set("B268", "B4B8");
mappingTable.set("B269", "B4B9");
mappingTable.set("B274", "B4BA");
mappingTable.set("B275", "B4BB");
mappingTable.set("B27C", "B4BC");
mappingTable.set("B284", "B4BD");
mappingTable.set("B285", "B4BE");
mappingTable.set("B289", "B4BF");
mappingTable.set("B290", "B4C0");
mappingTable.set("B291", "B4C1");
mappingTable.set("B294", "B4C2");
mappingTable.set("B298", "B4C3");
mappingTable.set("B299", "B4C4");
mappingTable.set("B29A", "B4C5");
mappingTable.set("B2A0", "B4C6");
mappingTable.set("B2A1", "B4C7");
mappingTable.set("B2A3", "B4C8");
mappingTable.set("B2A5", "B4C9");
mappingTable.set("B2A6", "B4CA");
mappingTable.set("B2AA", "B4CB");
mappingTable.set("B2AC", "B4CC");
mappingTable.set("B2B0", "B4CD");
mappingTable.set("B2B4", "B4CE");
mappingTable.set("B2C8", "B4CF");
mappingTable.set("B2C9", "B4D0");
mappingTable.set("B2CC", "B4D1");
mappingTable.set("B2D0", "B4D2");
mappingTable.set("B2D2", "B4D3");
mappingTable.set("B2D8", "B4D4");
mappingTable.set("B2D9", "B4D5");
mappingTable.set("B2DB", "B4D6");
mappingTable.set("B2DD", "B4D7");
mappingTable.set("B2E2", "B4D8");
mappingTable.set("B2E4", "B4D9");
mappingTable.set("B2E5", "B4DA");
mappingTable.set("B2E6", "B4DB");
mappingTable.set("B2E8", "B4DC");
mappingTable.set("B2EB", "B4DD");
mappingTable.set("B2EC", "B4DE");
mappingTable.set("B2ED", "B4DF");
mappingTable.set("B2EE", "B4E0");
mappingTable.set("B2EF", "B4E1");
mappingTable.set("B2F3", "B4E2");
mappingTable.set("B2F4", "B4E3");
mappingTable.set("B2F5", "B4E4");
mappingTable.set("B2F7", "B4E5");
mappingTable.set("B2F8", "B4E6");
mappingTable.set("B2F9", "B4E7");
mappingTable.set("B2FA", "B4E8");
mappingTable.set("B2FB", "B4E9");
mappingTable.set("B2FF", "B4EA");
mappingTable.set("B300", "B4EB");
mappingTable.set("B301", "B4EC");
mappingTable.set("B304", "B4ED");
mappingTable.set("B308", "B4EE");
mappingTable.set("B310", "B4EF");
mappingTable.set("B311", "B4F0");
mappingTable.set("B313", "B4F1");
mappingTable.set("B314", "B4F2");
mappingTable.set("B315", "B4F3");
mappingTable.set("B31C", "B4F4");
mappingTable.set("B354", "B4F5");
mappingTable.set("B355", "B4F6");
mappingTable.set("B356", "B4F7");
mappingTable.set("B358", "B4F8");
mappingTable.set("B35B", "B4F9");
mappingTable.set("B35C", "B4FA");
mappingTable.set("B35E", "B4FB");
mappingTable.set("B35F", "B4FC");
mappingTable.set("B364", "B4FD");
mappingTable.set("B365", "B4FE");
mappingTable.set("D095", "B541");
mappingTable.set("D096", "B542");
mappingTable.set("D097", "B543");
mappingTable.set("D098", "B544");
mappingTable.set("D099", "B545");
mappingTable.set("D09A", "B546");
mappingTable.set("D09B", "B547");
mappingTable.set("D09C", "B548");
mappingTable.set("D09D", "B549");
mappingTable.set("D09E", "B54A");
mappingTable.set("D09F", "B54B");
mappingTable.set("D0A0", "B54C");
mappingTable.set("D0A1", "B54D");
mappingTable.set("D0A2", "B54E");
mappingTable.set("D0A3", "B54F");
mappingTable.set("D0A6", "B550");
mappingTable.set("D0A7", "B551");
mappingTable.set("D0A9", "B552");
mappingTable.set("D0AA", "B553");
mappingTable.set("D0AB", "B554");
mappingTable.set("D0AD", "B555");
mappingTable.set("D0AE", "B556");
mappingTable.set("D0AF", "B557");
mappingTable.set("D0B0", "B558");
mappingTable.set("D0B1", "B559");
mappingTable.set("D0B2", "B55A");
mappingTable.set("D0B3", "B561");
mappingTable.set("D0B6", "B562");
mappingTable.set("D0B8", "B563");
mappingTable.set("D0BA", "B564");
mappingTable.set("D0BB", "B565");
mappingTable.set("D0BC", "B566");
mappingTable.set("D0BD", "B567");
mappingTable.set("D0BE", "B568");
mappingTable.set("D0BF", "B569");
mappingTable.set("D0C2", "B56A");
mappingTable.set("D0C3", "B56B");
mappingTable.set("D0C5", "B56C");
mappingTable.set("D0C6", "B56D");
mappingTable.set("D0C7", "B56E");
mappingTable.set("D0CA", "B56F");
mappingTable.set("D0CB", "B570");
mappingTable.set("D0CC", "B571");
mappingTable.set("D0CD", "B572");
mappingTable.set("D0CE", "B573");
mappingTable.set("D0CF", "B574");
mappingTable.set("D0D2", "B575");
mappingTable.set("D0D6", "B576");
mappingTable.set("D0D7", "B577");
mappingTable.set("D0D8", "B578");
mappingTable.set("D0D9", "B579");
mappingTable.set("D0DA", "B57A");
mappingTable.set("D0DB", "B581");
mappingTable.set("D0DE", "B582");
mappingTable.set("D0DF", "B583");
mappingTable.set("D0E1", "B584");
mappingTable.set("D0E2", "B585");
mappingTable.set("D0E3", "B586");
mappingTable.set("D0E5", "B587");
mappingTable.set("D0E6", "B588");
mappingTable.set("D0E7", "B589");
mappingTable.set("D0E8", "B58A");
mappingTable.set("D0E9", "B58B");
mappingTable.set("D0EA", "B58C");
mappingTable.set("D0EB", "B58D");
mappingTable.set("D0EE", "B58E");
mappingTable.set("D0F2", "B58F");
mappingTable.set("D0F3", "B590");
mappingTable.set("D0F4", "B591");
mappingTable.set("D0F5", "B592");
mappingTable.set("D0F6", "B593");
mappingTable.set("D0F7", "B594");
mappingTable.set("D0F9", "B595");
mappingTable.set("D0FA", "B596");
mappingTable.set("D0FB", "B597");
mappingTable.set("D0FC", "B598");
mappingTable.set("D0FD", "B599");
mappingTable.set("D0FE", "B59A");
mappingTable.set("D0FF", "B59B");
mappingTable.set("D100", "B59C");
mappingTable.set("D101", "B59D");
mappingTable.set("D102", "B59E");
mappingTable.set("D103", "B59F");
mappingTable.set("D104", "B5A0");
mappingTable.set("B367", "B5A1");
mappingTable.set("B369", "B5A2");
mappingTable.set("B36B", "B5A3");
mappingTable.set("B36E", "B5A4");
mappingTable.set("B370", "B5A5");
mappingTable.set("B371", "B5A6");
mappingTable.set("B374", "B5A7");
mappingTable.set("B378", "B5A8");
mappingTable.set("B380", "B5A9");
mappingTable.set("B381", "B5AA");
mappingTable.set("B383", "B5AB");
mappingTable.set("B384", "B5AC");
mappingTable.set("B385", "B5AD");
mappingTable.set("B38C", "B5AE");
mappingTable.set("B390", "B5AF");
mappingTable.set("B394", "B5B0");
mappingTable.set("B3A0", "B5B1");
mappingTable.set("B3A1", "B5B2");
mappingTable.set("B3A8", "B5B3");
mappingTable.set("B3AC", "B5B4");
mappingTable.set("B3C4", "B5B5");
mappingTable.set("B3C5", "B5B6");
mappingTable.set("B3C8", "B5B7");
mappingTable.set("B3CB", "B5B8");
mappingTable.set("B3CC", "B5B9");
mappingTable.set("B3CE", "B5BA");
mappingTable.set("B3D0", "B5BB");
mappingTable.set("B3D4", "B5BC");
mappingTable.set("B3D5", "B5BD");
mappingTable.set("B3D7", "B5BE");
mappingTable.set("B3D9", "B5BF");
mappingTable.set("B3DB", "B5C0");
mappingTable.set("B3DD", "B5C1");
mappingTable.set("B3E0", "B5C2");
mappingTable.set("B3E4", "B5C3");
mappingTable.set("B3E8", "B5C4");
mappingTable.set("B3FC", "B5C5");
mappingTable.set("B410", "B5C6");
mappingTable.set("B418", "B5C7");
mappingTable.set("B41C", "B5C8");
mappingTable.set("B420", "B5C9");
mappingTable.set("B428", "B5CA");
mappingTable.set("B429", "B5CB");
mappingTable.set("B42B", "B5CC");
mappingTable.set("B434", "B5CD");
mappingTable.set("B450", "B5CE");
mappingTable.set("B451", "B5CF");
mappingTable.set("B454", "B5D0");
mappingTable.set("B458", "B5D1");
mappingTable.set("B460", "B5D2");
mappingTable.set("B461", "B5D3");
mappingTable.set("B463", "B5D4");
mappingTable.set("B465", "B5D5");
mappingTable.set("B46C", "B5D6");
mappingTable.set("B480", "B5D7");
mappingTable.set("B488", "B5D8");
mappingTable.set("B49D", "B5D9");
mappingTable.set("B4A4", "B5DA");
mappingTable.set("B4A8", "B5DB");
mappingTable.set("B4AC", "B5DC");
mappingTable.set("B4B5", "B5DD");
mappingTable.set("B4B7", "B5DE");
mappingTable.set("B4B9", "B5DF");
mappingTable.set("B4C0", "B5E0");
mappingTable.set("B4C4", "B5E1");
mappingTable.set("B4C8", "B5E2");
mappingTable.set("B4D0", "B5E3");
mappingTable.set("B4D5", "B5E4");
mappingTable.set("B4DC", "B5E5");
mappingTable.set("B4DD", "B5E6");
mappingTable.set("B4E0", "B5E7");
mappingTable.set("B4E3", "B5E8");
mappingTable.set("B4E4", "B5E9");
mappingTable.set("B4E6", "B5EA");
mappingTable.set("B4EC", "B5EB");
mappingTable.set("B4ED", "B5EC");
mappingTable.set("B4EF", "B5ED");
mappingTable.set("B4F1", "B5EE");
mappingTable.set("B4F8", "B5EF");
mappingTable.set("B514", "B5F0");
mappingTable.set("B515", "B5F1");
mappingTable.set("B518", "B5F2");
mappingTable.set("B51B", "B5F3");
mappingTable.set("B51C", "B5F4");
mappingTable.set("B524", "B5F5");
mappingTable.set("B525", "B5F6");
mappingTable.set("B527", "B5F7");
mappingTable.set("B528", "B5F8");
mappingTable.set("B529", "B5F9");
mappingTable.set("B52A", "B5FA");
mappingTable.set("B530", "B5FB");
mappingTable.set("B531", "B5FC");
mappingTable.set("B534", "B5FD");
mappingTable.set("B538", "B5FE");
mappingTable.set("D105", "B641");
mappingTable.set("D106", "B642");
mappingTable.set("D107", "B643");
mappingTable.set("D108", "B644");
mappingTable.set("D109", "B645");
mappingTable.set("D10A", "B646");
mappingTable.set("D10B", "B647");
mappingTable.set("D10C", "B648");
mappingTable.set("D10E", "B649");
mappingTable.set("D10F", "B64A");
mappingTable.set("D110", "B64B");
mappingTable.set("D111", "B64C");
mappingTable.set("D112", "B64D");
mappingTable.set("D113", "B64E");
mappingTable.set("D114", "B64F");
mappingTable.set("D115", "B650");
mappingTable.set("D116", "B651");
mappingTable.set("D117", "B652");
mappingTable.set("D118", "B653");
mappingTable.set("D119", "B654");
mappingTable.set("D11A", "B655");
mappingTable.set("D11B", "B656");
mappingTable.set("D11C", "B657");
mappingTable.set("D11D", "B658");
mappingTable.set("D11E", "B659");
mappingTable.set("D11F", "B65A");
mappingTable.set("D120", "B661");
mappingTable.set("D121", "B662");
mappingTable.set("D122", "B663");
mappingTable.set("D123", "B664");
mappingTable.set("D124", "B665");
mappingTable.set("D125", "B666");
mappingTable.set("D126", "B667");
mappingTable.set("D127", "B668");
mappingTable.set("D128", "B669");
mappingTable.set("D129", "B66A");
mappingTable.set("D12A", "B66B");
mappingTable.set("D12B", "B66C");
mappingTable.set("D12C", "B66D");
mappingTable.set("D12D", "B66E");
mappingTable.set("D12E", "B66F");
mappingTable.set("D12F", "B670");
mappingTable.set("D132", "B671");
mappingTable.set("D133", "B672");
mappingTable.set("D135", "B673");
mappingTable.set("D136", "B674");
mappingTable.set("D137", "B675");
mappingTable.set("D139", "B676");
mappingTable.set("D13B", "B677");
mappingTable.set("D13C", "B678");
mappingTable.set("D13D", "B679");
mappingTable.set("D13E", "B67A");
mappingTable.set("D13F", "B681");
mappingTable.set("D142", "B682");
mappingTable.set("D146", "B683");
mappingTable.set("D147", "B684");
mappingTable.set("D148", "B685");
mappingTable.set("D149", "B686");
mappingTable.set("D14A", "B687");
mappingTable.set("D14B", "B688");
mappingTable.set("D14E", "B689");
mappingTable.set("D14F", "B68A");
mappingTable.set("D151", "B68B");
mappingTable.set("D152", "B68C");
mappingTable.set("D153", "B68D");
mappingTable.set("D155", "B68E");
mappingTable.set("D156", "B68F");
mappingTable.set("D157", "B690");
mappingTable.set("D158", "B691");
mappingTable.set("D159", "B692");
mappingTable.set("D15A", "B693");
mappingTable.set("D15B", "B694");
mappingTable.set("D15E", "B695");
mappingTable.set("D160", "B696");
mappingTable.set("D162", "B697");
mappingTable.set("D163", "B698");
mappingTable.set("D164", "B699");
mappingTable.set("D165", "B69A");
mappingTable.set("D166", "B69B");
mappingTable.set("D167", "B69C");
mappingTable.set("D169", "B69D");
mappingTable.set("D16A", "B69E");
mappingTable.set("D16B", "B69F");
mappingTable.set("D16D", "B6A0");
mappingTable.set("B540", "B6A1");
mappingTable.set("B541", "B6A2");
mappingTable.set("B543", "B6A3");
mappingTable.set("B544", "B6A4");
mappingTable.set("B545", "B6A5");
mappingTable.set("B54B", "B6A6");
mappingTable.set("B54C", "B6A7");
mappingTable.set("B54D", "B6A8");
mappingTable.set("B550", "B6A9");
mappingTable.set("B554", "B6AA");
mappingTable.set("B55C", "B6AB");
mappingTable.set("B55D", "B6AC");
mappingTable.set("B55F", "B6AD");
mappingTable.set("B560", "B6AE");
mappingTable.set("B561", "B6AF");
mappingTable.set("B5A0", "B6B0");
mappingTable.set("B5A1", "B6B1");
mappingTable.set("B5A4", "B6B2");
mappingTable.set("B5A8", "B6B3");
mappingTable.set("B5AA", "B6B4");
mappingTable.set("B5AB", "B6B5");
mappingTable.set("B5B0", "B6B6");
mappingTable.set("B5B1", "B6B7");
mappingTable.set("B5B3", "B6B8");
mappingTable.set("B5B4", "B6B9");
mappingTable.set("B5B5", "B6BA");
mappingTable.set("B5BB", "B6BB");
mappingTable.set("B5BC", "B6BC");
mappingTable.set("B5BD", "B6BD");
mappingTable.set("B5C0", "B6BE");
mappingTable.set("B5C4", "B6BF");
mappingTable.set("B5CC", "B6C0");
mappingTable.set("B5CD", "B6C1");
mappingTable.set("B5CF", "B6C2");
mappingTable.set("B5D0", "B6C3");
mappingTable.set("B5D1", "B6C4");
mappingTable.set("B5D8", "B6C5");
mappingTable.set("B5EC", "B6C6");
mappingTable.set("B610", "B6C7");
mappingTable.set("B611", "B6C8");
mappingTable.set("B614", "B6C9");
mappingTable.set("B618", "B6CA");
mappingTable.set("B625", "B6CB");
mappingTable.set("B62C", "B6CC");
mappingTable.set("B634", "B6CD");
mappingTable.set("B648", "B6CE");
mappingTable.set("B664", "B6CF");
mappingTable.set("B668", "B6D0");
mappingTable.set("B69C", "B6D1");
mappingTable.set("B69D", "B6D2");
mappingTable.set("B6A0", "B6D3");
mappingTable.set("B6A4", "B6D4");
mappingTable.set("B6AB", "B6D5");
mappingTable.set("B6AC", "B6D6");
mappingTable.set("B6B1", "B6D7");
mappingTable.set("B6D4", "B6D8");
mappingTable.set("B6F0", "B6D9");
mappingTable.set("B6F4", "B6DA");
mappingTable.set("B6F8", "B6DB");
mappingTable.set("B700", "B6DC");
mappingTable.set("B701", "B6DD");
mappingTable.set("B705", "B6DE");
mappingTable.set("B728", "B6DF");
mappingTable.set("B729", "B6E0");
mappingTable.set("B72C", "B6E1");
mappingTable.set("B72F", "B6E2");
mappingTable.set("B730", "B6E3");
mappingTable.set("B738", "B6E4");
mappingTable.set("B739", "B6E5");
mappingTable.set("B73B", "B6E6");
mappingTable.set("B744", "B6E7");
mappingTable.set("B748", "B6E8");
mappingTable.set("B74C", "B6E9");
mappingTable.set("B754", "B6EA");
mappingTable.set("B755", "B6EB");
mappingTable.set("B760", "B6EC");
mappingTable.set("B764", "B6ED");
mappingTable.set("B768", "B6EE");
mappingTable.set("B770", "B6EF");
mappingTable.set("B771", "B6F0");
mappingTable.set("B773", "B6F1");
mappingTable.set("B775", "B6F2");
mappingTable.set("B77C", "B6F3");
mappingTable.set("B77D", "B6F4");
mappingTable.set("B780", "B6F5");
mappingTable.set("B784", "B6F6");
mappingTable.set("B78C", "B6F7");
mappingTable.set("B78D", "B6F8");
mappingTable.set("B78F", "B6F9");
mappingTable.set("B790", "B6FA");
mappingTable.set("B791", "B6FB");
mappingTable.set("B792", "B6FC");
mappingTable.set("B796", "B6FD");
mappingTable.set("B797", "B6FE");
mappingTable.set("D16E", "B741");
mappingTable.set("D16F", "B742");
mappingTable.set("D170", "B743");
mappingTable.set("D171", "B744");
mappingTable.set("D172", "B745");
mappingTable.set("D173", "B746");
mappingTable.set("D174", "B747");
mappingTable.set("D175", "B748");
mappingTable.set("D176", "B749");
mappingTable.set("D177", "B74A");
mappingTable.set("D178", "B74B");
mappingTable.set("D179", "B74C");
mappingTable.set("D17A", "B74D");
mappingTable.set("D17B", "B74E");
mappingTable.set("D17D", "B74F");
mappingTable.set("D17E", "B750");
mappingTable.set("D17F", "B751");
mappingTable.set("D180", "B752");
mappingTable.set("D181", "B753");
mappingTable.set("D182", "B754");
mappingTable.set("D183", "B755");
mappingTable.set("D185", "B756");
mappingTable.set("D186", "B757");
mappingTable.set("D187", "B758");
mappingTable.set("D189", "B759");
mappingTable.set("D18A", "B75A");
mappingTable.set("D18B", "B761");
mappingTable.set("D18C", "B762");
mappingTable.set("D18D", "B763");
mappingTable.set("D18E", "B764");
mappingTable.set("D18F", "B765");
mappingTable.set("D190", "B766");
mappingTable.set("D191", "B767");
mappingTable.set("D192", "B768");
mappingTable.set("D193", "B769");
mappingTable.set("D194", "B76A");
mappingTable.set("D195", "B76B");
mappingTable.set("D196", "B76C");
mappingTable.set("D197", "B76D");
mappingTable.set("D198", "B76E");
mappingTable.set("D199", "B76F");
mappingTable.set("D19A", "B770");
mappingTable.set("D19B", "B771");
mappingTable.set("D19C", "B772");
mappingTable.set("D19D", "B773");
mappingTable.set("D19E", "B774");
mappingTable.set("D19F", "B775");
mappingTable.set("D1A2", "B776");
mappingTable.set("D1A3", "B777");
mappingTable.set("D1A5", "B778");
mappingTable.set("D1A6", "B779");
mappingTable.set("D1A7", "B77A");
mappingTable.set("D1A9", "B781");
mappingTable.set("D1AA", "B782");
mappingTable.set("D1AB", "B783");
mappingTable.set("D1AC", "B784");
mappingTable.set("D1AD", "B785");
mappingTable.set("D1AE", "B786");
mappingTable.set("D1AF", "B787");
mappingTable.set("D1B2", "B788");
mappingTable.set("D1B4", "B789");
mappingTable.set("D1B6", "B78A");
mappingTable.set("D1B7", "B78B");
mappingTable.set("D1B8", "B78C");
mappingTable.set("D1B9", "B78D");
mappingTable.set("D1BB", "B78E");
mappingTable.set("D1BD", "B78F");
mappingTable.set("D1BE", "B790");
mappingTable.set("D1BF", "B791");
mappingTable.set("D1C1", "B792");
mappingTable.set("D1C2", "B793");
mappingTable.set("D1C3", "B794");
mappingTable.set("D1C4", "B795");
mappingTable.set("D1C5", "B796");
mappingTable.set("D1C6", "B797");
mappingTable.set("D1C7", "B798");
mappingTable.set("D1C8", "B799");
mappingTable.set("D1C9", "B79A");
mappingTable.set("D1CA", "B79B");
mappingTable.set("D1CB", "B79C");
mappingTable.set("D1CC", "B79D");
mappingTable.set("D1CD", "B79E");
mappingTable.set("D1CE", "B79F");
mappingTable.set("D1CF", "B7A0");
mappingTable.set("B798", "B7A1");
mappingTable.set("B799", "B7A2");
mappingTable.set("B79C", "B7A3");
mappingTable.set("B7A0", "B7A4");
mappingTable.set("B7A8", "B7A5");
mappingTable.set("B7A9", "B7A6");
mappingTable.set("B7AB", "B7A7");
mappingTable.set("B7AC", "B7A8");
mappingTable.set("B7AD", "B7A9");
mappingTable.set("B7B4", "B7AA");
mappingTable.set("B7B5", "B7AB");
mappingTable.set("B7B8", "B7AC");
mappingTable.set("B7C7", "B7AD");
mappingTable.set("B7C9", "B7AE");
mappingTable.set("B7EC", "B7AF");
mappingTable.set("B7ED", "B7B0");
mappingTable.set("B7F0", "B7B1");
mappingTable.set("B7F4", "B7B2");
mappingTable.set("B7FC", "B7B3");
mappingTable.set("B7FD", "B7B4");
mappingTable.set("B7FF", "B7B5");
mappingTable.set("B800", "B7B6");
mappingTable.set("B801", "B7B7");
mappingTable.set("B807", "B7B8");
mappingTable.set("B808", "B7B9");
mappingTable.set("B809", "B7BA");
mappingTable.set("B80C", "B7BB");
mappingTable.set("B810", "B7BC");
mappingTable.set("B818", "B7BD");
mappingTable.set("B819", "B7BE");
mappingTable.set("B81B", "B7BF");
mappingTable.set("B81D", "B7C0");
mappingTable.set("B824", "B7C1");
mappingTable.set("B825", "B7C2");
mappingTable.set("B828", "B7C3");
mappingTable.set("B82C", "B7C4");
mappingTable.set("B834", "B7C5");
mappingTable.set("B835", "B7C6");
mappingTable.set("B837", "B7C7");
mappingTable.set("B838", "B7C8");
mappingTable.set("B839", "B7C9");
mappingTable.set("B840", "B7CA");
mappingTable.set("B844", "B7CB");
mappingTable.set("B851", "B7CC");
mappingTable.set("B853", "B7CD");
mappingTable.set("B85C", "B7CE");
mappingTable.set("B85D", "B7CF");
mappingTable.set("B860", "B7D0");
mappingTable.set("B864", "B7D1");
mappingTable.set("B86C", "B7D2");
mappingTable.set("B86D", "B7D3");
mappingTable.set("B86F", "B7D4");
mappingTable.set("B871", "B7D5");
mappingTable.set("B878", "B7D6");
mappingTable.set("B87C", "B7D7");
mappingTable.set("B88D", "B7D8");
mappingTable.set("B8A8", "B7D9");
mappingTable.set("B8B0", "B7DA");
mappingTable.set("B8B4", "B7DB");
mappingTable.set("B8B8", "B7DC");
mappingTable.set("B8C0", "B7DD");
mappingTable.set("B8C1", "B7DE");
mappingTable.set("B8C3", "B7DF");
mappingTable.set("B8C5", "B7E0");
mappingTable.set("B8CC", "B7E1");
mappingTable.set("B8D0", "B7E2");
mappingTable.set("B8D4", "B7E3");
mappingTable.set("B8DD", "B7E4");
mappingTable.set("B8DF", "B7E5");
mappingTable.set("B8E1", "B7E6");
mappingTable.set("B8E8", "B7E7");
mappingTable.set("B8E9", "B7E8");
mappingTable.set("B8EC", "B7E9");
mappingTable.set("B8F0", "B7EA");
mappingTable.set("B8F8", "B7EB");
mappingTable.set("B8F9", "B7EC");
mappingTable.set("B8FB", "B7ED");
mappingTable.set("B8FD", "B7EE");
mappingTable.set("B904", "B7EF");
mappingTable.set("B918", "B7F0");
mappingTable.set("B920", "B7F1");
mappingTable.set("B93C", "B7F2");
mappingTable.set("B93D", "B7F3");
mappingTable.set("B940", "B7F4");
mappingTable.set("B944", "B7F5");
mappingTable.set("B94C", "B7F6");
mappingTable.set("B94F", "B7F7");
mappingTable.set("B951", "B7F8");
mappingTable.set("B958", "B7F9");
mappingTable.set("B959", "B7FA");
mappingTable.set("B95C", "B7FB");
mappingTable.set("B960", "B7FC");
mappingTable.set("B968", "B7FD");
mappingTable.set("B969", "B7FE");
mappingTable.set("D1D0", "B841");
mappingTable.set("D1D1", "B842");
mappingTable.set("D1D2", "B843");
mappingTable.set("D1D3", "B844");
mappingTable.set("D1D4", "B845");
mappingTable.set("D1D5", "B846");
mappingTable.set("D1D6", "B847");
mappingTable.set("D1D7", "B848");
mappingTable.set("D1D9", "B849");
mappingTable.set("D1DA", "B84A");
mappingTable.set("D1DB", "B84B");
mappingTable.set("D1DC", "B84C");
mappingTable.set("D1DD", "B84D");
mappingTable.set("D1DE", "B84E");
mappingTable.set("D1DF", "B84F");
mappingTable.set("D1E0", "B850");
mappingTable.set("D1E1", "B851");
mappingTable.set("D1E2", "B852");
mappingTable.set("D1E3", "B853");
mappingTable.set("D1E4", "B854");
mappingTable.set("D1E5", "B855");
mappingTable.set("D1E6", "B856");
mappingTable.set("D1E7", "B857");
mappingTable.set("D1E8", "B858");
mappingTable.set("D1E9", "B859");
mappingTable.set("D1EA", "B85A");
mappingTable.set("D1EB", "B861");
mappingTable.set("D1EC", "B862");
mappingTable.set("D1ED", "B863");
mappingTable.set("D1EE", "B864");
mappingTable.set("D1EF", "B865");
mappingTable.set("D1F0", "B866");
mappingTable.set("D1F1", "B867");
mappingTable.set("D1F2", "B868");
mappingTable.set("D1F3", "B869");
mappingTable.set("D1F5", "B86A");
mappingTable.set("D1F6", "B86B");
mappingTable.set("D1F7", "B86C");
mappingTable.set("D1F9", "B86D");
mappingTable.set("D1FA", "B86E");
mappingTable.set("D1FB", "B86F");
mappingTable.set("D1FC", "B870");
mappingTable.set("D1FD", "B871");
mappingTable.set("D1FE", "B872");
mappingTable.set("D1FF", "B873");
mappingTable.set("D200", "B874");
mappingTable.set("D201", "B875");
mappingTable.set("D202", "B876");
mappingTable.set("D203", "B877");
mappingTable.set("D204", "B878");
mappingTable.set("D205", "B879");
mappingTable.set("D206", "B87A");
mappingTable.set("D208", "B881");
mappingTable.set("D20A", "B882");
mappingTable.set("D20B", "B883");
mappingTable.set("D20C", "B884");
mappingTable.set("D20D", "B885");
mappingTable.set("D20E", "B886");
mappingTable.set("D20F", "B887");
mappingTable.set("D211", "B888");
mappingTable.set("D212", "B889");
mappingTable.set("D213", "B88A");
mappingTable.set("D214", "B88B");
mappingTable.set("D215", "B88C");
mappingTable.set("D216", "B88D");
mappingTable.set("D217", "B88E");
mappingTable.set("D218", "B88F");
mappingTable.set("D219", "B890");
mappingTable.set("D21A", "B891");
mappingTable.set("D21B", "B892");
mappingTable.set("D21C", "B893");
mappingTable.set("D21D", "B894");
mappingTable.set("D21E", "B895");
mappingTable.set("D21F", "B896");
mappingTable.set("D220", "B897");
mappingTable.set("D221", "B898");
mappingTable.set("D222", "B899");
mappingTable.set("D223", "B89A");
mappingTable.set("D224", "B89B");
mappingTable.set("D225", "B89C");
mappingTable.set("D226", "B89D");
mappingTable.set("D227", "B89E");
mappingTable.set("D228", "B89F");
mappingTable.set("D229", "B8A0");
mappingTable.set("B96B", "B8A1");
mappingTable.set("B96D", "B8A2");
mappingTable.set("B974", "B8A3");
mappingTable.set("B975", "B8A4");
mappingTable.set("B978", "B8A5");
mappingTable.set("B97C", "B8A6");
mappingTable.set("B984", "B8A7");
mappingTable.set("B985", "B8A8");
mappingTable.set("B987", "B8A9");
mappingTable.set("B989", "B8AA");
mappingTable.set("B98A", "B8AB");
mappingTable.set("B98D", "B8AC");
mappingTable.set("B98E", "B8AD");
mappingTable.set("B9AC", "B8AE");
mappingTable.set("B9AD", "B8AF");
mappingTable.set("B9B0", "B8B0");
mappingTable.set("B9B4", "B8B1");
mappingTable.set("B9BC", "B8B2");
mappingTable.set("B9BD", "B8B3");
mappingTable.set("B9BF", "B8B4");
mappingTable.set("B9C1", "B8B5");
mappingTable.set("B9C8", "B8B6");
mappingTable.set("B9C9", "B8B7");
mappingTable.set("B9CC", "B8B8");
mappingTable.set("B9CE", "B8B9");
mappingTable.set("B9CF", "B8BA");
mappingTable.set("B9D0", "B8BB");
mappingTable.set("B9D1", "B8BC");
mappingTable.set("B9D2", "B8BD");
mappingTable.set("B9D8", "B8BE");
mappingTable.set("B9D9", "B8BF");
mappingTable.set("B9DB", "B8C0");
mappingTable.set("B9DD", "B8C1");
mappingTable.set("B9DE", "B8C2");
mappingTable.set("B9E1", "B8C3");
mappingTable.set("B9E3", "B8C4");
mappingTable.set("B9E4", "B8C5");
mappingTable.set("B9E5", "B8C6");
mappingTable.set("B9E8", "B8C7");
mappingTable.set("B9EC", "B8C8");
mappingTable.set("B9F4", "B8C9");
mappingTable.set("B9F5", "B8CA");
mappingTable.set("B9F7", "B8CB");
mappingTable.set("B9F8", "B8CC");
mappingTable.set("B9F9", "B8CD");
mappingTable.set("B9FA", "B8CE");
mappingTable.set("BA00", "B8CF");
mappingTable.set("BA01", "B8D0");
mappingTable.set("BA08", "B8D1");
mappingTable.set("BA15", "B8D2");
mappingTable.set("BA38", "B8D3");
mappingTable.set("BA39", "B8D4");
mappingTable.set("BA3C", "B8D5");
mappingTable.set("BA40", "B8D6");
mappingTable.set("BA42", "B8D7");
mappingTable.set("BA48", "B8D8");
mappingTable.set("BA49", "B8D9");
mappingTable.set("BA4B", "B8DA");
mappingTable.set("BA4D", "B8DB");
mappingTable.set("BA4E", "B8DC");
mappingTable.set("BA53", "B8DD");
mappingTable.set("BA54", "B8DE");
mappingTable.set("BA55", "B8DF");
mappingTable.set("BA58", "B8E0");
mappingTable.set("BA5C", "B8E1");
mappingTable.set("BA64", "B8E2");
mappingTable.set("BA65", "B8E3");
mappingTable.set("BA67", "B8E4");
mappingTable.set("BA68", "B8E5");
mappingTable.set("BA69", "B8E6");
mappingTable.set("BA70", "B8E7");
mappingTable.set("BA71", "B8E8");
mappingTable.set("BA74", "B8E9");
mappingTable.set("BA78", "B8EA");
mappingTable.set("BA83", "B8EB");
mappingTable.set("BA84", "B8EC");
mappingTable.set("BA85", "B8ED");
mappingTable.set("BA87", "B8EE");
mappingTable.set("BA8C", "B8EF");
mappingTable.set("BAA8", "B8F0");
mappingTable.set("BAA9", "B8F1");
mappingTable.set("BAAB", "B8F2");
mappingTable.set("BAAC", "B8F3");
mappingTable.set("BAB0", "B8F4");
mappingTable.set("BAB2", "B8F5");
mappingTable.set("BAB8", "B8F6");
mappingTable.set("BAB9", "B8F7");
mappingTable.set("BABB", "B8F8");
mappingTable.set("BABD", "B8F9");
mappingTable.set("BAC4", "B8FA");
mappingTable.set("BAC8", "B8FB");
mappingTable.set("BAD8", "B8FC");
mappingTable.set("BAD9", "B8FD");
mappingTable.set("BAFC", "B8FE");
mappingTable.set("D22A", "B941");
mappingTable.set("D22B", "B942");
mappingTable.set("D22E", "B943");
mappingTable.set("D22F", "B944");
mappingTable.set("D231", "B945");
mappingTable.set("D232", "B946");
mappingTable.set("D233", "B947");
mappingTable.set("D235", "B948");
mappingTable.set("D236", "B949");
mappingTable.set("D237", "B94A");
mappingTable.set("D238", "B94B");
mappingTable.set("D239", "B94C");
mappingTable.set("D23A", "B94D");
mappingTable.set("D23B", "B94E");
mappingTable.set("D23E", "B94F");
mappingTable.set("D240", "B950");
mappingTable.set("D242", "B951");
mappingTable.set("D243", "B952");
mappingTable.set("D244", "B953");
mappingTable.set("D245", "B954");
mappingTable.set("D246", "B955");
mappingTable.set("D247", "B956");
mappingTable.set("D249", "B957");
mappingTable.set("D24A", "B958");
mappingTable.set("D24B", "B959");
mappingTable.set("D24C", "B95A");
mappingTable.set("D24D", "B961");
mappingTable.set("D24E", "B962");
mappingTable.set("D24F", "B963");
mappingTable.set("D250", "B964");
mappingTable.set("D251", "B965");
mappingTable.set("D252", "B966");
mappingTable.set("D253", "B967");
mappingTable.set("D254", "B968");
mappingTable.set("D255", "B969");
mappingTable.set("D256", "B96A");
mappingTable.set("D257", "B96B");
mappingTable.set("D258", "B96C");
mappingTable.set("D259", "B96D");
mappingTable.set("D25A", "B96E");
mappingTable.set("D25B", "B96F");
mappingTable.set("D25D", "B970");
mappingTable.set("D25E", "B971");
mappingTable.set("D25F", "B972");
mappingTable.set("D260", "B973");
mappingTable.set("D261", "B974");
mappingTable.set("D262", "B975");
mappingTable.set("D263", "B976");
mappingTable.set("D265", "B977");
mappingTable.set("D266", "B978");
mappingTable.set("D267", "B979");
mappingTable.set("D268", "B97A");
mappingTable.set("D269", "B981");
mappingTable.set("D26A", "B982");
mappingTable.set("D26B", "B983");
mappingTable.set("D26C", "B984");
mappingTable.set("D26D", "B985");
mappingTable.set("D26E", "B986");
mappingTable.set("D26F", "B987");
mappingTable.set("D270", "B988");
mappingTable.set("D271", "B989");
mappingTable.set("D272", "B98A");
mappingTable.set("D273", "B98B");
mappingTable.set("D274", "B98C");
mappingTable.set("D275", "B98D");
mappingTable.set("D276", "B98E");
mappingTable.set("D277", "B98F");
mappingTable.set("D278", "B990");
mappingTable.set("D279", "B991");
mappingTable.set("D27A", "B992");
mappingTable.set("D27B", "B993");
mappingTable.set("D27C", "B994");
mappingTable.set("D27D", "B995");
mappingTable.set("D27E", "B996");
mappingTable.set("D27F", "B997");
mappingTable.set("D282", "B998");
mappingTable.set("D283", "B999");
mappingTable.set("D285", "B99A");
mappingTable.set("D286", "B99B");
mappingTable.set("D287", "B99C");
mappingTable.set("D289", "B99D");
mappingTable.set("D28A", "B99E");
mappingTable.set("D28B", "B99F");
mappingTable.set("D28C", "B9A0");
mappingTable.set("BB00", "B9A1");
mappingTable.set("BB04", "B9A2");
mappingTable.set("BB0D", "B9A3");
mappingTable.set("BB0F", "B9A4");
mappingTable.set("BB11", "B9A5");
mappingTable.set("BB18", "B9A6");
mappingTable.set("BB1C", "B9A7");
mappingTable.set("BB20", "B9A8");
mappingTable.set("BB29", "B9A9");
mappingTable.set("BB2B", "B9AA");
mappingTable.set("BB34", "B9AB");
mappingTable.set("BB35", "B9AC");
mappingTable.set("BB36", "B9AD");
mappingTable.set("BB38", "B9AE");
mappingTable.set("BB3B", "B9AF");
mappingTable.set("BB3C", "B9B0");
mappingTable.set("BB3D", "B9B1");
mappingTable.set("BB3E", "B9B2");
mappingTable.set("BB44", "B9B3");
mappingTable.set("BB45", "B9B4");
mappingTable.set("BB47", "B9B5");
mappingTable.set("BB49", "B9B6");
mappingTable.set("BB4D", "B9B7");
mappingTable.set("BB4F", "B9B8");
mappingTable.set("BB50", "B9B9");
mappingTable.set("BB54", "B9BA");
mappingTable.set("BB58", "B9BB");
mappingTable.set("BB61", "B9BC");
mappingTable.set("BB63", "B9BD");
mappingTable.set("BB6C", "B9BE");
mappingTable.set("BB88", "B9BF");
mappingTable.set("BB8C", "B9C0");
mappingTable.set("BB90", "B9C1");
mappingTable.set("BBA4", "B9C2");
mappingTable.set("BBA8", "B9C3");
mappingTable.set("BBAC", "B9C4");
mappingTable.set("BBB4", "B9C5");
mappingTable.set("BBB7", "B9C6");
mappingTable.set("BBC0", "B9C7");
mappingTable.set("BBC4", "B9C8");
mappingTable.set("BBC8", "B9C9");
mappingTable.set("BBD0", "B9CA");
mappingTable.set("BBD3", "B9CB");
mappingTable.set("BBF8", "B9CC");
mappingTable.set("BBF9", "B9CD");
mappingTable.set("BBFC", "B9CE");
mappingTable.set("BBFF", "B9CF");
mappingTable.set("BC00", "B9D0");
mappingTable.set("BC02", "B9D1");
mappingTable.set("BC08", "B9D2");
mappingTable.set("BC09", "B9D3");
mappingTable.set("BC0B", "B9D4");
mappingTable.set("BC0C", "B9D5");
mappingTable.set("BC0D", "B9D6");
mappingTable.set("BC0F", "B9D7");
mappingTable.set("BC11", "B9D8");
mappingTable.set("BC14", "B9D9");
mappingTable.set("BC15", "B9DA");
mappingTable.set("BC16", "B9DB");
mappingTable.set("BC17", "B9DC");
mappingTable.set("BC18", "B9DD");
mappingTable.set("BC1B", "B9DE");
mappingTable.set("BC1C", "B9DF");
mappingTable.set("BC1D", "B9E0");
mappingTable.set("BC1E", "B9E1");
mappingTable.set("BC1F", "B9E2");
mappingTable.set("BC24", "B9E3");
mappingTable.set("BC25", "B9E4");
mappingTable.set("BC27", "B9E5");
mappingTable.set("BC29", "B9E6");
mappingTable.set("BC2D", "B9E7");
mappingTable.set("BC30", "B9E8");
mappingTable.set("BC31", "B9E9");
mappingTable.set("BC34", "B9EA");
mappingTable.set("BC38", "B9EB");
mappingTable.set("BC40", "B9EC");
mappingTable.set("BC41", "B9ED");
mappingTable.set("BC43", "B9EE");
mappingTable.set("BC44", "B9EF");
mappingTable.set("BC45", "B9F0");
mappingTable.set("BC49", "B9F1");
mappingTable.set("BC4C", "B9F2");
mappingTable.set("BC4D", "B9F3");
mappingTable.set("BC50", "B9F4");
mappingTable.set("BC5D", "B9F5");
mappingTable.set("BC84", "B9F6");
mappingTable.set("BC85", "B9F7");
mappingTable.set("BC88", "B9F8");
mappingTable.set("BC8B", "B9F9");
mappingTable.set("BC8C", "B9FA");
mappingTable.set("BC8E", "B9FB");
mappingTable.set("BC94", "B9FC");
mappingTable.set("BC95", "B9FD");
mappingTable.set("BC97", "B9FE");
mappingTable.set("D28D", "BA41");
mappingTable.set("D28E", "BA42");
mappingTable.set("D28F", "BA43");
mappingTable.set("D292", "BA44");
mappingTable.set("D293", "BA45");
mappingTable.set("D294", "BA46");
mappingTable.set("D296", "BA47");
mappingTable.set("D297", "BA48");
mappingTable.set("D298", "BA49");
mappingTable.set("D299", "BA4A");
mappingTable.set("D29A", "BA4B");
mappingTable.set("D29B", "BA4C");
mappingTable.set("D29D", "BA4D");
mappingTable.set("D29E", "BA4E");
mappingTable.set("D29F", "BA4F");
mappingTable.set("D2A1", "BA50");
mappingTable.set("D2A2", "BA51");
mappingTable.set("D2A3", "BA52");
mappingTable.set("D2A5", "BA53");
mappingTable.set("D2A6", "BA54");
mappingTable.set("D2A7", "BA55");
mappingTable.set("D2A8", "BA56");
mappingTable.set("D2A9", "BA57");
mappingTable.set("D2AA", "BA58");
mappingTable.set("D2AB", "BA59");
mappingTable.set("D2AD", "BA5A");
mappingTable.set("D2AE", "BA61");
mappingTable.set("D2AF", "BA62");
mappingTable.set("D2B0", "BA63");
mappingTable.set("D2B2", "BA64");
mappingTable.set("D2B3", "BA65");
mappingTable.set("D2B4", "BA66");
mappingTable.set("D2B5", "BA67");
mappingTable.set("D2B6", "BA68");
mappingTable.set("D2B7", "BA69");
mappingTable.set("D2BA", "BA6A");
mappingTable.set("D2BB", "BA6B");
mappingTable.set("D2BD", "BA6C");
mappingTable.set("D2BE", "BA6D");
mappingTable.set("D2C1", "BA6E");
mappingTable.set("D2C3", "BA6F");
mappingTable.set("D2C4", "BA70");
mappingTable.set("D2C5", "BA71");
mappingTable.set("D2C6", "BA72");
mappingTable.set("D2C7", "BA73");
mappingTable.set("D2CA", "BA74");
mappingTable.set("D2CC", "BA75");
mappingTable.set("D2CD", "BA76");
mappingTable.set("D2CE", "BA77");
mappingTable.set("D2CF", "BA78");
mappingTable.set("D2D0", "BA79");
mappingTable.set("D2D1", "BA7A");
mappingTable.set("D2D2", "BA81");
mappingTable.set("D2D3", "BA82");
mappingTable.set("D2D5", "BA83");
mappingTable.set("D2D6", "BA84");
mappingTable.set("D2D7", "BA85");
mappingTable.set("D2D9", "BA86");
mappingTable.set("D2DA", "BA87");
mappingTable.set("D2DB", "BA88");
mappingTable.set("D2DD", "BA89");
mappingTable.set("D2DE", "BA8A");
mappingTable.set("D2DF", "BA8B");
mappingTable.set("D2E0", "BA8C");
mappingTable.set("D2E1", "BA8D");
mappingTable.set("D2E2", "BA8E");
mappingTable.set("D2E3", "BA8F");
mappingTable.set("D2E6", "BA90");
mappingTable.set("D2E7", "BA91");
mappingTable.set("D2E8", "BA92");
mappingTable.set("D2E9", "BA93");
mappingTable.set("D2EA", "BA94");
mappingTable.set("D2EB", "BA95");
mappingTable.set("D2EC", "BA96");
mappingTable.set("D2ED", "BA97");
mappingTable.set("D2EE", "BA98");
mappingTable.set("D2EF", "BA99");
mappingTable.set("D2F2", "BA9A");
mappingTable.set("D2F3", "BA9B");
mappingTable.set("D2F5", "BA9C");
mappingTable.set("D2F6", "BA9D");
mappingTable.set("D2F7", "BA9E");
mappingTable.set("D2F9", "BA9F");
mappingTable.set("D2FA", "BAA0");
mappingTable.set("BC99", "BAA1");
mappingTable.set("BC9A", "BAA2");
mappingTable.set("BCA0", "BAA3");
mappingTable.set("BCA1", "BAA4");
mappingTable.set("BCA4", "BAA5");
mappingTable.set("BCA7", "BAA6");
mappingTable.set("BCA8", "BAA7");
mappingTable.set("BCB0", "BAA8");
mappingTable.set("BCB1", "BAA9");
mappingTable.set("BCB3", "BAAA");
mappingTable.set("BCB4", "BAAB");
mappingTable.set("BCB5", "BAAC");
mappingTable.set("BCBC", "BAAD");
mappingTable.set("BCBD", "BAAE");
mappingTable.set("BCC0", "BAAF");
mappingTable.set("BCC4", "BAB0");
mappingTable.set("BCCD", "BAB1");
mappingTable.set("BCCF", "BAB2");
mappingTable.set("BCD0", "BAB3");
mappingTable.set("BCD1", "BAB4");
mappingTable.set("BCD5", "BAB5");
mappingTable.set("BCD8", "BAB6");
mappingTable.set("BCDC", "BAB7");
mappingTable.set("BCF4", "BAB8");
mappingTable.set("BCF5", "BAB9");
mappingTable.set("BCF6", "BABA");
mappingTable.set("BCF8", "BABB");
mappingTable.set("BCFC", "BABC");
mappingTable.set("BD04", "BABD");
mappingTable.set("BD05", "BABE");
mappingTable.set("BD07", "BABF");
mappingTable.set("BD09", "BAC0");
mappingTable.set("BD10", "BAC1");
mappingTable.set("BD14", "BAC2");
mappingTable.set("BD24", "BAC3");
mappingTable.set("BD2C", "BAC4");
mappingTable.set("BD40", "BAC5");
mappingTable.set("BD48", "BAC6");
mappingTable.set("BD49", "BAC7");
mappingTable.set("BD4C", "BAC8");
mappingTable.set("BD50", "BAC9");
mappingTable.set("BD58", "BACA");
mappingTable.set("BD59", "BACB");
mappingTable.set("BD64", "BACC");
mappingTable.set("BD68", "BACD");
mappingTable.set("BD80", "BACE");
mappingTable.set("BD81", "BACF");
mappingTable.set("BD84", "BAD0");
mappingTable.set("BD87", "BAD1");
mappingTable.set("BD88", "BAD2");
mappingTable.set("BD89", "BAD3");
mappingTable.set("BD8A", "BAD4");
mappingTable.set("BD90", "BAD5");
mappingTable.set("BD91", "BAD6");
mappingTable.set("BD93", "BAD7");
mappingTable.set("BD95", "BAD8");
mappingTable.set("BD99", "BAD9");
mappingTable.set("BD9A", "BADA");
mappingTable.set("BD9C", "BADB");
mappingTable.set("BDA4", "BADC");
mappingTable.set("BDB0", "BADD");
mappingTable.set("BDB8", "BADE");
mappingTable.set("BDD4", "BADF");
mappingTable.set("BDD5", "BAE0");
mappingTable.set("BDD8", "BAE1");
mappingTable.set("BDDC", "BAE2");
mappingTable.set("BDE9", "BAE3");
mappingTable.set("BDF0", "BAE4");
mappingTable.set("BDF4", "BAE5");
mappingTable.set("BDF8", "BAE6");
mappingTable.set("BE00", "BAE7");
mappingTable.set("BE03", "BAE8");
mappingTable.set("BE05", "BAE9");
mappingTable.set("BE0C", "BAEA");
mappingTable.set("BE0D", "BAEB");
mappingTable.set("BE10", "BAEC");
mappingTable.set("BE14", "BAED");
mappingTable.set("BE1C", "BAEE");
mappingTable.set("BE1D", "BAEF");
mappingTable.set("BE1F", "BAF0");
mappingTable.set("BE44", "BAF1");
mappingTable.set("BE45", "BAF2");
mappingTable.set("BE48", "BAF3");
mappingTable.set("BE4C", "BAF4");
mappingTable.set("BE4E", "BAF5");
mappingTable.set("BE54", "BAF6");
mappingTable.set("BE55", "BAF7");
mappingTable.set("BE57", "BAF8");
mappingTable.set("BE59", "BAF9");
mappingTable.set("BE5A", "BAFA");
mappingTable.set("BE5B", "BAFB");
mappingTable.set("BE60", "BAFC");
mappingTable.set("BE61", "BAFD");
mappingTable.set("BE64", "BAFE");
mappingTable.set("D2FB", "BB41");
mappingTable.set("D2FC", "BB42");
mappingTable.set("D2FD", "BB43");
mappingTable.set("D2FE", "BB44");
mappingTable.set("D2FF", "BB45");
mappingTable.set("D302", "BB46");
mappingTable.set("D304", "BB47");
mappingTable.set("D306", "BB48");
mappingTable.set("D307", "BB49");
mappingTable.set("D308", "BB4A");
mappingTable.set("D309", "BB4B");
mappingTable.set("D30A", "BB4C");
mappingTable.set("D30B", "BB4D");
mappingTable.set("D30F", "BB4E");
mappingTable.set("D311", "BB4F");
mappingTable.set("D312", "BB50");
mappingTable.set("D313", "BB51");
mappingTable.set("D315", "BB52");
mappingTable.set("D317", "BB53");
mappingTable.set("D318", "BB54");
mappingTable.set("D319", "BB55");
mappingTable.set("D31A", "BB56");
mappingTable.set("D31B", "BB57");
mappingTable.set("D31E", "BB58");
mappingTable.set("D322", "BB59");
mappingTable.set("D323", "BB5A");
mappingTable.set("D324", "BB61");
mappingTable.set("D326", "BB62");
mappingTable.set("D327", "BB63");
mappingTable.set("D32A", "BB64");
mappingTable.set("D32B", "BB65");
mappingTable.set("D32D", "BB66");
mappingTable.set("D32E", "BB67");
mappingTable.set("D32F", "BB68");
mappingTable.set("D331", "BB69");
mappingTable.set("D332", "BB6A");
mappingTable.set("D333", "BB6B");
mappingTable.set("D334", "BB6C");
mappingTable.set("D335", "BB6D");
mappingTable.set("D336", "BB6E");
mappingTable.set("D337", "BB6F");
mappingTable.set("D33A", "BB70");
mappingTable.set("D33E", "BB71");
mappingTable.set("D33F", "BB72");
mappingTable.set("D340", "BB73");
mappingTable.set("D341", "BB74");
mappingTable.set("D342", "BB75");
mappingTable.set("D343", "BB76");
mappingTable.set("D346", "BB77");
mappingTable.set("D347", "BB78");
mappingTable.set("D348", "BB79");
mappingTable.set("D349", "BB7A");
mappingTable.set("D34A", "BB81");
mappingTable.set("D34B", "BB82");
mappingTable.set("D34C", "BB83");
mappingTable.set("D34D", "BB84");
mappingTable.set("D34E", "BB85");
mappingTable.set("D34F", "BB86");
mappingTable.set("D350", "BB87");
mappingTable.set("D351", "BB88");
mappingTable.set("D352", "BB89");
mappingTable.set("D353", "BB8A");
mappingTable.set("D354", "BB8B");
mappingTable.set("D355", "BB8C");
mappingTable.set("D356", "BB8D");
mappingTable.set("D357", "BB8E");
mappingTable.set("D358", "BB8F");
mappingTable.set("D359", "BB90");
mappingTable.set("D35A", "BB91");
mappingTable.set("D35B", "BB92");
mappingTable.set("D35C", "BB93");
mappingTable.set("D35D", "BB94");
mappingTable.set("D35E", "BB95");
mappingTable.set("D35F", "BB96");
mappingTable.set("D360", "BB97");
mappingTable.set("D361", "BB98");
mappingTable.set("D362", "BB99");
mappingTable.set("D363", "BB9A");
mappingTable.set("D364", "BB9B");
mappingTable.set("D365", "BB9C");
mappingTable.set("D366", "BB9D");
mappingTable.set("D367", "BB9E");
mappingTable.set("D368", "BB9F");
mappingTable.set("D369", "BBA0");
mappingTable.set("BE68", "BBA1");
mappingTable.set("BE6A", "BBA2");
mappingTable.set("BE70", "BBA3");
mappingTable.set("BE71", "BBA4");
mappingTable.set("BE73", "BBA5");
mappingTable.set("BE74", "BBA6");
mappingTable.set("BE75", "BBA7");
mappingTable.set("BE7B", "BBA8");
mappingTable.set("BE7C", "BBA9");
mappingTable.set("BE7D", "BBAA");
mappingTable.set("BE80", "BBAB");
mappingTable.set("BE84", "BBAC");
mappingTable.set("BE8C", "BBAD");
mappingTable.set("BE8D", "BBAE");
mappingTable.set("BE8F", "BBAF");
mappingTable.set("BE90", "BBB0");
mappingTable.set("BE91", "BBB1");
mappingTable.set("BE98", "BBB2");
mappingTable.set("BE99", "BBB3");
mappingTable.set("BEA8", "BBB4");
mappingTable.set("BED0", "BBB5");
mappingTable.set("BED1", "BBB6");
mappingTable.set("BED4", "BBB7");
mappingTable.set("BED7", "BBB8");
mappingTable.set("BED8", "BBB9");
mappingTable.set("BEE0", "BBBA");
mappingTable.set("BEE3", "BBBB");
mappingTable.set("BEE4", "BBBC");
mappingTable.set("BEE5", "BBBD");
mappingTable.set("BEEC", "BBBE");
mappingTable.set("BF01", "BBBF");
mappingTable.set("BF08", "BBC0");
mappingTable.set("BF09", "BBC1");
mappingTable.set("BF18", "BBC2");
mappingTable.set("BF19", "BBC3");
mappingTable.set("BF1B", "BBC4");
mappingTable.set("BF1C", "BBC5");
mappingTable.set("BF1D", "BBC6");
mappingTable.set("BF40", "BBC7");
mappingTable.set("BF41", "BBC8");
mappingTable.set("BF44", "BBC9");
mappingTable.set("BF48", "BBCA");
mappingTable.set("BF50", "BBCB");
mappingTable.set("BF51", "BBCC");
mappingTable.set("BF55", "BBCD");
mappingTable.set("BF94", "BBCE");
mappingTable.set("BFB0", "BBCF");
mappingTable.set("BFC5", "BBD0");
mappingTable.set("BFCC", "BBD1");
mappingTable.set("BFCD", "BBD2");
mappingTable.set("BFD0", "BBD3");
mappingTable.set("BFD4", "BBD4");
mappingTable.set("BFDC", "BBD5");
mappingTable.set("BFDF", "BBD6");
mappingTable.set("BFE1", "BBD7");
mappingTable.set("C03C", "BBD8");
mappingTable.set("C051", "BBD9");
mappingTable.set("C058", "BBDA");
mappingTable.set("C05C", "BBDB");
mappingTable.set("C060", "BBDC");
mappingTable.set("C068", "BBDD");
mappingTable.set("C069", "BBDE");
mappingTable.set("C090", "BBDF");
mappingTable.set("C091", "BBE0");
mappingTable.set("C094", "BBE1");
mappingTable.set("C098", "BBE2");
mappingTable.set("C0A0", "BBE3");
mappingTable.set("C0A1", "BBE4");
mappingTable.set("C0A3", "BBE5");
mappingTable.set("C0A5", "BBE6");
mappingTable.set("C0AC", "BBE7");
mappingTable.set("C0AD", "BBE8");
mappingTable.set("C0AF", "BBE9");
mappingTable.set("C0B0", "BBEA");
mappingTable.set("C0B3", "BBEB");
mappingTable.set("C0B4", "BBEC");
mappingTable.set("C0B5", "BBED");
mappingTable.set("C0B6", "BBEE");
mappingTable.set("C0BC", "BBEF");
mappingTable.set("C0BD", "BBF0");
mappingTable.set("C0BF", "BBF1");
mappingTable.set("C0C0", "BBF2");
mappingTable.set("C0C1", "BBF3");
mappingTable.set("C0C5", "BBF4");
mappingTable.set("C0C8", "BBF5");
mappingTable.set("C0C9", "BBF6");
mappingTable.set("C0CC", "BBF7");
mappingTable.set("C0D0", "BBF8");
mappingTable.set("C0D8", "BBF9");
mappingTable.set("C0D9", "BBFA");
mappingTable.set("C0DB", "BBFB");
mappingTable.set("C0DC", "BBFC");
mappingTable.set("C0DD", "BBFD");
mappingTable.set("C0E4", "BBFE");
mappingTable.set("D36A", "BC41");
mappingTable.set("D36B", "BC42");
mappingTable.set("D36C", "BC43");
mappingTable.set("D36D", "BC44");
mappingTable.set("D36E", "BC45");
mappingTable.set("D36F", "BC46");
mappingTable.set("D370", "BC47");
mappingTable.set("D371", "BC48");
mappingTable.set("D372", "BC49");
mappingTable.set("D373", "BC4A");
mappingTable.set("D374", "BC4B");
mappingTable.set("D375", "BC4C");
mappingTable.set("D376", "BC4D");
mappingTable.set("D377", "BC4E");
mappingTable.set("D378", "BC4F");
mappingTable.set("D379", "BC50");
mappingTable.set("D37A", "BC51");
mappingTable.set("D37B", "BC52");
mappingTable.set("D37E", "BC53");
mappingTable.set("D37F", "BC54");
mappingTable.set("D381", "BC55");
mappingTable.set("D382", "BC56");
mappingTable.set("D383", "BC57");
mappingTable.set("D385", "BC58");
mappingTable.set("D386", "BC59");
mappingTable.set("D387", "BC5A");
mappingTable.set("D388", "BC61");
mappingTable.set("D389", "BC62");
mappingTable.set("D38A", "BC63");
mappingTable.set("D38B", "BC64");
mappingTable.set("D38E", "BC65");
mappingTable.set("D392", "BC66");
mappingTable.set("D393", "BC67");
mappingTable.set("D394", "BC68");
mappingTable.set("D395", "BC69");
mappingTable.set("D396", "BC6A");
mappingTable.set("D397", "BC6B");
mappingTable.set("D39A", "BC6C");
mappingTable.set("D39B", "BC6D");
mappingTable.set("D39D", "BC6E");
mappingTable.set("D39E", "BC6F");
mappingTable.set("D39F", "BC70");
mappingTable.set("D3A1", "BC71");
mappingTable.set("D3A2", "BC72");
mappingTable.set("D3A3", "BC73");
mappingTable.set("D3A4", "BC74");
mappingTable.set("D3A5", "BC75");
mappingTable.set("D3A6", "BC76");
mappingTable.set("D3A7", "BC77");
mappingTable.set("D3AA", "BC78");
mappingTable.set("D3AC", "BC79");
mappingTable.set("D3AE", "BC7A");
mappingTable.set("D3AF", "BC81");
mappingTable.set("D3B0", "BC82");
mappingTable.set("D3B1", "BC83");
mappingTable.set("D3B2", "BC84");
mappingTable.set("D3B3", "BC85");
mappingTable.set("D3B5", "BC86");
mappingTable.set("D3B6", "BC87");
mappingTable.set("D3B7", "BC88");
mappingTable.set("D3B9", "BC89");
mappingTable.set("D3BA", "BC8A");
mappingTable.set("D3BB", "BC8B");
mappingTable.set("D3BD", "BC8C");
mappingTable.set("D3BE", "BC8D");
mappingTable.set("D3BF", "BC8E");
mappingTable.set("D3C0", "BC8F");
mappingTable.set("D3C1", "BC90");
mappingTable.set("D3C2", "BC91");
mappingTable.set("D3C3", "BC92");
mappingTable.set("D3C6", "BC93");
mappingTable.set("D3C7", "BC94");
mappingTable.set("D3CA", "BC95");
mappingTable.set("D3CB", "BC96");
mappingTable.set("D3CC", "BC97");
mappingTable.set("D3CD", "BC98");
mappingTable.set("D3CE", "BC99");
mappingTable.set("D3CF", "BC9A");
mappingTable.set("D3D1", "BC9B");
mappingTable.set("D3D2", "BC9C");
mappingTable.set("D3D3", "BC9D");
mappingTable.set("D3D4", "BC9E");
mappingTable.set("D3D5", "BC9F");
mappingTable.set("D3D6", "BCA0");
mappingTable.set("C0E5", "BCA1");
mappingTable.set("C0E8", "BCA2");
mappingTable.set("C0EC", "BCA3");
mappingTable.set("C0F4", "BCA4");
mappingTable.set("C0F5", "BCA5");
mappingTable.set("C0F7", "BCA6");
mappingTable.set("C0F9", "BCA7");
mappingTable.set("C100", "BCA8");
mappingTable.set("C104", "BCA9");
mappingTable.set("C108", "BCAA");
mappingTable.set("C110", "BCAB");
mappingTable.set("C115", "BCAC");
mappingTable.set("C11C", "BCAD");
mappingTable.set("C11D", "BCAE");
mappingTable.set("C11E", "BCAF");
mappingTable.set("C11F", "BCB0");
mappingTable.set("C120", "BCB1");
mappingTable.set("C123", "BCB2");
mappingTable.set("C124", "BCB3");
mappingTable.set("C126", "BCB4");
mappingTable.set("C127", "BCB5");
mappingTable.set("C12C", "BCB6");
mappingTable.set("C12D", "BCB7");
mappingTable.set("C12F", "BCB8");
mappingTable.set("C130", "BCB9");
mappingTable.set("C131", "BCBA");
mappingTable.set("C136", "BCBB");
mappingTable.set("C138", "BCBC");
mappingTable.set("C139", "BCBD");
mappingTable.set("C13C", "BCBE");
mappingTable.set("C140", "BCBF");
mappingTable.set("C148", "BCC0");
mappingTable.set("C149", "BCC1");
mappingTable.set("C14B", "BCC2");
mappingTable.set("C14C", "BCC3");
mappingTable.set("C14D", "BCC4");
mappingTable.set("C154", "BCC5");
mappingTable.set("C155", "BCC6");
mappingTable.set("C158", "BCC7");
mappingTable.set("C15C", "BCC8");
mappingTable.set("C164", "BCC9");
mappingTable.set("C165", "BCCA");
mappingTable.set("C167", "BCCB");
mappingTable.set("C168", "BCCC");
mappingTable.set("C169", "BCCD");
mappingTable.set("C170", "BCCE");
mappingTable.set("C174", "BCCF");
mappingTable.set("C178", "BCD0");
mappingTable.set("C185", "BCD1");
mappingTable.set("C18C", "BCD2");
mappingTable.set("C18D", "BCD3");
mappingTable.set("C18E", "BCD4");
mappingTable.set("C190", "BCD5");
mappingTable.set("C194", "BCD6");
mappingTable.set("C196", "BCD7");
mappingTable.set("C19C", "BCD8");
mappingTable.set("C19D", "BCD9");
mappingTable.set("C19F", "BCDA");
mappingTable.set("C1A1", "BCDB");
mappingTable.set("C1A5", "BCDC");
mappingTable.set("C1A8", "BCDD");
mappingTable.set("C1A9", "BCDE");
mappingTable.set("C1AC", "BCDF");
mappingTable.set("C1B0", "BCE0");
mappingTable.set("C1BD", "BCE1");
mappingTable.set("C1C4", "BCE2");
mappingTable.set("C1C8", "BCE3");
mappingTable.set("C1CC", "BCE4");
mappingTable.set("C1D4", "BCE5");
mappingTable.set("C1D7", "BCE6");
mappingTable.set("C1D8", "BCE7");
mappingTable.set("C1E0", "BCE8");
mappingTable.set("C1E4", "BCE9");
mappingTable.set("C1E8", "BCEA");
mappingTable.set("C1F0", "BCEB");
mappingTable.set("C1F1", "BCEC");
mappingTable.set("C1F3", "BCED");
mappingTable.set("C1FC", "BCEE");
mappingTable.set("C1FD", "BCEF");
mappingTable.set("C200", "BCF0");
mappingTable.set("C204", "BCF1");
mappingTable.set("C20C", "BCF2");
mappingTable.set("C20D", "BCF3");
mappingTable.set("C20F", "BCF4");
mappingTable.set("C211", "BCF5");
mappingTable.set("C218", "BCF6");
mappingTable.set("C219", "BCF7");
mappingTable.set("C21C", "BCF8");
mappingTable.set("C21F", "BCF9");
mappingTable.set("C220", "BCFA");
mappingTable.set("C228", "BCFB");
mappingTable.set("C229", "BCFC");
mappingTable.set("C22B", "BCFD");
mappingTable.set("C22D", "BCFE");
mappingTable.set("D3D7", "BD41");
mappingTable.set("D3D9", "BD42");
mappingTable.set("D3DA", "BD43");
mappingTable.set("D3DB", "BD44");
mappingTable.set("D3DC", "BD45");
mappingTable.set("D3DD", "BD46");
mappingTable.set("D3DE", "BD47");
mappingTable.set("D3DF", "BD48");
mappingTable.set("D3E0", "BD49");
mappingTable.set("D3E2", "BD4A");
mappingTable.set("D3E4", "BD4B");
mappingTable.set("D3E5", "BD4C");
mappingTable.set("D3E6", "BD4D");
mappingTable.set("D3E7", "BD4E");
mappingTable.set("D3E8", "BD4F");
mappingTable.set("D3E9", "BD50");
mappingTable.set("D3EA", "BD51");
mappingTable.set("D3EB", "BD52");
mappingTable.set("D3EE", "BD53");
mappingTable.set("D3EF", "BD54");
mappingTable.set("D3F1", "BD55");
mappingTable.set("D3F2", "BD56");
mappingTable.set("D3F3", "BD57");
mappingTable.set("D3F5", "BD58");
mappingTable.set("D3F6", "BD59");
mappingTable.set("D3F7", "BD5A");
mappingTable.set("D3F8", "BD61");
mappingTable.set("D3F9", "BD62");
mappingTable.set("D3FA", "BD63");
mappingTable.set("D3FB", "BD64");
mappingTable.set("D3FE", "BD65");
mappingTable.set("D400", "BD66");
mappingTable.set("D402", "BD67");
mappingTable.set("D403", "BD68");
mappingTable.set("D404", "BD69");
mappingTable.set("D405", "BD6A");
mappingTable.set("D406", "BD6B");
mappingTable.set("D407", "BD6C");
mappingTable.set("D409", "BD6D");
mappingTable.set("D40A", "BD6E");
mappingTable.set("D40B", "BD6F");
mappingTable.set("D40C", "BD70");
mappingTable.set("D40D", "BD71");
mappingTable.set("D40E", "BD72");
mappingTable.set("D40F", "BD73");
mappingTable.set("D410", "BD74");
mappingTable.set("D411", "BD75");
mappingTable.set("D412", "BD76");
mappingTable.set("D413", "BD77");
mappingTable.set("D414", "BD78");
mappingTable.set("D415", "BD79");
mappingTable.set("D416", "BD7A");
mappingTable.set("D417", "BD81");
mappingTable.set("D418", "BD82");
mappingTable.set("D419", "BD83");
mappingTable.set("D41A", "BD84");
mappingTable.set("D41B", "BD85");
mappingTable.set("D41C", "BD86");
mappingTable.set("D41E", "BD87");
mappingTable.set("D41F", "BD88");
mappingTable.set("D420", "BD89");
mappingTable.set("D421", "BD8A");
mappingTable.set("D422", "BD8B");
mappingTable.set("D423", "BD8C");
mappingTable.set("D424", "BD8D");
mappingTable.set("D425", "BD8E");
mappingTable.set("D426", "BD8F");
mappingTable.set("D427", "BD90");
mappingTable.set("D428", "BD91");
mappingTable.set("D429", "BD92");
mappingTable.set("D42A", "BD93");
mappingTable.set("D42B", "BD94");
mappingTable.set("D42C", "BD95");
mappingTable.set("D42D", "BD96");
mappingTable.set("D42E", "BD97");
mappingTable.set("D42F", "BD98");
mappingTable.set("D430", "BD99");
mappingTable.set("D431", "BD9A");
mappingTable.set("D432", "BD9B");
mappingTable.set("D433", "BD9C");
mappingTable.set("D434", "BD9D");
mappingTable.set("D435", "BD9E");
mappingTable.set("D436", "BD9F");
mappingTable.set("D437", "BDA0");
mappingTable.set("C22F", "BDA1");
mappingTable.set("C231", "BDA2");
mappingTable.set("C232", "BDA3");
mappingTable.set("C234", "BDA4");
mappingTable.set("C248", "BDA5");
mappingTable.set("C250", "BDA6");
mappingTable.set("C251", "BDA7");
mappingTable.set("C254", "BDA8");
mappingTable.set("C258", "BDA9");
mappingTable.set("C260", "BDAA");
mappingTable.set("C265", "BDAB");
mappingTable.set("C26C", "BDAC");
mappingTable.set("C26D", "BDAD");
mappingTable.set("C270", "BDAE");
mappingTable.set("C274", "BDAF");
mappingTable.set("C27C", "BDB0");
mappingTable.set("C27D", "BDB1");
mappingTable.set("C27F", "BDB2");
mappingTable.set("C281", "BDB3");
mappingTable.set("C288", "BDB4");
mappingTable.set("C289", "BDB5");
mappingTable.set("C290", "BDB6");
mappingTable.set("C298", "BDB7");
mappingTable.set("C29B", "BDB8");
mappingTable.set("C29D", "BDB9");
mappingTable.set("C2A4", "BDBA");
mappingTable.set("C2A5", "BDBB");
mappingTable.set("C2A8", "BDBC");
mappingTable.set("C2AC", "BDBD");
mappingTable.set("C2AD", "BDBE");
mappingTable.set("C2B4", "BDBF");
mappingTable.set("C2B5", "BDC0");
mappingTable.set("C2B7", "BDC1");
mappingTable.set("C2B9", "BDC2");
mappingTable.set("C2DC", "BDC3");
mappingTable.set("C2DD", "BDC4");
mappingTable.set("C2E0", "BDC5");
mappingTable.set("C2E3", "BDC6");
mappingTable.set("C2E4", "BDC7");
mappingTable.set("C2EB", "BDC8");
mappingTable.set("C2EC", "BDC9");
mappingTable.set("C2ED", "BDCA");
mappingTable.set("C2EF", "BDCB");
mappingTable.set("C2F1", "BDCC");
mappingTable.set("C2F6", "BDCD");
mappingTable.set("C2F8", "BDCE");
mappingTable.set("C2F9", "BDCF");
mappingTable.set("C2FB", "BDD0");
mappingTable.set("C2FC", "BDD1");
mappingTable.set("C300", "BDD2");
mappingTable.set("C308", "BDD3");
mappingTable.set("C309", "BDD4");
mappingTable.set("C30C", "BDD5");
mappingTable.set("C30D", "BDD6");
mappingTable.set("C313", "BDD7");
mappingTable.set("C314", "BDD8");
mappingTable.set("C315", "BDD9");
mappingTable.set("C318", "BDDA");
mappingTable.set("C31C", "BDDB");
mappingTable.set("C324", "BDDC");
mappingTable.set("C325", "BDDD");
mappingTable.set("C328", "BDDE");
mappingTable.set("C329", "BDDF");
mappingTable.set("C345", "BDE0");
mappingTable.set("C368", "BDE1");
mappingTable.set("C369", "BDE2");
mappingTable.set("C36C", "BDE3");
mappingTable.set("C370", "BDE4");
mappingTable.set("C372", "BDE5");
mappingTable.set("C378", "BDE6");
mappingTable.set("C379", "BDE7");
mappingTable.set("C37C", "BDE8");
mappingTable.set("C37D", "BDE9");
mappingTable.set("C384", "BDEA");
mappingTable.set("C388", "BDEB");
mappingTable.set("C38C", "BDEC");
mappingTable.set("C3C0", "BDED");
mappingTable.set("C3D8", "BDEE");
mappingTable.set("C3D9", "BDEF");
mappingTable.set("C3DC", "BDF0");
mappingTable.set("C3DF", "BDF1");
mappingTable.set("C3E0", "BDF2");
mappingTable.set("C3E2", "BDF3");
mappingTable.set("C3E8", "BDF4");
mappingTable.set("C3E9", "BDF5");
mappingTable.set("C3ED", "BDF6");
mappingTable.set("C3F4", "BDF7");
mappingTable.set("C3F5", "BDF8");
mappingTable.set("C3F8", "BDF9");
mappingTable.set("C408", "BDFA");
mappingTable.set("C410", "BDFB");
mappingTable.set("C424", "BDFC");
mappingTable.set("C42C", "BDFD");
mappingTable.set("C430", "BDFE");
mappingTable.set("D438", "BE41");
mappingTable.set("D439", "BE42");
mappingTable.set("D43A", "BE43");
mappingTable.set("D43B", "BE44");
mappingTable.set("D43C", "BE45");
mappingTable.set("D43D", "BE46");
mappingTable.set("D43E", "BE47");
mappingTable.set("D43F", "BE48");
mappingTable.set("D441", "BE49");
mappingTable.set("D442", "BE4A");
mappingTable.set("D443", "BE4B");
mappingTable.set("D445", "BE4C");
mappingTable.set("D446", "BE4D");
mappingTable.set("D447", "BE4E");
mappingTable.set("D448", "BE4F");
mappingTable.set("D449", "BE50");
mappingTable.set("D44A", "BE51");
mappingTable.set("D44B", "BE52");
mappingTable.set("D44C", "BE53");
mappingTable.set("D44D", "BE54");
mappingTable.set("D44E", "BE55");
mappingTable.set("D44F", "BE56");
mappingTable.set("D450", "BE57");
mappingTable.set("D451", "BE58");
mappingTable.set("D452", "BE59");
mappingTable.set("D453", "BE5A");
mappingTable.set("D454", "BE61");
mappingTable.set("D455", "BE62");
mappingTable.set("D456", "BE63");
mappingTable.set("D457", "BE64");
mappingTable.set("D458", "BE65");
mappingTable.set("D459", "BE66");
mappingTable.set("D45A", "BE67");
mappingTable.set("D45B", "BE68");
mappingTable.set("D45D", "BE69");
mappingTable.set("D45E", "BE6A");
mappingTable.set("D45F", "BE6B");
mappingTable.set("D461", "BE6C");
mappingTable.set("D462", "BE6D");
mappingTable.set("D463", "BE6E");
mappingTable.set("D465", "BE6F");
mappingTable.set("D466", "BE70");
mappingTable.set("D467", "BE71");
mappingTable.set("D468", "BE72");
mappingTable.set("D469", "BE73");
mappingTable.set("D46A", "BE74");
mappingTable.set("D46B", "BE75");
mappingTable.set("D46C", "BE76");
mappingTable.set("D46E", "BE77");
mappingTable.set("D470", "BE78");
mappingTable.set("D471", "BE79");
mappingTable.set("D472", "BE7A");
mappingTable.set("D473", "BE81");
mappingTable.set("D474", "BE82");
mappingTable.set("D475", "BE83");
mappingTable.set("D476", "BE84");
mappingTable.set("D477", "BE85");
mappingTable.set("D47A", "BE86");
mappingTable.set("D47B", "BE87");
mappingTable.set("D47D", "BE88");
mappingTable.set("D47E", "BE89");
mappingTable.set("D481", "BE8A");
mappingTable.set("D483", "BE8B");
mappingTable.set("D484", "BE8C");
mappingTable.set("D485", "BE8D");
mappingTable.set("D486", "BE8E");
mappingTable.set("D487", "BE8F");
mappingTable.set("D48A", "BE90");
mappingTable.set("D48C", "BE91");
mappingTable.set("D48E", "BE92");
mappingTable.set("D48F", "BE93");
mappingTable.set("D490", "BE94");
mappingTable.set("D491", "BE95");
mappingTable.set("D492", "BE96");
mappingTable.set("D493", "BE97");
mappingTable.set("D495", "BE98");
mappingTable.set("D496", "BE99");
mappingTable.set("D497", "BE9A");
mappingTable.set("D498", "BE9B");
mappingTable.set("D499", "BE9C");
mappingTable.set("D49A", "BE9D");
mappingTable.set("D49B", "BE9E");
mappingTable.set("D49C", "BE9F");
mappingTable.set("D49D", "BEA0");
mappingTable.set("C434", "BEA1");
mappingTable.set("C43C", "BEA2");
mappingTable.set("C43D", "BEA3");
mappingTable.set("C448", "BEA4");
mappingTable.set("C464", "BEA5");
mappingTable.set("C465", "BEA6");
mappingTable.set("C468", "BEA7");
mappingTable.set("C46C", "BEA8");
mappingTable.set("C474", "BEA9");
mappingTable.set("C475", "BEAA");
mappingTable.set("C479", "BEAB");
mappingTable.set("C480", "BEAC");
mappingTable.set("C494", "BEAD");
mappingTable.set("C49C", "BEAE");
mappingTable.set("C4B8", "BEAF");
mappingTable.set("C4BC", "BEB0");
mappingTable.set("C4E9", "BEB1");
mappingTable.set("C4F0", "BEB2");
mappingTable.set("C4F1", "BEB3");
mappingTable.set("C4F4", "BEB4");
mappingTable.set("C4F8", "BEB5");
mappingTable.set("C4FA", "BEB6");
mappingTable.set("C4FF", "BEB7");
mappingTable.set("C500", "BEB8");
mappingTable.set("C501", "BEB9");
mappingTable.set("C50C", "BEBA");
mappingTable.set("C510", "BEBB");
mappingTable.set("C514", "BEBC");
mappingTable.set("C51C", "BEBD");
mappingTable.set("C528", "BEBE");
mappingTable.set("C529", "BEBF");
mappingTable.set("C52C", "BEC0");
mappingTable.set("C530", "BEC1");
mappingTable.set("C538", "BEC2");
mappingTable.set("C539", "BEC3");
mappingTable.set("C53B", "BEC4");
mappingTable.set("C53D", "BEC5");
mappingTable.set("C544", "BEC6");
mappingTable.set("C545", "BEC7");
mappingTable.set("C548", "BEC8");
mappingTable.set("C549", "BEC9");
mappingTable.set("C54A", "BECA");
mappingTable.set("C54C", "BECB");
mappingTable.set("C54D", "BECC");
mappingTable.set("C54E", "BECD");
mappingTable.set("C553", "BECE");
mappingTable.set("C554", "BECF");
mappingTable.set("C555", "BED0");
mappingTable.set("C557", "BED1");
mappingTable.set("C558", "BED2");
mappingTable.set("C559", "BED3");
mappingTable.set("C55D", "BED4");
mappingTable.set("C55E", "BED5");
mappingTable.set("C560", "BED6");
mappingTable.set("C561", "BED7");
mappingTable.set("C564", "BED8");
mappingTable.set("C568", "BED9");
mappingTable.set("C570", "BEDA");
mappingTable.set("C571", "BEDB");
mappingTable.set("C573", "BEDC");
mappingTable.set("C574", "BEDD");
mappingTable.set("C575", "BEDE");
mappingTable.set("C57C", "BEDF");
mappingTable.set("C57D", "BEE0");
mappingTable.set("C580", "BEE1");
mappingTable.set("C584", "BEE2");
mappingTable.set("C587", "BEE3");
mappingTable.set("C58C", "BEE4");
mappingTable.set("C58D", "BEE5");
mappingTable.set("C58F", "BEE6");
mappingTable.set("C591", "BEE7");
mappingTable.set("C595", "BEE8");
mappingTable.set("C597", "BEE9");
mappingTable.set("C598", "BEEA");
mappingTable.set("C59C", "BEEB");
mappingTable.set("C5A0", "BEEC");
mappingTable.set("C5A9", "BEED");
mappingTable.set("C5B4", "BEEE");
mappingTable.set("C5B5", "BEEF");
mappingTable.set("C5B8", "BEF0");
mappingTable.set("C5B9", "BEF1");
mappingTable.set("C5BB", "BEF2");
mappingTable.set("C5BC", "BEF3");
mappingTable.set("C5BD", "BEF4");
mappingTable.set("C5BE", "BEF5");
mappingTable.set("C5C4", "BEF6");
mappingTable.set("C5C5", "BEF7");
mappingTable.set("C5C6", "BEF8");
mappingTable.set("C5C7", "BEF9");
mappingTable.set("C5C8", "BEFA");
mappingTable.set("C5C9", "BEFB");
mappingTable.set("C5CA", "BEFC");
mappingTable.set("C5CC", "BEFD");
mappingTable.set("C5CE", "BEFE");
mappingTable.set("D49E", "BF41");
mappingTable.set("D49F", "BF42");
mappingTable.set("D4A0", "BF43");
mappingTable.set("D4A1", "BF44");
mappingTable.set("D4A2", "BF45");
mappingTable.set("D4A3", "BF46");
mappingTable.set("D4A4", "BF47");
mappingTable.set("D4A5", "BF48");
mappingTable.set("D4A6", "BF49");
mappingTable.set("D4A7", "BF4A");
mappingTable.set("D4A8", "BF4B");
mappingTable.set("D4AA", "BF4C");
mappingTable.set("D4AB", "BF4D");
mappingTable.set("D4AC", "BF4E");
mappingTable.set("D4AD", "BF4F");
mappingTable.set("D4AE", "BF50");
mappingTable.set("D4AF", "BF51");
mappingTable.set("D4B0", "BF52");
mappingTable.set("D4B1", "BF53");
mappingTable.set("D4B2", "BF54");
mappingTable.set("D4B3", "BF55");
mappingTable.set("D4B4", "BF56");
mappingTable.set("D4B5", "BF57");
mappingTable.set("D4B6", "BF58");
mappingTable.set("D4B7", "BF59");
mappingTable.set("D4B8", "BF5A");
mappingTable.set("D4B9", "BF61");
mappingTable.set("D4BA", "BF62");
mappingTable.set("D4BB", "BF63");
mappingTable.set("D4BC", "BF64");
mappingTable.set("D4BD", "BF65");
mappingTable.set("D4BE", "BF66");
mappingTable.set("D4BF", "BF67");
mappingTable.set("D4C0", "BF68");
mappingTable.set("D4C1", "BF69");
mappingTable.set("D4C2", "BF6A");
mappingTable.set("D4C3", "BF6B");
mappingTable.set("D4C4", "BF6C");
mappingTable.set("D4C5", "BF6D");
mappingTable.set("D4C6", "BF6E");
mappingTable.set("D4C7", "BF6F");
mappingTable.set("D4C8", "BF70");
mappingTable.set("D4C9", "BF71");
mappingTable.set("D4CA", "BF72");
mappingTable.set("D4CB", "BF73");
mappingTable.set("D4CD", "BF74");
mappingTable.set("D4CE", "BF75");
mappingTable.set("D4CF", "BF76");
mappingTable.set("D4D1", "BF77");
mappingTable.set("D4D2", "BF78");
mappingTable.set("D4D3", "BF79");
mappingTable.set("D4D5", "BF7A");
mappingTable.set("D4D6", "BF81");
mappingTable.set("D4D7", "BF82");
mappingTable.set("D4D8", "BF83");
mappingTable.set("D4D9", "BF84");
mappingTable.set("D4DA", "BF85");
mappingTable.set("D4DB", "BF86");
mappingTable.set("D4DD", "BF87");
mappingTable.set("D4DE", "BF88");
mappingTable.set("D4E0", "BF89");
mappingTable.set("D4E1", "BF8A");
mappingTable.set("D4E2", "BF8B");
mappingTable.set("D4E3", "BF8C");
mappingTable.set("D4E4", "BF8D");
mappingTable.set("D4E5", "BF8E");
mappingTable.set("D4E6", "BF8F");
mappingTable.set("D4E7", "BF90");
mappingTable.set("D4E9", "BF91");
mappingTable.set("D4EA", "BF92");
mappingTable.set("D4EB", "BF93");
mappingTable.set("D4ED", "BF94");
mappingTable.set("D4EE", "BF95");
mappingTable.set("D4EF", "BF96");
mappingTable.set("D4F1", "BF97");
mappingTable.set("D4F2", "BF98");
mappingTable.set("D4F3", "BF99");
mappingTable.set("D4F4", "BF9A");
mappingTable.set("D4F5", "BF9B");
mappingTable.set("D4F6", "BF9C");
mappingTable.set("D4F7", "BF9D");
mappingTable.set("D4F9", "BF9E");
mappingTable.set("D4FA", "BF9F");
mappingTable.set("D4FC", "BFA0");
mappingTable.set("C5D0", "BFA1");
mappingTable.set("C5D1", "BFA2");
mappingTable.set("C5D4", "BFA3");
mappingTable.set("C5D8", "BFA4");
mappingTable.set("C5E0", "BFA5");
mappingTable.set("C5E1", "BFA6");
mappingTable.set("C5E3", "BFA7");
mappingTable.set("C5E5", "BFA8");
mappingTable.set("C5EC", "BFA9");
mappingTable.set("C5ED", "BFAA");
mappingTable.set("C5EE", "BFAB");
mappingTable.set("C5F0", "BFAC");
mappingTable.set("C5F4", "BFAD");
mappingTable.set("C5F6", "BFAE");
mappingTable.set("C5F7", "BFAF");
mappingTable.set("C5FC", "BFB0");
mappingTable.set("C5FD", "BFB1");
mappingTable.set("C5FE", "BFB2");
mappingTable.set("C5FF", "BFB3");
mappingTable.set("C600", "BFB4");
mappingTable.set("C601", "BFB5");
mappingTable.set("C605", "BFB6");
mappingTable.set("C606", "BFB7");
mappingTable.set("C607", "BFB8");
mappingTable.set("C608", "BFB9");
mappingTable.set("C60C", "BFBA");
mappingTable.set("C610", "BFBB");
mappingTable.set("C618", "BFBC");
mappingTable.set("C619", "BFBD");
mappingTable.set("C61B", "BFBE");
mappingTable.set("C61C", "BFBF");
mappingTable.set("C624", "BFC0");
mappingTable.set("C625", "BFC1");
mappingTable.set("C628", "BFC2");
mappingTable.set("C62C", "BFC3");
mappingTable.set("C62D", "BFC4");
mappingTable.set("C62E", "BFC5");
mappingTable.set("C630", "BFC6");
mappingTable.set("C633", "BFC7");
mappingTable.set("C634", "BFC8");
mappingTable.set("C635", "BFC9");
mappingTable.set("C637", "BFCA");
mappingTable.set("C639", "BFCB");
mappingTable.set("C63B", "BFCC");
mappingTable.set("C640", "BFCD");
mappingTable.set("C641", "BFCE");
mappingTable.set("C644", "BFCF");
mappingTable.set("C648", "BFD0");
mappingTable.set("C650", "BFD1");
mappingTable.set("C651", "BFD2");
mappingTable.set("C653", "BFD3");
mappingTable.set("C654", "BFD4");
mappingTable.set("C655", "BFD5");
mappingTable.set("C65C", "BFD6");
mappingTable.set("C65D", "BFD7");
mappingTable.set("C660", "BFD8");
mappingTable.set("C66C", "BFD9");
mappingTable.set("C66F", "BFDA");
mappingTable.set("C671", "BFDB");
mappingTable.set("C678", "BFDC");
mappingTable.set("C679", "BFDD");
mappingTable.set("C67C", "BFDE");
mappingTable.set("C680", "BFDF");
mappingTable.set("C688", "BFE0");
mappingTable.set("C689", "BFE1");
mappingTable.set("C68B", "BFE2");
mappingTable.set("C68D", "BFE3");
mappingTable.set("C694", "BFE4");
mappingTable.set("C695", "BFE5");
mappingTable.set("C698", "BFE6");
mappingTable.set("C69C", "BFE7");
mappingTable.set("C6A4", "BFE8");
mappingTable.set("C6A5", "BFE9");
mappingTable.set("C6A7", "BFEA");
mappingTable.set("C6A9", "BFEB");
mappingTable.set("C6B0", "BFEC");
mappingTable.set("C6B1", "BFED");
mappingTable.set("C6B4", "BFEE");
mappingTable.set("C6B8", "BFEF");
mappingTable.set("C6B9", "BFF0");
mappingTable.set("C6BA", "BFF1");
mappingTable.set("C6C0", "BFF2");
mappingTable.set("C6C1", "BFF3");
mappingTable.set("C6C3", "BFF4");
mappingTable.set("C6C5", "BFF5");
mappingTable.set("C6CC", "BFF6");
mappingTable.set("C6CD", "BFF7");
mappingTable.set("C6D0", "BFF8");
mappingTable.set("C6D4", "BFF9");
mappingTable.set("C6DC", "BFFA");
mappingTable.set("C6DD", "BFFB");
mappingTable.set("C6E0", "BFFC");
mappingTable.set("C6E1", "BFFD");
mappingTable.set("C6E8", "BFFE");
mappingTable.set("D4FE", "C041");
mappingTable.set("D4FF", "C042");
mappingTable.set("D500", "C043");
mappingTable.set("D501", "C044");
mappingTable.set("D502", "C045");
mappingTable.set("D503", "C046");
mappingTable.set("D505", "C047");
mappingTable.set("D506", "C048");
mappingTable.set("D507", "C049");
mappingTable.set("D509", "C04A");
mappingTable.set("D50A", "C04B");
mappingTable.set("D50B", "C04C");
mappingTable.set("D50D", "C04D");
mappingTable.set("D50E", "C04E");
mappingTable.set("D50F", "C04F");
mappingTable.set("D510", "C050");
mappingTable.set("D511", "C051");
mappingTable.set("D512", "C052");
mappingTable.set("D513", "C053");
mappingTable.set("D516", "C054");
mappingTable.set("D518", "C055");
mappingTable.set("D519", "C056");
mappingTable.set("D51A", "C057");
mappingTable.set("D51B", "C058");
mappingTable.set("D51C", "C059");
mappingTable.set("D51D", "C05A");
mappingTable.set("D51E", "C061");
mappingTable.set("D51F", "C062");
mappingTable.set("D520", "C063");
mappingTable.set("D521", "C064");
mappingTable.set("D522", "C065");
mappingTable.set("D523", "C066");
mappingTable.set("D524", "C067");
mappingTable.set("D525", "C068");
mappingTable.set("D526", "C069");
mappingTable.set("D527", "C06A");
mappingTable.set("D528", "C06B");
mappingTable.set("D529", "C06C");
mappingTable.set("D52A", "C06D");
mappingTable.set("D52B", "C06E");
mappingTable.set("D52C", "C06F");
mappingTable.set("D52D", "C070");
mappingTable.set("D52E", "C071");
mappingTable.set("D52F", "C072");
mappingTable.set("D530", "C073");
mappingTable.set("D531", "C074");
mappingTable.set("D532", "C075");
mappingTable.set("D533", "C076");
mappingTable.set("D534", "C077");
mappingTable.set("D535", "C078");
mappingTable.set("D536", "C079");
mappingTable.set("D537", "C07A");
mappingTable.set("D538", "C081");
mappingTable.set("D539", "C082");
mappingTable.set("D53A", "C083");
mappingTable.set("D53B", "C084");
mappingTable.set("D53E", "C085");
mappingTable.set("D53F", "C086");
mappingTable.set("D541", "C087");
mappingTable.set("D542", "C088");
mappingTable.set("D543", "C089");
mappingTable.set("D545", "C08A");
mappingTable.set("D546", "C08B");
mappingTable.set("D547", "C08C");
mappingTable.set("D548", "C08D");
mappingTable.set("D549", "C08E");
mappingTable.set("D54A", "C08F");
mappingTable.set("D54B", "C090");
mappingTable.set("D54E", "C091");
mappingTable.set("D550", "C092");
mappingTable.set("D552", "C093");
mappingTable.set("D553", "C094");
mappingTable.set("D554", "C095");
mappingTable.set("D555", "C096");
mappingTable.set("D556", "C097");
mappingTable.set("D557", "C098");
mappingTable.set("D55A", "C099");
mappingTable.set("D55B", "C09A");
mappingTable.set("D55D", "C09B");
mappingTable.set("D55E", "C09C");
mappingTable.set("D55F", "C09D");
mappingTable.set("D561", "C09E");
mappingTable.set("D562", "C09F");
mappingTable.set("D563", "C0A0");
mappingTable.set("C6E9", "C0A1");
mappingTable.set("C6EC", "C0A2");
mappingTable.set("C6F0", "C0A3");
mappingTable.set("C6F8", "C0A4");
mappingTable.set("C6F9", "C0A5");
mappingTable.set("C6FD", "C0A6");
mappingTable.set("C704", "C0A7");
mappingTable.set("C705", "C0A8");
mappingTable.set("C708", "C0A9");
mappingTable.set("C70C", "C0AA");
mappingTable.set("C714", "C0AB");
mappingTable.set("C715", "C0AC");
mappingTable.set("C717", "C0AD");
mappingTable.set("C719", "C0AE");
mappingTable.set("C720", "C0AF");
mappingTable.set("C721", "C0B0");
mappingTable.set("C724", "C0B1");
mappingTable.set("C728", "C0B2");
mappingTable.set("C730", "C0B3");
mappingTable.set("C731", "C0B4");
mappingTable.set("C733", "C0B5");
mappingTable.set("C735", "C0B6");
mappingTable.set("C737", "C0B7");
mappingTable.set("C73C", "C0B8");
mappingTable.set("C73D", "C0B9");
mappingTable.set("C740", "C0BA");
mappingTable.set("C744", "C0BB");
mappingTable.set("C74A", "C0BC");
mappingTable.set("C74C", "C0BD");
mappingTable.set("C74D", "C0BE");
mappingTable.set("C74F", "C0BF");
mappingTable.set("C751", "C0C0");
mappingTable.set("C752", "C0C1");
mappingTable.set("C753", "C0C2");
mappingTable.set("C754", "C0C3");
mappingTable.set("C755", "C0C4");
mappingTable.set("C756", "C0C5");
mappingTable.set("C757", "C0C6");
mappingTable.set("C758", "C0C7");
mappingTable.set("C75C", "C0C8");
mappingTable.set("C760", "C0C9");
mappingTable.set("C768", "C0CA");
mappingTable.set("C76B", "C0CB");
mappingTable.set("C774", "C0CC");
mappingTable.set("C775", "C0CD");
mappingTable.set("C778", "C0CE");
mappingTable.set("C77C", "C0CF");
mappingTable.set("C77D", "C0D0");
mappingTable.set("C77E", "C0D1");
mappingTable.set("C783", "C0D2");
mappingTable.set("C784", "C0D3");
mappingTable.set("C785", "C0D4");
mappingTable.set("C787", "C0D5");
mappingTable.set("C788", "C0D6");
mappingTable.set("C789", "C0D7");
mappingTable.set("C78A", "C0D8");
mappingTable.set("C78E", "C0D9");
mappingTable.set("C790", "C0DA");
mappingTable.set("C791", "C0DB");
mappingTable.set("C794", "C0DC");
mappingTable.set("C796", "C0DD");
mappingTable.set("C797", "C0DE");
mappingTable.set("C798", "C0DF");
mappingTable.set("C79A", "C0E0");
mappingTable.set("C7A0", "C0E1");
mappingTable.set("C7A1", "C0E2");
mappingTable.set("C7A3", "C0E3");
mappingTable.set("C7A4", "C0E4");
mappingTable.set("C7A5", "C0E5");
mappingTable.set("C7A6", "C0E6");
mappingTable.set("C7AC", "C0E7");
mappingTable.set("C7AD", "C0E8");
mappingTable.set("C7B0", "C0E9");
mappingTable.set("C7B4", "C0EA");
mappingTable.set("C7BC", "C0EB");
mappingTable.set("C7BD", "C0EC");
mappingTable.set("C7BF", "C0ED");
mappingTable.set("C7C0", "C0EE");
mappingTable.set("C7C1", "C0EF");
mappingTable.set("C7C8", "C0F0");
mappingTable.set("C7C9", "C0F1");
mappingTable.set("C7CC", "C0F2");
mappingTable.set("C7CE", "C0F3");
mappingTable.set("C7D0", "C0F4");
mappingTable.set("C7D8", "C0F5");
mappingTable.set("C7DD", "C0F6");
mappingTable.set("C7E4", "C0F7");
mappingTable.set("C7E8", "C0F8");
mappingTable.set("C7EC", "C0F9");
mappingTable.set("C800", "C0FA");
mappingTable.set("C801", "C0FB");
mappingTable.set("C804", "C0FC");
mappingTable.set("C808", "C0FD");
mappingTable.set("C80A", "C0FE");
mappingTable.set("D564", "C141");
mappingTable.set("D566", "C142");
mappingTable.set("D567", "C143");
mappingTable.set("D56A", "C144");
mappingTable.set("D56C", "C145");
mappingTable.set("D56E", "C146");
mappingTable.set("D56F", "C147");
mappingTable.set("D570", "C148");
mappingTable.set("D571", "C149");
mappingTable.set("D572", "C14A");
mappingTable.set("D573", "C14B");
mappingTable.set("D576", "C14C");
mappingTable.set("D577", "C14D");
mappingTable.set("D579", "C14E");
mappingTable.set("D57A", "C14F");
mappingTable.set("D57B", "C150");
mappingTable.set("D57D", "C151");
mappingTable.set("D57E", "C152");
mappingTable.set("D57F", "C153");
mappingTable.set("D580", "C154");
mappingTable.set("D581", "C155");
mappingTable.set("D582", "C156");
mappingTable.set("D583", "C157");
mappingTable.set("D586", "C158");
mappingTable.set("D58A", "C159");
mappingTable.set("D58B", "C15A");
mappingTable.set("D58C", "C161");
mappingTable.set("D58D", "C162");
mappingTable.set("D58E", "C163");
mappingTable.set("D58F", "C164");
mappingTable.set("D591", "C165");
mappingTable.set("D592", "C166");
mappingTable.set("D593", "C167");
mappingTable.set("D594", "C168");
mappingTable.set("D595", "C169");
mappingTable.set("D596", "C16A");
mappingTable.set("D597", "C16B");
mappingTable.set("D598", "C16C");
mappingTable.set("D599", "C16D");
mappingTable.set("D59A", "C16E");
mappingTable.set("D59B", "C16F");
mappingTable.set("D59C", "C170");
mappingTable.set("D59D", "C171");
mappingTable.set("D59E", "C172");
mappingTable.set("D59F", "C173");
mappingTable.set("D5A0", "C174");
mappingTable.set("D5A1", "C175");
mappingTable.set("D5A2", "C176");
mappingTable.set("D5A3", "C177");
mappingTable.set("D5A4", "C178");
mappingTable.set("D5A6", "C179");
mappingTable.set("D5A7", "C17A");
mappingTable.set("D5A8", "C181");
mappingTable.set("D5A9", "C182");
mappingTable.set("D5AA", "C183");
mappingTable.set("D5AB", "C184");
mappingTable.set("D5AC", "C185");
mappingTable.set("D5AD", "C186");
mappingTable.set("D5AE", "C187");
mappingTable.set("D5AF", "C188");
mappingTable.set("D5B0", "C189");
mappingTable.set("D5B1", "C18A");
mappingTable.set("D5B2", "C18B");
mappingTable.set("D5B3", "C18C");
mappingTable.set("D5B4", "C18D");
mappingTable.set("D5B5", "C18E");
mappingTable.set("D5B6", "C18F");
mappingTable.set("D5B7", "C190");
mappingTable.set("D5B8", "C191");
mappingTable.set("D5B9", "C192");
mappingTable.set("D5BA", "C193");
mappingTable.set("D5BB", "C194");
mappingTable.set("D5BC", "C195");
mappingTable.set("D5BD", "C196");
mappingTable.set("D5BE", "C197");
mappingTable.set("D5BF", "C198");
mappingTable.set("D5C0", "C199");
mappingTable.set("D5C1", "C19A");
mappingTable.set("D5C2", "C19B");
mappingTable.set("D5C3", "C19C");
mappingTable.set("D5C4", "C19D");
mappingTable.set("D5C5", "C19E");
mappingTable.set("D5C6", "C19F");
mappingTable.set("D5C7", "C1A0");
mappingTable.set("C810", "C1A1");
mappingTable.set("C811", "C1A2");
mappingTable.set("C813", "C1A3");
mappingTable.set("C815", "C1A4");
mappingTable.set("C816", "C1A5");
mappingTable.set("C81C", "C1A6");
mappingTable.set("C81D", "C1A7");
mappingTable.set("C820", "C1A8");
mappingTable.set("C824", "C1A9");
mappingTable.set("C82C", "C1AA");
mappingTable.set("C82D", "C1AB");
mappingTable.set("C82F", "C1AC");
mappingTable.set("C831", "C1AD");
mappingTable.set("C838", "C1AE");
mappingTable.set("C83C", "C1AF");
mappingTable.set("C840", "C1B0");
mappingTable.set("C848", "C1B1");
mappingTable.set("C849", "C1B2");
mappingTable.set("C84C", "C1B3");
mappingTable.set("C84D", "C1B4");
mappingTable.set("C854", "C1B5");
mappingTable.set("C870", "C1B6");
mappingTable.set("C871", "C1B7");
mappingTable.set("C874", "C1B8");
mappingTable.set("C878", "C1B9");
mappingTable.set("C87A", "C1BA");
mappingTable.set("C880", "C1BB");
mappingTable.set("C881", "C1BC");
mappingTable.set("C883", "C1BD");
mappingTable.set("C885", "C1BE");
mappingTable.set("C886", "C1BF");
mappingTable.set("C887", "C1C0");
mappingTable.set("C88B", "C1C1");
mappingTable.set("C88C", "C1C2");
mappingTable.set("C88D", "C1C3");
mappingTable.set("C894", "C1C4");
mappingTable.set("C89D", "C1C5");
mappingTable.set("C89F", "C1C6");
mappingTable.set("C8A1", "C1C7");
mappingTable.set("C8A8", "C1C8");
mappingTable.set("C8BC", "C1C9");
mappingTable.set("C8BD", "C1CA");
mappingTable.set("C8C4", "C1CB");
mappingTable.set("C8C8", "C1CC");
mappingTable.set("C8CC", "C1CD");
mappingTable.set("C8D4", "C1CE");
mappingTable.set("C8D5", "C1CF");
mappingTable.set("C8D7", "C1D0");
mappingTable.set("C8D9", "C1D1");
mappingTable.set("C8E0", "C1D2");
mappingTable.set("C8E1", "C1D3");
mappingTable.set("C8E4", "C1D4");
mappingTable.set("C8F5", "C1D5");
mappingTable.set("C8FC", "C1D6");
mappingTable.set("C8FD", "C1D7");
mappingTable.set("C900", "C1D8");
mappingTable.set("C904", "C1D9");
mappingTable.set("C905", "C1DA");
mappingTable.set("C906", "C1DB");
mappingTable.set("C90C", "C1DC");
mappingTable.set("C90D", "C1DD");
mappingTable.set("C90F", "C1DE");
mappingTable.set("C911", "C1DF");
mappingTable.set("C918", "C1E0");
mappingTable.set("C92C", "C1E1");
mappingTable.set("C934", "C1E2");
mappingTable.set("C950", "C1E3");
mappingTable.set("C951", "C1E4");
mappingTable.set("C954", "C1E5");
mappingTable.set("C958", "C1E6");
mappingTable.set("C960", "C1E7");
mappingTable.set("C961", "C1E8");
mappingTable.set("C963", "C1E9");
mappingTable.set("C96C", "C1EA");
mappingTable.set("C970", "C1EB");
mappingTable.set("C974", "C1EC");
mappingTable.set("C97C", "C1ED");
mappingTable.set("C988", "C1EE");
mappingTable.set("C989", "C1EF");
mappingTable.set("C98C", "C1F0");
mappingTable.set("C990", "C1F1");
mappingTable.set("C998", "C1F2");
mappingTable.set("C999", "C1F3");
mappingTable.set("C99B", "C1F4");
mappingTable.set("C99D", "C1F5");
mappingTable.set("C9C0", "C1F6");
mappingTable.set("C9C1", "C1F7");
mappingTable.set("C9C4", "C1F8");
mappingTable.set("C9C7", "C1F9");
mappingTable.set("C9C8", "C1FA");
mappingTable.set("C9CA", "C1FB");
mappingTable.set("C9D0", "C1FC");
mappingTable.set("C9D1", "C1FD");
mappingTable.set("C9D3", "C1FE");
mappingTable.set("D5CA", "C241");
mappingTable.set("D5CB", "C242");
mappingTable.set("D5CD", "C243");
mappingTable.set("D5CE", "C244");
mappingTable.set("D5CF", "C245");
mappingTable.set("D5D1", "C246");
mappingTable.set("D5D3", "C247");
mappingTable.set("D5D4", "C248");
mappingTable.set("D5D5", "C249");
mappingTable.set("D5D6", "C24A");
mappingTable.set("D5D7", "C24B");
mappingTable.set("D5DA", "C24C");
mappingTable.set("D5DC", "C24D");
mappingTable.set("D5DE", "C24E");
mappingTable.set("D5DF", "C24F");
mappingTable.set("D5E0", "C250");
mappingTable.set("D5E1", "C251");
mappingTable.set("D5E2", "C252");
mappingTable.set("D5E3", "C253");
mappingTable.set("D5E6", "C254");
mappingTable.set("D5E7", "C255");
mappingTable.set("D5E9", "C256");
mappingTable.set("D5EA", "C257");
mappingTable.set("D5EB", "C258");
mappingTable.set("D5ED", "C259");
mappingTable.set("D5EE", "C25A");
mappingTable.set("D5EF", "C261");
mappingTable.set("D5F0", "C262");
mappingTable.set("D5F1", "C263");
mappingTable.set("D5F2", "C264");
mappingTable.set("D5F3", "C265");
mappingTable.set("D5F6", "C266");
mappingTable.set("D5F8", "C267");
mappingTable.set("D5FA", "C268");
mappingTable.set("D5FB", "C269");
mappingTable.set("D5FC", "C26A");
mappingTable.set("D5FD", "C26B");
mappingTable.set("D5FE", "C26C");
mappingTable.set("D5FF", "C26D");
mappingTable.set("D602", "C26E");
mappingTable.set("D603", "C26F");
mappingTable.set("D605", "C270");
mappingTable.set("D606", "C271");
mappingTable.set("D607", "C272");
mappingTable.set("D609", "C273");
mappingTable.set("D60A", "C274");
mappingTable.set("D60B", "C275");
mappingTable.set("D60C", "C276");
mappingTable.set("D60D", "C277");
mappingTable.set("D60E", "C278");
mappingTable.set("D60F", "C279");
mappingTable.set("D612", "C27A");
mappingTable.set("D616", "C281");
mappingTable.set("D617", "C282");
mappingTable.set("D618", "C283");
mappingTable.set("D619", "C284");
mappingTable.set("D61A", "C285");
mappingTable.set("D61B", "C286");
mappingTable.set("D61D", "C287");
mappingTable.set("D61E", "C288");
mappingTable.set("D61F", "C289");
mappingTable.set("D621", "C28A");
mappingTable.set("D622", "C28B");
mappingTable.set("D623", "C28C");
mappingTable.set("D625", "C28D");
mappingTable.set("D626", "C28E");
mappingTable.set("D627", "C28F");
mappingTable.set("D628", "C290");
mappingTable.set("D629", "C291");
mappingTable.set("D62A", "C292");
mappingTable.set("D62B", "C293");
mappingTable.set("D62C", "C294");
mappingTable.set("D62E", "C295");
mappingTable.set("D62F", "C296");
mappingTable.set("D630", "C297");
mappingTable.set("D631", "C298");
mappingTable.set("D632", "C299");
mappingTable.set("D633", "C29A");
mappingTable.set("D634", "C29B");
mappingTable.set("D635", "C29C");
mappingTable.set("D636", "C29D");
mappingTable.set("D637", "C29E");
mappingTable.set("D63A", "C29F");
mappingTable.set("D63B", "C2A0");
mappingTable.set("C9D5", "C2A1");
mappingTable.set("C9D6", "C2A2");
mappingTable.set("C9D9", "C2A3");
mappingTable.set("C9DA", "C2A4");
mappingTable.set("C9DC", "C2A5");
mappingTable.set("C9DD", "C2A6");
mappingTable.set("C9E0", "C2A7");
mappingTable.set("C9E2", "C2A8");
mappingTable.set("C9E4", "C2A9");
mappingTable.set("C9E7", "C2AA");
mappingTable.set("C9EC", "C2AB");
mappingTable.set("C9ED", "C2AC");
mappingTable.set("C9EF", "C2AD");
mappingTable.set("C9F0", "C2AE");
mappingTable.set("C9F1", "C2AF");
mappingTable.set("C9F8", "C2B0");
mappingTable.set("C9F9", "C2B1");
mappingTable.set("C9FC", "C2B2");
mappingTable.set("CA00", "C2B3");
mappingTable.set("CA08", "C2B4");
mappingTable.set("CA09", "C2B5");
mappingTable.set("CA0B", "C2B6");
mappingTable.set("CA0C", "C2B7");
mappingTable.set("CA0D", "C2B8");
mappingTable.set("CA14", "C2B9");
mappingTable.set("CA18", "C2BA");
mappingTable.set("CA29", "C2BB");
mappingTable.set("CA4C", "C2BC");
mappingTable.set("CA4D", "C2BD");
mappingTable.set("CA50", "C2BE");
mappingTable.set("CA54", "C2BF");
mappingTable.set("CA5C", "C2C0");
mappingTable.set("CA5D", "C2C1");
mappingTable.set("CA5F", "C2C2");
mappingTable.set("CA60", "C2C3");
mappingTable.set("CA61", "C2C4");
mappingTable.set("CA68", "C2C5");
mappingTable.set("CA7D", "C2C6");
mappingTable.set("CA84", "C2C7");
mappingTable.set("CA98", "C2C8");
mappingTable.set("CABC", "C2C9");
mappingTable.set("CABD", "C2CA");
mappingTable.set("CAC0", "C2CB");
mappingTable.set("CAC4", "C2CC");
mappingTable.set("CACC", "C2CD");
mappingTable.set("CACD", "C2CE");
mappingTable.set("CACF", "C2CF");
mappingTable.set("CAD1", "C2D0");
mappingTable.set("CAD3", "C2D1");
mappingTable.set("CAD8", "C2D2");
mappingTable.set("CAD9", "C2D3");
mappingTable.set("CAE0", "C2D4");
mappingTable.set("CAEC", "C2D5");
mappingTable.set("CAF4", "C2D6");
mappingTable.set("CB08", "C2D7");
mappingTable.set("CB10", "C2D8");
mappingTable.set("CB14", "C2D9");
mappingTable.set("CB18", "C2DA");
mappingTable.set("CB20", "C2DB");
mappingTable.set("CB21", "C2DC");
mappingTable.set("CB41", "C2DD");
mappingTable.set("CB48", "C2DE");
mappingTable.set("CB49", "C2DF");
mappingTable.set("CB4C", "C2E0");
mappingTable.set("CB50", "C2E1");
mappingTable.set("CB58", "C2E2");
mappingTable.set("CB59", "C2E3");
mappingTable.set("CB5D", "C2E4");
mappingTable.set("CB64", "C2E5");
mappingTable.set("CB78", "C2E6");
mappingTable.set("CB79", "C2E7");
mappingTable.set("CB9C", "C2E8");
mappingTable.set("CBB8", "C2E9");
mappingTable.set("CBD4", "C2EA");
mappingTable.set("CBE4", "C2EB");
mappingTable.set("CBE7", "C2EC");
mappingTable.set("CBE9", "C2ED");
mappingTable.set("CC0C", "C2EE");
mappingTable.set("CC0D", "C2EF");
mappingTable.set("CC10", "C2F0");
mappingTable.set("CC14", "C2F1");
mappingTable.set("CC1C", "C2F2");
mappingTable.set("CC1D", "C2F3");
mappingTable.set("CC21", "C2F4");
mappingTable.set("CC22", "C2F5");
mappingTable.set("CC27", "C2F6");
mappingTable.set("CC28", "C2F7");
mappingTable.set("CC29", "C2F8");
mappingTable.set("CC2C", "C2F9");
mappingTable.set("CC2E", "C2FA");
mappingTable.set("CC30", "C2FB");
mappingTable.set("CC38", "C2FC");
mappingTable.set("CC39", "C2FD");
mappingTable.set("CC3B", "C2FE");
mappingTable.set("D63D", "C341");
mappingTable.set("D63E", "C342");
mappingTable.set("D63F", "C343");
mappingTable.set("D641", "C344");
mappingTable.set("D642", "C345");
mappingTable.set("D643", "C346");
mappingTable.set("D644", "C347");
mappingTable.set("D646", "C348");
mappingTable.set("D647", "C349");
mappingTable.set("D64A", "C34A");
mappingTable.set("D64C", "C34B");
mappingTable.set("D64E", "C34C");
mappingTable.set("D64F", "C34D");
mappingTable.set("D650", "C34E");
mappingTable.set("D652", "C34F");
mappingTable.set("D653", "C350");
mappingTable.set("D656", "C351");
mappingTable.set("D657", "C352");
mappingTable.set("D659", "C353");
mappingTable.set("D65A", "C354");
mappingTable.set("D65B", "C355");
mappingTable.set("D65D", "C356");
mappingTable.set("D65E", "C357");
mappingTable.set("D65F", "C358");
mappingTable.set("D660", "C359");
mappingTable.set("D661", "C35A");
mappingTable.set("D662", "C361");
mappingTable.set("D663", "C362");
mappingTable.set("D664", "C363");
mappingTable.set("D665", "C364");
mappingTable.set("D666", "C365");
mappingTable.set("D668", "C366");
mappingTable.set("D66A", "C367");
mappingTable.set("D66B", "C368");
mappingTable.set("D66C", "C369");
mappingTable.set("D66D", "C36A");
mappingTable.set("D66E", "C36B");
mappingTable.set("D66F", "C36C");
mappingTable.set("D672", "C36D");
mappingTable.set("D673", "C36E");
mappingTable.set("D675", "C36F");
mappingTable.set("D676", "C370");
mappingTable.set("D677", "C371");
mappingTable.set("D678", "C372");
mappingTable.set("D679", "C373");
mappingTable.set("D67A", "C374");
mappingTable.set("D67B", "C375");
mappingTable.set("D67C", "C376");
mappingTable.set("D67D", "C377");
mappingTable.set("D67E", "C378");
mappingTable.set("D67F", "C379");
mappingTable.set("D680", "C37A");
mappingTable.set("D681", "C381");
mappingTable.set("D682", "C382");
mappingTable.set("D684", "C383");
mappingTable.set("D686", "C384");
mappingTable.set("D687", "C385");
mappingTable.set("D688", "C386");
mappingTable.set("D689", "C387");
mappingTable.set("D68A", "C388");
mappingTable.set("D68B", "C389");
mappingTable.set("D68E", "C38A");
mappingTable.set("D68F", "C38B");
mappingTable.set("D691", "C38C");
mappingTable.set("D692", "C38D");
mappingTable.set("D693", "C38E");
mappingTable.set("D695", "C38F");
mappingTable.set("D696", "C390");
mappingTable.set("D697", "C391");
mappingTable.set("D698", "C392");
mappingTable.set("D699", "C393");
mappingTable.set("D69A", "C394");
mappingTable.set("D69B", "C395");
mappingTable.set("D69C", "C396");
mappingTable.set("D69E", "C397");
mappingTable.set("D6A0", "C398");
mappingTable.set("D6A2", "C399");
mappingTable.set("D6A3", "C39A");
mappingTable.set("D6A4", "C39B");
mappingTable.set("D6A5", "C39C");
mappingTable.set("D6A6", "C39D");
mappingTable.set("D6A7", "C39E");
mappingTable.set("D6A9", "C39F");
mappingTable.set("D6AA", "C3A0");
mappingTable.set("CC3C", "C3A1");
mappingTable.set("CC3D", "C3A2");
mappingTable.set("CC3E", "C3A3");
mappingTable.set("CC44", "C3A4");
mappingTable.set("CC45", "C3A5");
mappingTable.set("CC48", "C3A6");
mappingTable.set("CC4C", "C3A7");
mappingTable.set("CC54", "C3A8");
mappingTable.set("CC55", "C3A9");
mappingTable.set("CC57", "C3AA");
mappingTable.set("CC58", "C3AB");
mappingTable.set("CC59", "C3AC");
mappingTable.set("CC60", "C3AD");
mappingTable.set("CC64", "C3AE");
mappingTable.set("CC66", "C3AF");
mappingTable.set("CC68", "C3B0");
mappingTable.set("CC70", "C3B1");
mappingTable.set("CC75", "C3B2");
mappingTable.set("CC98", "C3B3");
mappingTable.set("CC99", "C3B4");
mappingTable.set("CC9C", "C3B5");
mappingTable.set("CCA0", "C3B6");
mappingTable.set("CCA8", "C3B7");
mappingTable.set("CCA9", "C3B8");
mappingTable.set("CCAB", "C3B9");
mappingTable.set("CCAC", "C3BA");
mappingTable.set("CCAD", "C3BB");
mappingTable.set("CCB4", "C3BC");
mappingTable.set("CCB5", "C3BD");
mappingTable.set("CCB8", "C3BE");
mappingTable.set("CCBC", "C3BF");
mappingTable.set("CCC4", "C3C0");
mappingTable.set("CCC5", "C3C1");
mappingTable.set("CCC7", "C3C2");
mappingTable.set("CCC9", "C3C3");
mappingTable.set("CCD0", "C3C4");
mappingTable.set("CCD4", "C3C5");
mappingTable.set("CCE4", "C3C6");
mappingTable.set("CCEC", "C3C7");
mappingTable.set("CCF0", "C3C8");
mappingTable.set("CD01", "C3C9");
mappingTable.set("CD08", "C3CA");
mappingTable.set("CD09", "C3CB");
mappingTable.set("CD0C", "C3CC");
mappingTable.set("CD10", "C3CD");
mappingTable.set("CD18", "C3CE");
mappingTable.set("CD19", "C3CF");
mappingTable.set("CD1B", "C3D0");
mappingTable.set("CD1D", "C3D1");
mappingTable.set("CD24", "C3D2");
mappingTable.set("CD28", "C3D3");
mappingTable.set("CD2C", "C3D4");
mappingTable.set("CD39", "C3D5");
mappingTable.set("CD5C", "C3D6");
mappingTable.set("CD60", "C3D7");
mappingTable.set("CD64", "C3D8");
mappingTable.set("CD6C", "C3D9");
mappingTable.set("CD6D", "C3DA");
mappingTable.set("CD6F", "C3DB");
mappingTable.set("CD71", "C3DC");
mappingTable.set("CD78", "C3DD");
mappingTable.set("CD88", "C3DE");
mappingTable.set("CD94", "C3DF");
mappingTable.set("CD95", "C3E0");
mappingTable.set("CD98", "C3E1");
mappingTable.set("CD9C", "C3E2");
mappingTable.set("CDA4", "C3E3");
mappingTable.set("CDA5", "C3E4");
mappingTable.set("CDA7", "C3E5");
mappingTable.set("CDA9", "C3E6");
mappingTable.set("CDB0", "C3E7");
mappingTable.set("CDC4", "C3E8");
mappingTable.set("CDCC", "C3E9");
mappingTable.set("CDD0", "C3EA");
mappingTable.set("CDE8", "C3EB");
mappingTable.set("CDEC", "C3EC");
mappingTable.set("CDF0", "C3ED");
mappingTable.set("CDF8", "C3EE");
mappingTable.set("CDF9", "C3EF");
mappingTable.set("CDFB", "C3F0");
mappingTable.set("CDFD", "C3F1");
mappingTable.set("CE04", "C3F2");
mappingTable.set("CE08", "C3F3");
mappingTable.set("CE0C", "C3F4");
mappingTable.set("CE14", "C3F5");
mappingTable.set("CE19", "C3F6");
mappingTable.set("CE20", "C3F7");
mappingTable.set("CE21", "C3F8");
mappingTable.set("CE24", "C3F9");
mappingTable.set("CE28", "C3FA");
mappingTable.set("CE30", "C3FB");
mappingTable.set("CE31", "C3FC");
mappingTable.set("CE33", "C3FD");
mappingTable.set("CE35", "C3FE");
mappingTable.set("D6AB", "C441");
mappingTable.set("D6AD", "C442");
mappingTable.set("D6AE", "C443");
mappingTable.set("D6AF", "C444");
mappingTable.set("D6B1", "C445");
mappingTable.set("D6B2", "C446");
mappingTable.set("D6B3", "C447");
mappingTable.set("D6B4", "C448");
mappingTable.set("D6B5", "C449");
mappingTable.set("D6B6", "C44A");
mappingTable.set("D6B7", "C44B");
mappingTable.set("D6B8", "C44C");
mappingTable.set("D6BA", "C44D");
mappingTable.set("D6BC", "C44E");
mappingTable.set("D6BD", "C44F");
mappingTable.set("D6BE", "C450");
mappingTable.set("D6BF", "C451");
mappingTable.set("D6C0", "C452");
mappingTable.set("D6C1", "C453");
mappingTable.set("D6C2", "C454");
mappingTable.set("D6C3", "C455");
mappingTable.set("D6C6", "C456");
mappingTable.set("D6C7", "C457");
mappingTable.set("D6C9", "C458");
mappingTable.set("D6CA", "C459");
mappingTable.set("D6CB", "C45A");
mappingTable.set("D6CD", "C461");
mappingTable.set("D6CE", "C462");
mappingTable.set("D6CF", "C463");
mappingTable.set("D6D0", "C464");
mappingTable.set("D6D2", "C465");
mappingTable.set("D6D3", "C466");
mappingTable.set("D6D5", "C467");
mappingTable.set("D6D6", "C468");
mappingTable.set("D6D8", "C469");
mappingTable.set("D6DA", "C46A");
mappingTable.set("D6DB", "C46B");
mappingTable.set("D6DC", "C46C");
mappingTable.set("D6DD", "C46D");
mappingTable.set("D6DE", "C46E");
mappingTable.set("D6DF", "C46F");
mappingTable.set("D6E1", "C470");
mappingTable.set("D6E2", "C471");
mappingTable.set("D6E3", "C472");
mappingTable.set("D6E5", "C473");
mappingTable.set("D6E6", "C474");
mappingTable.set("D6E7", "C475");
mappingTable.set("D6E9", "C476");
mappingTable.set("D6EA", "C477");
mappingTable.set("D6EB", "C478");
mappingTable.set("D6EC", "C479");
mappingTable.set("D6ED", "C47A");
mappingTable.set("D6EE", "C481");
mappingTable.set("D6EF", "C482");
mappingTable.set("D6F1", "C483");
mappingTable.set("D6F2", "C484");
mappingTable.set("D6F3", "C485");
mappingTable.set("D6F4", "C486");
mappingTable.set("D6F6", "C487");
mappingTable.set("D6F7", "C488");
mappingTable.set("D6F8", "C489");
mappingTable.set("D6F9", "C48A");
mappingTable.set("D6FA", "C48B");
mappingTable.set("D6FB", "C48C");
mappingTable.set("D6FE", "C48D");
mappingTable.set("D6FF", "C48E");
mappingTable.set("D701", "C48F");
mappingTable.set("D702", "C490");
mappingTable.set("D703", "C491");
mappingTable.set("D705", "C492");
mappingTable.set("D706", "C493");
mappingTable.set("D707", "C494");
mappingTable.set("D708", "C495");
mappingTable.set("D709", "C496");
mappingTable.set("D70A", "C497");
mappingTable.set("D70B", "C498");
mappingTable.set("D70C", "C499");
mappingTable.set("D70D", "C49A");
mappingTable.set("D70E", "C49B");
mappingTable.set("D70F", "C49C");
mappingTable.set("D710", "C49D");
mappingTable.set("D712", "C49E");
mappingTable.set("D713", "C49F");
mappingTable.set("D714", "C4A0");
mappingTable.set("CE58", "C4A1");
mappingTable.set("CE59", "C4A2");
mappingTable.set("CE5C", "C4A3");
mappingTable.set("CE5F", "C4A4");
mappingTable.set("CE60", "C4A5");
mappingTable.set("CE61", "C4A6");
mappingTable.set("CE68", "C4A7");
mappingTable.set("CE69", "C4A8");
mappingTable.set("CE6B", "C4A9");
mappingTable.set("CE6D", "C4AA");
mappingTable.set("CE74", "C4AB");
mappingTable.set("CE75", "C4AC");
mappingTable.set("CE78", "C4AD");
mappingTable.set("CE7C", "C4AE");
mappingTable.set("CE84", "C4AF");
mappingTable.set("CE85", "C4B0");
mappingTable.set("CE87", "C4B1");
mappingTable.set("CE89", "C4B2");
mappingTable.set("CE90", "C4B3");
mappingTable.set("CE91", "C4B4");
mappingTable.set("CE94", "C4B5");
mappingTable.set("CE98", "C4B6");
mappingTable.set("CEA0", "C4B7");
mappingTable.set("CEA1", "C4B8");
mappingTable.set("CEA3", "C4B9");
mappingTable.set("CEA4", "C4BA");
mappingTable.set("CEA5", "C4BB");
mappingTable.set("CEAC", "C4BC");
mappingTable.set("CEAD", "C4BD");
mappingTable.set("CEC1", "C4BE");
mappingTable.set("CEE4", "C4BF");
mappingTable.set("CEE5", "C4C0");
mappingTable.set("CEE8", "C4C1");
mappingTable.set("CEEB", "C4C2");
mappingTable.set("CEEC", "C4C3");
mappingTable.set("CEF4", "C4C4");
mappingTable.set("CEF5", "C4C5");
mappingTable.set("CEF7", "C4C6");
mappingTable.set("CEF8", "C4C7");
mappingTable.set("CEF9", "C4C8");
mappingTable.set("CF00", "C4C9");
mappingTable.set("CF01", "C4CA");
mappingTable.set("CF04", "C4CB");
mappingTable.set("CF08", "C4CC");
mappingTable.set("CF10", "C4CD");
mappingTable.set("CF11", "C4CE");
mappingTable.set("CF13", "C4CF");
mappingTable.set("CF15", "C4D0");
mappingTable.set("CF1C", "C4D1");
mappingTable.set("CF20", "C4D2");
mappingTable.set("CF24", "C4D3");
mappingTable.set("CF2C", "C4D4");
mappingTable.set("CF2D", "C4D5");
mappingTable.set("CF2F", "C4D6");
mappingTable.set("CF30", "C4D7");
mappingTable.set("CF31", "C4D8");
mappingTable.set("CF38", "C4D9");
mappingTable.set("CF54", "C4DA");
mappingTable.set("CF55", "C4DB");
mappingTable.set("CF58", "C4DC");
mappingTable.set("CF5C", "C4DD");
mappingTable.set("CF64", "C4DE");
mappingTable.set("CF65", "C4DF");
mappingTable.set("CF67", "C4E0");
mappingTable.set("CF69", "C4E1");
mappingTable.set("CF70", "C4E2");
mappingTable.set("CF71", "C4E3");
mappingTable.set("CF74", "C4E4");
mappingTable.set("CF78", "C4E5");
mappingTable.set("CF80", "C4E6");
mappingTable.set("CF85", "C4E7");
mappingTable.set("CF8C", "C4E8");
mappingTable.set("CFA1", "C4E9");
mappingTable.set("CFA8", "C4EA");
mappingTable.set("CFB0", "C4EB");
mappingTable.set("CFC4", "C4EC");
mappingTable.set("CFE0", "C4ED");
mappingTable.set("CFE1", "C4EE");
mappingTable.set("CFE4", "C4EF");
mappingTable.set("CFE8", "C4F0");
mappingTable.set("CFF0", "C4F1");
mappingTable.set("CFF1", "C4F2");
mappingTable.set("CFF3", "C4F3");
mappingTable.set("CFF5", "C4F4");
mappingTable.set("CFFC", "C4F5");
mappingTable.set("D000", "C4F6");
mappingTable.set("D004", "C4F7");
mappingTable.set("D011", "C4F8");
mappingTable.set("D018", "C4F9");
mappingTable.set("D02D", "C4FA");
mappingTable.set("D034", "C4FB");
mappingTable.set("D035", "C4FC");
mappingTable.set("D038", "C4FD");
mappingTable.set("D03C", "C4FE");
mappingTable.set("D715", "C541");
mappingTable.set("D716", "C542");
mappingTable.set("D717", "C543");
mappingTable.set("D71A", "C544");
mappingTable.set("D71B", "C545");
mappingTable.set("D71D", "C546");
mappingTable.set("D71E", "C547");
mappingTable.set("D71F", "C548");
mappingTable.set("D721", "C549");
mappingTable.set("D722", "C54A");
mappingTable.set("D723", "C54B");
mappingTable.set("D724", "C54C");
mappingTable.set("D725", "C54D");
mappingTable.set("D726", "C54E");
mappingTable.set("D727", "C54F");
mappingTable.set("D72A", "C550");
mappingTable.set("D72C", "C551");
mappingTable.set("D72E", "C552");
mappingTable.set("D72F", "C553");
mappingTable.set("D730", "C554");
mappingTable.set("D731", "C555");
mappingTable.set("D732", "C556");
mappingTable.set("D733", "C557");
mappingTable.set("D736", "C558");
mappingTable.set("D737", "C559");
mappingTable.set("D739", "C55A");
mappingTable.set("D73A", "C561");
mappingTable.set("D73B", "C562");
mappingTable.set("D73D", "C563");
mappingTable.set("D73E", "C564");
mappingTable.set("D73F", "C565");
mappingTable.set("D740", "C566");
mappingTable.set("D741", "C567");
mappingTable.set("D742", "C568");
mappingTable.set("D743", "C569");
mappingTable.set("D745", "C56A");
mappingTable.set("D746", "C56B");
mappingTable.set("D748", "C56C");
mappingTable.set("D74A", "C56D");
mappingTable.set("D74B", "C56E");
mappingTable.set("D74C", "C56F");
mappingTable.set("D74D", "C570");
mappingTable.set("D74E", "C571");
mappingTable.set("D74F", "C572");
mappingTable.set("D752", "C573");
mappingTable.set("D753", "C574");
mappingTable.set("D755", "C575");
mappingTable.set("D75A", "C576");
mappingTable.set("D75B", "C577");
mappingTable.set("D75C", "C578");
mappingTable.set("D75D", "C579");
mappingTable.set("D75E", "C57A");
mappingTable.set("D75F", "C581");
mappingTable.set("D762", "C582");
mappingTable.set("D764", "C583");
mappingTable.set("D766", "C584");
mappingTable.set("D767", "C585");
mappingTable.set("D768", "C586");
mappingTable.set("D76A", "C587");
mappingTable.set("D76B", "C588");
mappingTable.set("D76D", "C589");
mappingTable.set("D76E", "C58A");
mappingTable.set("D76F", "C58B");
mappingTable.set("D771", "C58C");
mappingTable.set("D772", "C58D");
mappingTable.set("D773", "C58E");
mappingTable.set("D775", "C58F");
mappingTable.set("D776", "C590");
mappingTable.set("D777", "C591");
mappingTable.set("D778", "C592");
mappingTable.set("D779", "C593");
mappingTable.set("D77A", "C594");
mappingTable.set("D77B", "C595");
mappingTable.set("D77E", "C596");
mappingTable.set("D77F", "C597");
mappingTable.set("D780", "C598");
mappingTable.set("D782", "C599");
mappingTable.set("D783", "C59A");
mappingTable.set("D784", "C59B");
mappingTable.set("D785", "C59C");
mappingTable.set("D786", "C59D");
mappingTable.set("D787", "C59E");
mappingTable.set("D78A", "C59F");
mappingTable.set("D78B", "C5A0");
mappingTable.set("D044", "C5A1");
mappingTable.set("D045", "C5A2");
mappingTable.set("D047", "C5A3");
mappingTable.set("D049", "C5A4");
mappingTable.set("D050", "C5A5");
mappingTable.set("D054", "C5A6");
mappingTable.set("D058", "C5A7");
mappingTable.set("D060", "C5A8");
mappingTable.set("D06C", "C5A9");
mappingTable.set("D06D", "C5AA");
mappingTable.set("D070", "C5AB");
mappingTable.set("D074", "C5AC");
mappingTable.set("D07C", "C5AD");
mappingTable.set("D07D", "C5AE");
mappingTable.set("D081", "C5AF");
mappingTable.set("D0A4", "C5B0");
mappingTable.set("D0A5", "C5B1");
mappingTable.set("D0A8", "C5B2");
mappingTable.set("D0AC", "C5B3");
mappingTable.set("D0B4", "C5B4");
mappingTable.set("D0B5", "C5B5");
mappingTable.set("D0B7", "C5B6");
mappingTable.set("D0B9", "C5B7");
mappingTable.set("D0C0", "C5B8");
mappingTable.set("D0C1", "C5B9");
mappingTable.set("D0C4", "C5BA");
mappingTable.set("D0C8", "C5BB");
mappingTable.set("D0C9", "C5BC");
mappingTable.set("D0D0", "C5BD");
mappingTable.set("D0D1", "C5BE");
mappingTable.set("D0D3", "C5BF");
mappingTable.set("D0D4", "C5C0");
mappingTable.set("D0D5", "C5C1");
mappingTable.set("D0DC", "C5C2");
mappingTable.set("D0DD", "C5C3");
mappingTable.set("D0E0", "C5C4");
mappingTable.set("D0E4", "C5C5");
mappingTable.set("D0EC", "C5C6");
mappingTable.set("D0ED", "C5C7");
mappingTable.set("D0EF", "C5C8");
mappingTable.set("D0F0", "C5C9");
mappingTable.set("D0F1", "C5CA");
mappingTable.set("D0F8", "C5CB");
mappingTable.set("D10D", "C5CC");
mappingTable.set("D130", "C5CD");
mappingTable.set("D131", "C5CE");
mappingTable.set("D134", "C5CF");
mappingTable.set("D138", "C5D0");
mappingTable.set("D13A", "C5D1");
mappingTable.set("D140", "C5D2");
mappingTable.set("D141", "C5D3");
mappingTable.set("D143", "C5D4");
mappingTable.set("D144", "C5D5");
mappingTable.set("D145", "C5D6");
mappingTable.set("D14C", "C5D7");
mappingTable.set("D14D", "C5D8");
mappingTable.set("D150", "C5D9");
mappingTable.set("D154", "C5DA");
mappingTable.set("D15C", "C5DB");
mappingTable.set("D15D", "C5DC");
mappingTable.set("D15F", "C5DD");
mappingTable.set("D161", "C5DE");
mappingTable.set("D168", "C5DF");
mappingTable.set("D16C", "C5E0");
mappingTable.set("D17C", "C5E1");
mappingTable.set("D184", "C5E2");
mappingTable.set("D188", "C5E3");
mappingTable.set("D1A0", "C5E4");
mappingTable.set("D1A1", "C5E5");
mappingTable.set("D1A4", "C5E6");
mappingTable.set("D1A8", "C5E7");
mappingTable.set("D1B0", "C5E8");
mappingTable.set("D1B1", "C5E9");
mappingTable.set("D1B3", "C5EA");
mappingTable.set("D1B5", "C5EB");
mappingTable.set("D1BA", "C5EC");
mappingTable.set("D1BC", "C5ED");
mappingTable.set("D1C0", "C5EE");
mappingTable.set("D1D8", "C5EF");
mappingTable.set("D1F4", "C5F0");
mappingTable.set("D1F8", "C5F1");
mappingTable.set("D207", "C5F2");
mappingTable.set("D209", "C5F3");
mappingTable.set("D210", "C5F4");
mappingTable.set("D22C", "C5F5");
mappingTable.set("D22D", "C5F6");
mappingTable.set("D230", "C5F7");
mappingTable.set("D234", "C5F8");
mappingTable.set("D23C", "C5F9");
mappingTable.set("D23D", "C5FA");
mappingTable.set("D23F", "C5FB");
mappingTable.set("D241", "C5FC");
mappingTable.set("D248", "C5FD");
mappingTable.set("D25C", "C5FE");
mappingTable.set("D78D", "C641");
mappingTable.set("D78E", "C642");
mappingTable.set("D78F", "C643");
mappingTable.set("D791", "C644");
mappingTable.set("D792", "C645");
mappingTable.set("D793", "C646");
mappingTable.set("D794", "C647");
mappingTable.set("D795", "C648");
mappingTable.set("D796", "C649");
mappingTable.set("D797", "C64A");
mappingTable.set("D79A", "C64B");
mappingTable.set("D79C", "C64C");
mappingTable.set("D79E", "C64D");
mappingTable.set("D79F", "C64E");
mappingTable.set("D7A0", "C64F");
mappingTable.set("D7A1", "C650");
mappingTable.set("D7A2", "C651");
mappingTable.set("D7A3", "C652");
mappingTable.set("D264", "C6A1");
mappingTable.set("D280", "C6A2");
mappingTable.set("D281", "C6A3");
mappingTable.set("D284", "C6A4");
mappingTable.set("D288", "C6A5");
mappingTable.set("D290", "C6A6");
mappingTable.set("D291", "C6A7");
mappingTable.set("D295", "C6A8");
mappingTable.set("D29C", "C6A9");
mappingTable.set("D2A0", "C6AA");
mappingTable.set("D2A4", "C6AB");
mappingTable.set("D2AC", "C6AC");
mappingTable.set("D2B1", "C6AD");
mappingTable.set("D2B8", "C6AE");
mappingTable.set("D2B9", "C6AF");
mappingTable.set("D2BC", "C6B0");
mappingTable.set("D2BF", "C6B1");
mappingTable.set("D2C0", "C6B2");
mappingTable.set("D2C2", "C6B3");
mappingTable.set("D2C8", "C6B4");
mappingTable.set("D2C9", "C6B5");
mappingTable.set("D2CB", "C6B6");
mappingTable.set("D2D4", "C6B7");
mappingTable.set("D2D8", "C6B8");
mappingTable.set("D2DC", "C6B9");
mappingTable.set("D2E4", "C6BA");
mappingTable.set("D2E5", "C6BB");
mappingTable.set("D2F0", "C6BC");
mappingTable.set("D2F1", "C6BD");
mappingTable.set("D2F4", "C6BE");
mappingTable.set("D2F8", "C6BF");
mappingTable.set("D300", "C6C0");
mappingTable.set("D301", "C6C1");
mappingTable.set("D303", "C6C2");
mappingTable.set("D305", "C6C3");
mappingTable.set("D30C", "C6C4");
mappingTable.set("D30D", "C6C5");
mappingTable.set("D30E", "C6C6");
mappingTable.set("D310", "C6C7");
mappingTable.set("D314", "C6C8");
mappingTable.set("D316", "C6C9");
mappingTable.set("D31C", "C6CA");
mappingTable.set("D31D", "C6CB");
mappingTable.set("D31F", "C6CC");
mappingTable.set("D320", "C6CD");
mappingTable.set("D321", "C6CE");
mappingTable.set("D325", "C6CF");
mappingTable.set("D328", "C6D0");
mappingTable.set("D329", "C6D1");
mappingTable.set("D32C", "C6D2");
mappingTable.set("D330", "C6D3");
mappingTable.set("D338", "C6D4");
mappingTable.set("D339", "C6D5");
mappingTable.set("D33B", "C6D6");
mappingTable.set("D33C", "C6D7");
mappingTable.set("D33D", "C6D8");
mappingTable.set("D344", "C6D9");
mappingTable.set("D345", "C6DA");
mappingTable.set("D37C", "C6DB");
mappingTable.set("D37D", "C6DC");
mappingTable.set("D380", "C6DD");
mappingTable.set("D384", "C6DE");
mappingTable.set("D38C", "C6DF");
mappingTable.set("D38D", "C6E0");
mappingTable.set("D38F", "C6E1");
mappingTable.set("D390", "C6E2");
mappingTable.set("D391", "C6E3");
mappingTable.set("D398", "C6E4");
mappingTable.set("D399", "C6E5");
mappingTable.set("D39C", "C6E6");
mappingTable.set("D3A0", "C6E7");
mappingTable.set("D3A8", "C6E8");
mappingTable.set("D3A9", "C6E9");
mappingTable.set("D3AB", "C6EA");
mappingTable.set("D3AD", "C6EB");
mappingTable.set("D3B4", "C6EC");
mappingTable.set("D3B8", "C6ED");
mappingTable.set("D3BC", "C6EE");
mappingTable.set("D3C4", "C6EF");
mappingTable.set("D3C5", "C6F0");
mappingTable.set("D3C8", "C6F1");
mappingTable.set("D3C9", "C6F2");
mappingTable.set("D3D0", "C6F3");
mappingTable.set("D3D8", "C6F4");
mappingTable.set("D3E1", "C6F5");
mappingTable.set("D3E3", "C6F6");
mappingTable.set("D3EC", "C6F7");
mappingTable.set("D3ED", "C6F8");
mappingTable.set("D3F0", "C6F9");
mappingTable.set("D3F4", "C6FA");
mappingTable.set("D3FC", "C6FB");
mappingTable.set("D3FD", "C6FC");
mappingTable.set("D3FF", "C6FD");
mappingTable.set("D401", "C6FE");
mappingTable.set("D408", "C7A1");
mappingTable.set("D41D", "C7A2");
mappingTable.set("D440", "C7A3");
mappingTable.set("D444", "C7A4");
mappingTable.set("D45C", "C7A5");
mappingTable.set("D460", "C7A6");
mappingTable.set("D464", "C7A7");
mappingTable.set("D46D", "C7A8");
mappingTable.set("D46F", "C7A9");
mappingTable.set("D478", "C7AA");
mappingTable.set("D479", "C7AB");
mappingTable.set("D47C", "C7AC");
mappingTable.set("D47F", "C7AD");
mappingTable.set("D480", "C7AE");
mappingTable.set("D482", "C7AF");
mappingTable.set("D488", "C7B0");
mappingTable.set("D489", "C7B1");
mappingTable.set("D48B", "C7B2");
mappingTable.set("D48D", "C7B3");
mappingTable.set("D494", "C7B4");
mappingTable.set("D4A9", "C7B5");
mappingTable.set("D4CC", "C7B6");
mappingTable.set("D4D0", "C7B7");
mappingTable.set("D4D4", "C7B8");
mappingTable.set("D4DC", "C7B9");
mappingTable.set("D4DF", "C7BA");
mappingTable.set("D4E8", "C7BB");
mappingTable.set("D4EC", "C7BC");
mappingTable.set("D4F0", "C7BD");
mappingTable.set("D4F8", "C7BE");
mappingTable.set("D4FB", "C7BF");
mappingTable.set("D4FD", "C7C0");
mappingTable.set("D504", "C7C1");
mappingTable.set("D508", "C7C2");
mappingTable.set("D50C", "C7C3");
mappingTable.set("D514", "C7C4");
mappingTable.set("D515", "C7C5");
mappingTable.set("D517", "C7C6");
mappingTable.set("D53C", "C7C7");
mappingTable.set("D53D", "C7C8");
mappingTable.set("D540", "C7C9");
mappingTable.set("D544", "C7CA");
mappingTable.set("D54C", "C7CB");
mappingTable.set("D54D", "C7CC");
mappingTable.set("D54F", "C7CD");
mappingTable.set("D551", "C7CE");
mappingTable.set("D558", "C7CF");
mappingTable.set("D559", "C7D0");
mappingTable.set("D55C", "C7D1");
mappingTable.set("D560", "C7D2");
mappingTable.set("D565", "C7D3");
mappingTable.set("D568", "C7D4");
mappingTable.set("D569", "C7D5");
mappingTable.set("D56B", "C7D6");
mappingTable.set("D56D", "C7D7");
mappingTable.set("D574", "C7D8");
mappingTable.set("D575", "C7D9");
mappingTable.set("D578", "C7DA");
mappingTable.set("D57C", "C7DB");
mappingTable.set("D584", "C7DC");
mappingTable.set("D585", "C7DD");
mappingTable.set("D587", "C7DE");
mappingTable.set("D588", "C7DF");
mappingTable.set("D589", "C7E0");
mappingTable.set("D590", "C7E1");
mappingTable.set("D5A5", "C7E2");
mappingTable.set("D5C8", "C7E3");
mappingTable.set("D5C9", "C7E4");
mappingTable.set("D5CC", "C7E5");
mappingTable.set("D5D0", "C7E6");
mappingTable.set("D5D2", "C7E7");
mappingTable.set("D5D8", "C7E8");
mappingTable.set("D5D9", "C7E9");
mappingTable.set("D5DB", "C7EA");
mappingTable.set("D5DD", "C7EB");
mappingTable.set("D5E4", "C7EC");
mappingTable.set("D5E5", "C7ED");
mappingTable.set("D5E8", "C7EE");
mappingTable.set("D5EC", "C7EF");
mappingTable.set("D5F4", "C7F0");
mappingTable.set("D5F5", "C7F1");
mappingTable.set("D5F7", "C7F2");
mappingTable.set("D5F9", "C7F3");
mappingTable.set("D600", "C7F4");
mappingTable.set("D601", "C7F5");
mappingTable.set("D604", "C7F6");
mappingTable.set("D608", "C7F7");
mappingTable.set("D610", "C7F8");
mappingTable.set("D611", "C7F9");
mappingTable.set("D613", "C7FA");
mappingTable.set("D614", "C7FB");
mappingTable.set("D615", "C7FC");
mappingTable.set("D61C", "C7FD");
mappingTable.set("D620", "C7FE");
mappingTable.set("D624", "C8A1");
mappingTable.set("D62D", "C8A2");
mappingTable.set("D638", "C8A3");
mappingTable.set("D639", "C8A4");
mappingTable.set("D63C", "C8A5");
mappingTable.set("D640", "C8A6");
mappingTable.set("D645", "C8A7");
mappingTable.set("D648", "C8A8");
mappingTable.set("D649", "C8A9");
mappingTable.set("D64B", "C8AA");
mappingTable.set("D64D", "C8AB");
mappingTable.set("D651", "C8AC");
mappingTable.set("D654", "C8AD");
mappingTable.set("D655", "C8AE");
mappingTable.set("D658", "C8AF");
mappingTable.set("D65C", "C8B0");
mappingTable.set("D667", "C8B1");
mappingTable.set("D669", "C8B2");
mappingTable.set("D670", "C8B3");
mappingTable.set("D671", "C8B4");
mappingTable.set("D674", "C8B5");
mappingTable.set("D683", "C8B6");
mappingTable.set("D685", "C8B7");
mappingTable.set("D68C", "C8B8");
mappingTable.set("D68D", "C8B9");
mappingTable.set("D690", "C8BA");
mappingTable.set("D694", "C8BB");
mappingTable.set("D69D", "C8BC");
mappingTable.set("D69F", "C8BD");
mappingTable.set("D6A1", "C8BE");
mappingTable.set("D6A8", "C8BF");
mappingTable.set("D6AC", "C8C0");
mappingTable.set("D6B0", "C8C1");
mappingTable.set("D6B9", "C8C2");
mappingTable.set("D6BB", "C8C3");
mappingTable.set("D6C4", "C8C4");
mappingTable.set("D6C5", "C8C5");
mappingTable.set("D6C8", "C8C6");
mappingTable.set("D6CC", "C8C7");
mappingTable.set("D6D1", "C8C8");
mappingTable.set("D6D4", "C8C9");
mappingTable.set("D6D7", "C8CA");
mappingTable.set("D6D9", "C8CB");
mappingTable.set("D6E0", "C8CC");
mappingTable.set("D6E4", "C8CD");
mappingTable.set("D6E8", "C8CE");
mappingTable.set("D6F0", "C8CF");
mappingTable.set("D6F5", "C8D0");
mappingTable.set("D6FC", "C8D1");
mappingTable.set("D6FD", "C8D2");
mappingTable.set("D700", "C8D3");
mappingTable.set("D704", "C8D4");
mappingTable.set("D711", "C8D5");
mappingTable.set("D718", "C8D6");
mappingTable.set("D719", "C8D7");
mappingTable.set("D71C", "C8D8");
mappingTable.set("D720", "C8D9");
mappingTable.set("D728", "C8DA");
mappingTable.set("D729", "C8DB");
mappingTable.set("D72B", "C8DC");
mappingTable.set("D72D", "C8DD");
mappingTable.set("D734", "C8DE");
mappingTable.set("D735", "C8DF");
mappingTable.set("D738", "C8E0");
mappingTable.set("D73C", "C8E1");
mappingTable.set("D744", "C8E2");
mappingTable.set("D747", "C8E3");
mappingTable.set("D749", "C8E4");
mappingTable.set("D750", "C8E5");
mappingTable.set("D751", "C8E6");
mappingTable.set("D754", "C8E7");
mappingTable.set("D756", "C8E8");
mappingTable.set("D757", "C8E9");
mappingTable.set("D758", "C8EA");
mappingTable.set("D759", "C8EB");
mappingTable.set("D760", "C8EC");
mappingTable.set("D761", "C8ED");
mappingTable.set("D763", "C8EE");
mappingTable.set("D765", "C8EF");
mappingTable.set("D769", "C8F0");
mappingTable.set("D76C", "C8F1");
mappingTable.set("D770", "C8F2");
mappingTable.set("D774", "C8F3");
mappingTable.set("D77C", "C8F4");
mappingTable.set("D77D", "C8F5");
mappingTable.set("D781", "C8F6");
mappingTable.set("D788", "C8F7");
mappingTable.set("D789", "C8F8");
mappingTable.set("D78C", "C8F9");
mappingTable.set("D790", "C8FA");
mappingTable.set("D798", "C8FB");
mappingTable.set("D799", "C8FC");
mappingTable.set("D79B", "C8FD");
mappingTable.set("D79D", "C8FE");
mappingTable.set("4F3D", "CAA1");
mappingTable.set("4F73", "CAA2");
mappingTable.set("5047", "CAA3");
mappingTable.set("50F9", "CAA4");
mappingTable.set("52A0", "CAA5");
mappingTable.set("53EF", "CAA6");
mappingTable.set("5475", "CAA7");
mappingTable.set("54E5", "CAA8");
mappingTable.set("5609", "CAA9");
mappingTable.set("5AC1", "CAAA");
mappingTable.set("5BB6", "CAAB");
mappingTable.set("6687", "CAAC");
mappingTable.set("67B6", "CAAD");
mappingTable.set("67B7", "CAAE");
mappingTable.set("67EF", "CAAF");
mappingTable.set("6B4C", "CAB0");
mappingTable.set("73C2", "CAB1");
mappingTable.set("75C2", "CAB2");
mappingTable.set("7A3C", "CAB3");
mappingTable.set("82DB", "CAB4");
mappingTable.set("8304", "CAB5");
mappingTable.set("8857", "CAB6");
mappingTable.set("8888", "CAB7");
mappingTable.set("8A36", "CAB8");
mappingTable.set("8CC8", "CAB9");
mappingTable.set("8DCF", "CABA");
mappingTable.set("8EFB", "CABB");
mappingTable.set("8FE6", "CABC");
mappingTable.set("99D5", "CABD");
mappingTable.set("523B", "CABE");
mappingTable.set("5374", "CABF");
mappingTable.set("5404", "CAC0");
mappingTable.set("606A", "CAC1");
mappingTable.set("6164", "CAC2");
mappingTable.set("6BBC", "CAC3");
mappingTable.set("73CF", "CAC4");
mappingTable.set("811A", "CAC5");
mappingTable.set("89BA", "CAC6");
mappingTable.set("89D2", "CAC7");
mappingTable.set("95A3", "CAC8");
mappingTable.set("4F83", "CAC9");
mappingTable.set("520A", "CACA");
mappingTable.set("58BE", "CACB");
mappingTable.set("5978", "CACC");
mappingTable.set("59E6", "CACD");
mappingTable.set("5E72", "CACE");
mappingTable.set("5E79", "CACF");
mappingTable.set("61C7", "CAD0");
mappingTable.set("63C0", "CAD1");
mappingTable.set("6746", "CAD2");
mappingTable.set("67EC", "CAD3");
mappingTable.set("687F", "CAD4");
mappingTable.set("6F97", "CAD5");
mappingTable.set("764E", "CAD6");
mappingTable.set("770B", "CAD7");
mappingTable.set("78F5", "CAD8");
mappingTable.set("7A08", "CAD9");
mappingTable.set("7AFF", "CADA");
mappingTable.set("7C21", "CADB");
mappingTable.set("809D", "CADC");
mappingTable.set("826E", "CADD");
mappingTable.set("8271", "CADE");
mappingTable.set("8AEB", "CADF");
mappingTable.set("9593", "CAE0");
mappingTable.set("4E6B", "CAE1");
mappingTable.set("559D", "CAE2");
mappingTable.set("66F7", "CAE3");
mappingTable.set("6E34", "CAE4");
mappingTable.set("78A3", "CAE5");
mappingTable.set("7AED", "CAE6");
mappingTable.set("845B", "CAE7");
mappingTable.set("8910", "CAE8");
mappingTable.set("874E", "CAE9");
mappingTable.set("97A8", "CAEA");
mappingTable.set("52D8", "CAEB");
mappingTable.set("574E", "CAEC");
mappingTable.set("582A", "CAED");
mappingTable.set("5D4C", "CAEE");
mappingTable.set("611F", "CAEF");
mappingTable.set("61BE", "CAF0");
mappingTable.set("6221", "CAF1");
mappingTable.set("6562", "CAF2");
mappingTable.set("67D1", "CAF3");
mappingTable.set("6A44", "CAF4");
mappingTable.set("6E1B", "CAF5");
mappingTable.set("7518", "CAF6");
mappingTable.set("75B3", "CAF7");
mappingTable.set("76E3", "CAF8");
mappingTable.set("77B0", "CAF9");
mappingTable.set("7D3A", "CAFA");
mappingTable.set("90AF", "CAFB");
mappingTable.set("9451", "CAFC");
mappingTable.set("9452", "CAFD");
mappingTable.set("9F95", "CAFE");
mappingTable.set("5323", "CBA1");
mappingTable.set("5CAC", "CBA2");
mappingTable.set("7532", "CBA3");
mappingTable.set("80DB", "CBA4");
mappingTable.set("9240", "CBA5");
mappingTable.set("9598", "CBA6");
mappingTable.set("525B", "CBA7");
mappingTable.set("5808", "CBA8");
mappingTable.set("59DC", "CBA9");
mappingTable.set("5CA1", "CBAA");
mappingTable.set("5D17", "CBAB");
mappingTable.set("5EB7", "CBAC");
mappingTable.set("5F3A", "CBAD");
mappingTable.set("5F4A", "CBAE");
mappingTable.set("6177", "CBAF");
mappingTable.set("6C5F", "CBB0");
mappingTable.set("757A", "CBB1");
mappingTable.set("7586", "CBB2");
mappingTable.set("7CE0", "CBB3");
mappingTable.set("7D73", "CBB4");
mappingTable.set("7DB1", "CBB5");
mappingTable.set("7F8C", "CBB6");
mappingTable.set("8154", "CBB7");
mappingTable.set("8221", "CBB8");
mappingTable.set("8591", "CBB9");
mappingTable.set("8941", "CBBA");
mappingTable.set("8B1B", "CBBB");
mappingTable.set("92FC", "CBBC");
mappingTable.set("964D", "CBBD");
mappingTable.set("9C47", "CBBE");
mappingTable.set("4ECB", "CBBF");
mappingTable.set("4EF7", "CBC0");
mappingTable.set("500B", "CBC1");
mappingTable.set("51F1", "CBC2");
mappingTable.set("584F", "CBC3");
mappingTable.set("6137", "CBC4");
mappingTable.set("613E", "CBC5");
mappingTable.set("6168", "CBC6");
mappingTable.set("6539", "CBC7");
mappingTable.set("69EA", "CBC8");
mappingTable.set("6F11", "CBC9");
mappingTable.set("75A5", "CBCA");
mappingTable.set("7686", "CBCB");
mappingTable.set("76D6", "CBCC");
mappingTable.set("7B87", "CBCD");
mappingTable.set("82A5", "CBCE");
mappingTable.set("84CB", "CBCF");
mappingTable.set("8C48", "CBD0");
mappingTable.set("93A7", "CBD1");
mappingTable.set("958B", "CBD2");
mappingTable.set("5580", "CBD3");
mappingTable.set("5BA2", "CBD4");
mappingTable.set("5751", "CBD5");
mappingTable.set("66F4", "CBD6");
mappingTable.set("7CB3", "CBD7");
mappingTable.set("7FB9", "CBD8");
mappingTable.set("91B5", "CBD9");
mappingTable.set("5028", "CBDA");
mappingTable.set("53BB", "CBDB");
mappingTable.set("5C45", "CBDC");
mappingTable.set("5DE8", "CBDD");
mappingTable.set("62D2", "CBDE");
mappingTable.set("636E", "CBDF");
mappingTable.set("64DA", "CBE0");
mappingTable.set("64E7", "CBE1");
mappingTable.set("6E20", "CBE2");
mappingTable.set("70AC", "CBE3");
mappingTable.set("795B", "CBE4");
mappingTable.set("8DDD", "CBE5");
mappingTable.set("8E1E", "CBE6");
mappingTable.set("8ECA", "CBE7");
mappingTable.set("907D", "CBE8");
mappingTable.set("9245", "CBE9");
mappingTable.set("92F8", "CBEA");
mappingTable.set("4E7E", "CBEB");
mappingTable.set("4EF6", "CBEC");
mappingTable.set("5065", "CBED");
mappingTable.set("5DFE", "CBEE");
mappingTable.set("5EFA", "CBEF");
mappingTable.set("6106", "CBF0");
mappingTable.set("6957", "CBF1");
mappingTable.set("8171", "CBF2");
mappingTable.set("8654", "CBF3");
mappingTable.set("8E47", "CBF4");
mappingTable.set("9375", "CBF5");
mappingTable.set("9A2B", "CBF6");
mappingTable.set("4E5E", "CBF7");
mappingTable.set("5091", "CBF8");
mappingTable.set("6770", "CBF9");
mappingTable.set("6840", "CBFA");
mappingTable.set("5109", "CBFB");
mappingTable.set("528D", "CBFC");
mappingTable.set("5292", "CBFD");
mappingTable.set("6AA2", "CBFE");
mappingTable.set("77BC", "CCA1");
mappingTable.set("9210", "CCA2");
mappingTable.set("9ED4", "CCA3");
mappingTable.set("52AB", "CCA4");
mappingTable.set("602F", "CCA5");
mappingTable.set("8FF2", "CCA6");
mappingTable.set("5048", "CCA7");
mappingTable.set("61A9", "CCA8");
mappingTable.set("63ED", "CCA9");
mappingTable.set("64CA", "CCAA");
mappingTable.set("683C", "CCAB");
mappingTable.set("6A84", "CCAC");
mappingTable.set("6FC0", "CCAD");
mappingTable.set("8188", "CCAE");
mappingTable.set("89A1", "CCAF");
mappingTable.set("9694", "CCB0");
mappingTable.set("5805", "CCB1");
mappingTable.set("727D", "CCB2");
mappingTable.set("72AC", "CCB3");
mappingTable.set("7504", "CCB4");
mappingTable.set("7D79", "CCB5");
mappingTable.set("7E6D", "CCB6");
mappingTable.set("80A9", "CCB7");
mappingTable.set("898B", "CCB8");
mappingTable.set("8B74", "CCB9");
mappingTable.set("9063", "CCBA");
mappingTable.set("9D51", "CCBB");
mappingTable.set("6289", "CCBC");
mappingTable.set("6C7A", "CCBD");
mappingTable.set("6F54", "CCBE");
mappingTable.set("7D50", "CCBF");
mappingTable.set("7F3A", "CCC0");
mappingTable.set("8A23", "CCC1");
mappingTable.set("517C", "CCC2");
mappingTable.set("614A", "CCC3");
mappingTable.set("7B9D", "CCC4");
mappingTable.set("8B19", "CCC5");
mappingTable.set("9257", "CCC6");
mappingTable.set("938C", "CCC7");
mappingTable.set("4EAC", "CCC8");
mappingTable.set("4FD3", "CCC9");
mappingTable.set("501E", "CCCA");
mappingTable.set("50BE", "CCCB");
mappingTable.set("5106", "CCCC");
mappingTable.set("52C1", "CCCD");
mappingTable.set("52CD", "CCCE");
mappingTable.set("537F", "CCCF");
mappingTable.set("5770", "CCD0");
mappingTable.set("5883", "CCD1");
mappingTable.set("5E9A", "CCD2");
mappingTable.set("5F91", "CCD3");
mappingTable.set("6176", "CCD4");
mappingTable.set("61AC", "CCD5");
mappingTable.set("64CE", "CCD6");
mappingTable.set("656C", "CCD7");
mappingTable.set("666F", "CCD8");
mappingTable.set("66BB", "CCD9");
mappingTable.set("66F4", "CCDA");
mappingTable.set("6897", "CCDB");
mappingTable.set("6D87", "CCDC");
mappingTable.set("7085", "CCDD");
mappingTable.set("70F1", "CCDE");
mappingTable.set("749F", "CCDF");
mappingTable.set("74A5", "CCE0");
mappingTable.set("74CA", "CCE1");
mappingTable.set("75D9", "CCE2");
mappingTable.set("786C", "CCE3");
mappingTable.set("78EC", "CCE4");
mappingTable.set("7ADF", "CCE5");
mappingTable.set("7AF6", "CCE6");
mappingTable.set("7D45", "CCE7");
mappingTable.set("7D93", "CCE8");
mappingTable.set("8015", "CCE9");
mappingTable.set("803F", "CCEA");
mappingTable.set("811B", "CCEB");
mappingTable.set("8396", "CCEC");
mappingTable.set("8B66", "CCED");
mappingTable.set("8F15", "CCEE");
mappingTable.set("9015", "CCEF");
mappingTable.set("93E1", "CCF0");
mappingTable.set("9803", "CCF1");
mappingTable.set("9838", "CCF2");
mappingTable.set("9A5A", "CCF3");
mappingTable.set("9BE8", "CCF4");
mappingTable.set("4FC2", "CCF5");
mappingTable.set("5553", "CCF6");
mappingTable.set("583A", "CCF7");
mappingTable.set("5951", "CCF8");
mappingTable.set("5B63", "CCF9");
mappingTable.set("5C46", "CCFA");
mappingTable.set("60B8", "CCFB");
mappingTable.set("6212", "CCFC");
mappingTable.set("6842", "CCFD");
mappingTable.set("68B0", "CCFE");
mappingTable.set("68E8", "CDA1");
mappingTable.set("6EAA", "CDA2");
mappingTable.set("754C", "CDA3");
mappingTable.set("7678", "CDA4");
mappingTable.set("78CE", "CDA5");
mappingTable.set("7A3D", "CDA6");
mappingTable.set("7CFB", "CDA7");
mappingTable.set("7E6B", "CDA8");
mappingTable.set("7E7C", "CDA9");
mappingTable.set("8A08", "CDAA");
mappingTable.set("8AA1", "CDAB");
mappingTable.set("8C3F", "CDAC");
mappingTable.set("968E", "CDAD");
mappingTable.set("9DC4", "CDAE");
mappingTable.set("53E4", "CDAF");
mappingTable.set("53E9", "CDB0");
mappingTable.set("544A", "CDB1");
mappingTable.set("5471", "CDB2");
mappingTable.set("56FA", "CDB3");
mappingTable.set("59D1", "CDB4");
mappingTable.set("5B64", "CDB5");
mappingTable.set("5C3B", "CDB6");
mappingTable.set("5EAB", "CDB7");
mappingTable.set("62F7", "CDB8");
mappingTable.set("6537", "CDB9");
mappingTable.set("6545", "CDBA");
mappingTable.set("6572", "CDBB");
mappingTable.set("66A0", "CDBC");
mappingTable.set("67AF", "CDBD");
mappingTable.set("69C1", "CDBE");
mappingTable.set("6CBD", "CDBF");
mappingTable.set("75FC", "CDC0");
mappingTable.set("7690", "CDC1");
mappingTable.set("777E", "CDC2");
mappingTable.set("7A3F", "CDC3");
mappingTable.set("7F94", "CDC4");
mappingTable.set("8003", "CDC5");
mappingTable.set("80A1", "CDC6");
mappingTable.set("818F", "CDC7");
mappingTable.set("82E6", "CDC8");
mappingTable.set("82FD", "CDC9");
mappingTable.set("83F0", "CDCA");
mappingTable.set("85C1", "CDCB");
mappingTable.set("8831", "CDCC");
mappingTable.set("88B4", "CDCD");
mappingTable.set("8AA5", "CDCE");
mappingTable.set("8CC8", "CDCF");
mappingTable.set("8F9C", "CDD0");
mappingTable.set("932E", "CDD1");
mappingTable.set("96C7", "CDD2");
mappingTable.set("9867", "CDD3");
mappingTable.set("9AD8", "CDD4");
mappingTable.set("9F13", "CDD5");
mappingTable.set("54ED", "CDD6");
mappingTable.set("659B", "CDD7");
mappingTable.set("66F2", "CDD8");
mappingTable.set("688F", "CDD9");
mappingTable.set("7A40", "CDDA");
mappingTable.set("8C37", "CDDB");
mappingTable.set("9D60", "CDDC");
mappingTable.set("56F0", "CDDD");
mappingTable.set("5764", "CDDE");
mappingTable.set("5D11", "CDDF");
mappingTable.set("6606", "CDE0");
mappingTable.set("68B1", "CDE1");
mappingTable.set("68CD", "CDE2");
mappingTable.set("6EFE", "CDE3");
mappingTable.set("7428", "CDE4");
mappingTable.set("889E", "CDE5");
mappingTable.set("9BE4", "CDE6");
mappingTable.set("6C68", "CDE7");
mappingTable.set("6ED1", "CDE8");
mappingTable.set("9AA8", "CDE9");
mappingTable.set("4F9B", "CDEA");
mappingTable.set("516C", "CDEB");
mappingTable.set("5171", "CDEC");
mappingTable.set("529F", "CDED");
mappingTable.set("5B54", "CDEE");
mappingTable.set("5DE5", "CDEF");
mappingTable.set("6050", "CDF0");
mappingTable.set("606D", "CDF1");
mappingTable.set("62F1", "CDF2");
mappingTable.set("63A7", "CDF3");
mappingTable.set("653B", "CDF4");
mappingTable.set("73D9", "CDF5");
mappingTable.set("7A7A", "CDF6");
mappingTable.set("86A3", "CDF7");
mappingTable.set("8CA2", "CDF8");
mappingTable.set("978F", "CDF9");
mappingTable.set("4E32", "CDFA");
mappingTable.set("5BE1", "CDFB");
mappingTable.set("6208", "CDFC");
mappingTable.set("679C", "CDFD");
mappingTable.set("74DC", "CDFE");
mappingTable.set("79D1", "CEA1");
mappingTable.set("83D3", "CEA2");
mappingTable.set("8A87", "CEA3");
mappingTable.set("8AB2", "CEA4");
mappingTable.set("8DE8", "CEA5");
mappingTable.set("904E", "CEA6");
mappingTable.set("934B", "CEA7");
mappingTable.set("9846", "CEA8");
mappingTable.set("5ED3", "CEA9");
mappingTable.set("69E8", "CEAA");
mappingTable.set("85FF", "CEAB");
mappingTable.set("90ED", "CEAC");
mappingTable.set("4E32", "CEAD");
mappingTable.set("51A0", "CEAE");
mappingTable.set("5B98", "CEAF");
mappingTable.set("5BEC", "CEB0");
mappingTable.set("6163", "CEB1");
mappingTable.set("68FA", "CEB2");
mappingTable.set("6B3E", "CEB3");
mappingTable.set("704C", "CEB4");
mappingTable.set("742F", "CEB5");
mappingTable.set("74D8", "CEB6");
mappingTable.set("7BA1", "CEB7");
mappingTable.set("7F50", "CEB8");
mappingTable.set("83C5", "CEB9");
mappingTable.set("89C0", "CEBA");
mappingTable.set("8CAB", "CEBB");
mappingTable.set("95DC", "CEBC");
mappingTable.set("9928", "CEBD");
mappingTable.set("522E", "CEBE");
mappingTable.set("605D", "CEBF");
mappingTable.set("62EC", "CEC0");
mappingTable.set("9002", "CEC1");
mappingTable.set("4F8A", "CEC2");
mappingTable.set("5149", "CEC3");
mappingTable.set("5321", "CEC4");
mappingTable.set("58D9", "CEC5");
mappingTable.set("5EE3", "CEC6");
mappingTable.set("66E0", "CEC7");
mappingTable.set("6D38", "CEC8");
mappingTable.set("709A", "CEC9");
mappingTable.set("72C2", "CECA");
mappingTable.set("73D6", "CECB");
mappingTable.set("7B50", "CECC");
mappingTable.set("80F1", "CECD");
mappingTable.set("945B", "CECE");
mappingTable.set("5366", "CECF");
mappingTable.set("639B", "CED0");
mappingTable.set("7F6B", "CED1");
mappingTable.set("4E56", "CED2");
mappingTable.set("5080", "CED3");
mappingTable.set("584A", "CED4");
mappingTable.set("58DE", "CED5");
mappingTable.set("602A", "CED6");
mappingTable.set("6127", "CED7");
mappingTable.set("62D0", "CED8");
mappingTable.set("69D0", "CED9");
mappingTable.set("9B41", "CEDA");
mappingTable.set("5B8F", "CEDB");
mappingTable.set("7D18", "CEDC");
mappingTable.set("80B1", "CEDD");
mappingTable.set("8F5F", "CEDE");
mappingTable.set("4EA4", "CEDF");
mappingTable.set("50D1", "CEE0");
mappingTable.set("54AC", "CEE1");
mappingTable.set("55AC", "CEE2");
mappingTable.set("5B0C", "CEE3");
mappingTable.set("5DA0", "CEE4");
mappingTable.set("5DE7", "CEE5");
mappingTable.set("652A", "CEE6");
mappingTable.set("654E", "CEE7");
mappingTable.set("6821", "CEE8");
mappingTable.set("6A4B", "CEE9");
mappingTable.set("72E1", "CEEA");
mappingTable.set("768E", "CEEB");
mappingTable.set("77EF", "CEEC");
mappingTable.set("7D5E", "CEED");
mappingTable.set("7FF9", "CEEE");
mappingTable.set("81A0", "CEEF");
mappingTable.set("854E", "CEF0");
mappingTable.set("86DF", "CEF1");
mappingTable.set("8F03", "CEF2");
mappingTable.set("8F4E", "CEF3");
mappingTable.set("90CA", "CEF4");
mappingTable.set("9903", "CEF5");
mappingTable.set("9A55", "CEF6");
mappingTable.set("9BAB", "CEF7");
mappingTable.set("4E18", "CEF8");
mappingTable.set("4E45", "CEF9");
mappingTable.set("4E5D", "CEFA");
mappingTable.set("4EC7", "CEFB");
mappingTable.set("4FF1", "CEFC");
mappingTable.set("5177", "CEFD");
mappingTable.set("52FE", "CEFE");
mappingTable.set("5340", "CFA1");
mappingTable.set("53E3", "CFA2");
mappingTable.set("53E5", "CFA3");
mappingTable.set("548E", "CFA4");
mappingTable.set("5614", "CFA5");
mappingTable.set("5775", "CFA6");
mappingTable.set("57A2", "CFA7");
mappingTable.set("5BC7", "CFA8");
mappingTable.set("5D87", "CFA9");
mappingTable.set("5ED0", "CFAA");
mappingTable.set("61FC", "CFAB");
mappingTable.set("62D8", "CFAC");
mappingTable.set("6551", "CFAD");
mappingTable.set("67B8", "CFAE");
mappingTable.set("67E9", "CFAF");
mappingTable.set("69CB", "CFB0");
mappingTable.set("6B50", "CFB1");
mappingTable.set("6BC6", "CFB2");
mappingTable.set("6BEC", "CFB3");
mappingTable.set("6C42", "CFB4");
mappingTable.set("6E9D", "CFB5");
mappingTable.set("7078", "CFB6");
mappingTable.set("72D7", "CFB7");
mappingTable.set("7396", "CFB8");
mappingTable.set("7403", "CFB9");
mappingTable.set("77BF", "CFBA");
mappingTable.set("77E9", "CFBB");
mappingTable.set("7A76", "CFBC");
mappingTable.set("7D7F", "CFBD");
mappingTable.set("8009", "CFBE");
mappingTable.set("81FC", "CFBF");
mappingTable.set("8205", "CFC0");
mappingTable.set("820A", "CFC1");
mappingTable.set("82DF", "CFC2");
mappingTable.set("8862", "CFC3");
mappingTable.set("8B33", "CFC4");
mappingTable.set("8CFC", "CFC5");
mappingTable.set("8EC0", "CFC6");
mappingTable.set("9011", "CFC7");
mappingTable.set("90B1", "CFC8");
mappingTable.set("9264", "CFC9");
mappingTable.set("92B6", "CFCA");
mappingTable.set("99D2", "CFCB");
mappingTable.set("9A45", "CFCC");
mappingTable.set("9CE9", "CFCD");
mappingTable.set("9DD7", "CFCE");
mappingTable.set("9F9C", "CFCF");
mappingTable.set("570B", "CFD0");
mappingTable.set("5C40", "CFD1");
mappingTable.set("83CA", "CFD2");
mappingTable.set("97A0", "CFD3");
mappingTable.set("97AB", "CFD4");
mappingTable.set("9EB4", "CFD5");
mappingTable.set("541B", "CFD6");
mappingTable.set("7A98", "CFD7");
mappingTable.set("7FA4", "CFD8");
mappingTable.set("88D9", "CFD9");
mappingTable.set("8ECD", "CFDA");
mappingTable.set("90E1", "CFDB");
mappingTable.set("5800", "CFDC");
mappingTable.set("5C48", "CFDD");
mappingTable.set("6398", "CFDE");
mappingTable.set("7A9F", "CFDF");
mappingTable.set("5BAE", "CFE0");
mappingTable.set("5F13", "CFE1");
mappingTable.set("7A79", "CFE2");
mappingTable.set("7AAE", "CFE3");
mappingTable.set("828E", "CFE4");
mappingTable.set("8EAC", "CFE5");
mappingTable.set("5026", "CFE6");
mappingTable.set("5238", "CFE7");
mappingTable.set("52F8", "CFE8");
mappingTable.set("5377", "CFE9");
mappingTable.set("5708", "CFEA");
mappingTable.set("62F3", "CFEB");
mappingTable.set("6372", "CFEC");
mappingTable.set("6B0A", "CFED");
mappingTable.set("6DC3", "CFEE");
mappingTable.set("7737", "CFEF");
mappingTable.set("53A5", "CFF0");
mappingTable.set("7357", "CFF1");
mappingTable.set("8568", "CFF2");
mappingTable.set("8E76", "CFF3");
mappingTable.set("95D5", "CFF4");
mappingTable.set("673A", "CFF5");
mappingTable.set("6AC3", "CFF6");
mappingTable.set("6F70", "CFF7");
mappingTable.set("8A6D", "CFF8");
mappingTable.set("8ECC", "CFF9");
mappingTable.set("994B", "CFFA");
mappingTable.set("53E5", "CFFB");
mappingTable.set("6677", "CFFC");
mappingTable.set("6B78", "CFFD");
mappingTable.set("8CB4", "CFFE");
mappingTable.set("9B3C", "D0A1");
mappingTable.set("9F9C", "D0A2");
mappingTable.set("53EB", "D0A3");
mappingTable.set("572D", "D0A4");
mappingTable.set("594E", "D0A5");
mappingTable.set("63C6", "D0A6");
mappingTable.set("69FB", "D0A7");
mappingTable.set("73EA", "D0A8");
mappingTable.set("7845", "D0A9");
mappingTable.set("7ABA", "D0AA");
mappingTable.set("7AC5", "D0AB");
mappingTable.set("7CFE", "D0AC");
mappingTable.set("8475", "D0AD");
mappingTable.set("898F", "D0AE");
mappingTable.set("8D73", "D0AF");
mappingTable.set("9035", "D0B0");
mappingTable.set("95A8", "D0B1");
mappingTable.set("52FB", "D0B2");
mappingTable.set("5747", "D0B3");
mappingTable.set("7547", "D0B4");
mappingTable.set("7B60", "D0B5");
mappingTable.set("83CC", "D0B6");
mappingTable.set("921E", "D0B7");
mappingTable.set("9F9C", "D0B8");
mappingTable.set("6A58", "D0B9");
mappingTable.set("514B", "D0BA");
mappingTable.set("524B", "D0BB");
mappingTable.set("5287", "D0BC");
mappingTable.set("621F", "D0BD");
mappingTable.set("68D8", "D0BE");
mappingTable.set("6975", "D0BF");
mappingTable.set("9699", "D0C0");
mappingTable.set("50C5", "D0C1");
mappingTable.set("52A4", "D0C2");
mappingTable.set("52E4", "D0C3");
mappingTable.set("61C3", "D0C4");
mappingTable.set("65A4", "D0C5");
mappingTable.set("6839", "D0C6");
mappingTable.set("69FF", "D0C7");
mappingTable.set("747E", "D0C8");
mappingTable.set("7B4B", "D0C9");
mappingTable.set("82B9", "D0CA");
mappingTable.set("83EB", "D0CB");
mappingTable.set("89B2", "D0CC");
mappingTable.set("8B39", "D0CD");
mappingTable.set("8FD1", "D0CE");
mappingTable.set("9949", "D0CF");
mappingTable.set("5951", "D0D0");
mappingTable.set("4ECA", "D0D1");
mappingTable.set("5997", "D0D2");
mappingTable.set("64D2", "D0D3");
mappingTable.set("6611", "D0D4");
mappingTable.set("6A8E", "D0D5");
mappingTable.set("7434", "D0D6");
mappingTable.set("7981", "D0D7");
mappingTable.set("79BD", "D0D8");
mappingTable.set("82A9", "D0D9");
mappingTable.set("887E", "D0DA");
mappingTable.set("887F", "D0DB");
mappingTable.set("895F", "D0DC");
mappingTable.set("91D1", "D0DD");
mappingTable.set("9326", "D0DE");
mappingTable.set("4F0B", "D0DF");
mappingTable.set("53CA", "D0E0");
mappingTable.set("6025", "D0E1");
mappingTable.set("6271", "D0E2");
mappingTable.set("6C72", "D0E3");
mappingTable.set("7D1A", "D0E4");
mappingTable.set("7D66", "D0E5");
mappingTable.set("4E98", "D0E6");
mappingTable.set("5162", "D0E7");
mappingTable.set("77DC", "D0E8");
mappingTable.set("80AF", "D0E9");
mappingTable.set("4F01", "D0EA");
mappingTable.set("4F0E", "D0EB");
mappingTable.set("5176", "D0EC");
mappingTable.set("5180", "D0ED");
mappingTable.set("55DC", "D0EE");
mappingTable.set("5668", "D0EF");
mappingTable.set("573B", "D0F0");
mappingTable.set("57FA", "D0F1");
mappingTable.set("57FC", "D0F2");
mappingTable.set("5914", "D0F3");
mappingTable.set("5947", "D0F4");
mappingTable.set("5993", "D0F5");
mappingTable.set("5BC4", "D0F6");
mappingTable.set("5C90", "D0F7");
mappingTable.set("5D0E", "D0F8");
mappingTable.set("5DF1", "D0F9");
mappingTable.set("5E7E", "D0FA");
mappingTable.set("5FCC", "D0FB");
mappingTable.set("6280", "D0FC");
mappingTable.set("65D7", "D0FD");
mappingTable.set("65E3", "D0FE");
mappingTable.set("671E", "D1A1");
mappingTable.set("671F", "D1A2");
mappingTable.set("675E", "D1A3");
mappingTable.set("68CB", "D1A4");
mappingTable.set("68C4", "D1A5");
mappingTable.set("6A5F", "D1A6");
mappingTable.set("6B3A", "D1A7");
mappingTable.set("6C23", "D1A8");
mappingTable.set("6C7D", "D1A9");
mappingTable.set("6C82", "D1AA");
mappingTable.set("6DC7", "D1AB");
mappingTable.set("7398", "D1AC");
mappingTable.set("7426", "D1AD");
mappingTable.set("742A", "D1AE");
mappingTable.set("7482", "D1AF");
mappingTable.set("74A3", "D1B0");
mappingTable.set("7578", "D1B1");
mappingTable.set("757F", "D1B2");
mappingTable.set("7881", "D1B3");
mappingTable.set("78EF", "D1B4");
mappingTable.set("7941", "D1B5");
mappingTable.set("7947", "D1B6");
mappingTable.set("7948", "D1B7");
mappingTable.set("797A", "D1B8");
mappingTable.set("7B95", "D1B9");
mappingTable.set("7D00", "D1BA");
mappingTable.set("7DBA", "D1BB");
mappingTable.set("7F88", "D1BC");
mappingTable.set("8006", "D1BD");
mappingTable.set("802D", "D1BE");
mappingTable.set("808C", "D1BF");
mappingTable.set("8A18", "D1C0");
mappingTable.set("8B4F", "D1C1");
mappingTable.set("8C48", "D1C2");
mappingTable.set("8D77", "D1C3");
mappingTable.set("9321", "D1C4");
mappingTable.set("9324", "D1C5");
mappingTable.set("98E2", "D1C6");
mappingTable.set("9951", "D1C7");
mappingTable.set("9A0E", "D1C8");
mappingTable.set("9A0F", "D1C9");
mappingTable.set("9A65", "D1CA");
mappingTable.set("9E92", "D1CB");
mappingTable.set("7DCA", "D1CC");
mappingTable.set("4F76", "D1CD");
mappingTable.set("5409", "D1CE");
mappingTable.set("62EE", "D1CF");
mappingTable.set("6854", "D1D0");
mappingTable.set("91D1", "D1D1");
mappingTable.set("55AB", "D1D2");
mappingTable.set("513A", "D1D3");
mappingTable.set("5587", "D1D4");
mappingTable.set("5948", "D1D5");
mappingTable.set("5A1C", "D1D6");
mappingTable.set("61E6", "D1D7");
mappingTable.set("61F6", "D1D8");
mappingTable.set("62CF", "D1D9");
mappingTable.set("62FF", "D1DA");
mappingTable.set("7669", "D1DB");
mappingTable.set("7F85", "D1DC");
mappingTable.set("863F", "D1DD");
mappingTable.set("87BA", "D1DE");
mappingTable.set("88F8", "D1DF");
mappingTable.set("908F", "D1E0");
mappingTable.set("90A3", "D1E1");
mappingTable.set("6A02", "D1E2");
mappingTable.set("6D1B", "D1E3");
mappingTable.set("70D9", "D1E4");
mappingTable.set("73DE", "D1E5");
mappingTable.set("843D", "D1E6");
mappingTable.set("8AFE", "D1E7");
mappingTable.set("916A", "D1E8");
mappingTable.set("99F1", "D1E9");
mappingTable.set("4E82", "D1EA");
mappingTable.set("5375", "D1EB");
mappingTable.set("6696", "D1EC");
mappingTable.set("6B04", "D1ED");
mappingTable.set("7156", "D1EE");
mappingTable.set("721B", "D1EF");
mappingTable.set("862D", "D1F0");
mappingTable.set("96E3", "D1F1");
mappingTable.set("9E1E", "D1F2");
mappingTable.set("634F", "D1F3");
mappingTable.set("637A", "D1F4");
mappingTable.set("5357", "D1F5");
mappingTable.set("5D50", "D1F6");
mappingTable.set("678F", "D1F7");
mappingTable.set("6960", "D1F8");
mappingTable.set("6E73", "D1F9");
mappingTable.set("6FEB", "D1FA");
mappingTable.set("7537", "D1FB");
mappingTable.set("85CD", "D1FC");
mappingTable.set("8964", "D1FD");
mappingTable.set("62C9", "D1FE");
mappingTable.set("7D0D", "D2A1");
mappingTable.set("81D8", "D2A2");
mappingTable.set("881F", "D2A3");
mappingTable.set("8872", "D2A4");
mappingTable.set("56CA", "D2A5");
mappingTable.set("5A18", "D2A6");
mappingTable.set("5ECA", "D2A7");
mappingTable.set("6717", "D2A8");
mappingTable.set("6D6A", "D2A9");
mappingTable.set("72FC", "D2AA");
mappingTable.set("0026", "D2AB");
mappingTable.set("4E43", "D2AC");
mappingTable.set("4F86", "D2AD");
mappingTable.set("5167", "D2AE");
mappingTable.set("5948", "D2AF");
mappingTable.set("67F0", "D2B0");
mappingTable.set("8010", "D2B1");
mappingTable.set("51B7", "D2B2");
mappingTable.set("5973", "D2B3");
mappingTable.set("5E74", "D2B4");
mappingTable.set("649A", "D2B5");
mappingTable.set("79CA", "D2B6");
mappingTable.set("5FF5", "D2B7");
mappingTable.set("606C", "D2B8");
mappingTable.set("62C8", "D2B9");
mappingTable.set("637B", "D2BA");
mappingTable.set("5BE7", "D2BB");
mappingTable.set("5BD7", "D2BC");
mappingTable.set("52AA", "D2BD");
mappingTable.set("52DE", "D2BE");
mappingTable.set("5974", "D2BF");
mappingTable.set("5F29", "D2C0");
mappingTable.set("6012", "D2C1");
mappingTable.set("64C4", "D2C2");
mappingTable.set("6AD3", "D2C3");
mappingTable.set("7210", "D2C4");
mappingTable.set("7459", "D2C5");
mappingTable.set("76E7", "D2C6");
mappingTable.set("8001", "D2C7");
mappingTable.set("8606", "D2C8");
mappingTable.set("865C", "D2C9");
mappingTable.set("8DEF", "D2CA");
mappingTable.set("9732", "D2CB");
mappingTable.set("99D1", "D2CC");
mappingTable.set("9B6F", "D2CD");
mappingTable.set("9DFA", "D2CE");
mappingTable.set("788C", "D2CF");
mappingTable.set("797F", "D2D0");
mappingTable.set("7DA0", "D2D1");
mappingTable.set("83C9", "D2D2");
mappingTable.set("9304", "D2D3");
mappingTable.set("9E7F", "D2D4");
mappingTable.set("8AD6", "D2D5");
mappingTable.set("58DF", "D2D6");
mappingTable.set("5F04", "D2D7");
mappingTable.set("6FC3", "D2D8");
mappingTable.set("7C60", "D2D9");
mappingTable.set("807E", "D2DA");
mappingTable.set("81BF", "D2DB");
mappingTable.set("8FB2", "D2DC");
mappingTable.set("60F1", "D2DD");
mappingTable.set("7262", "D2DE");
mappingTable.set("78CA", "D2DF");
mappingTable.set("8166", "D2E0");
mappingTable.set("8CC2", "D2E1");
mappingTable.set("96F7", "D2E2");
mappingTable.set("5C3F", "D2E3");
mappingTable.set("58D8", "D2E4");
mappingTable.set("5C62", "D2E5");
mappingTable.set("6A13", "D2E6");
mappingTable.set("6DDA", "D2E7");
mappingTable.set("6F0F", "D2E8");
mappingTable.set("7D2F", "D2E9");
mappingTable.set("7E37", "D2EA");
mappingTable.set("964B", "D2EB");
mappingTable.set("5AE9", "D2EC");
mappingTable.set("8A25", "D2ED");
mappingTable.set("677B", "D2EE");
mappingTable.set("7D10", "D2EF");
mappingTable.set("52D2", "D2F0");
mappingTable.set("808B", "D2F1");
mappingTable.set("51DC", "D2F2");
mappingTable.set("51CC", "D2F3");
mappingTable.set("7A1C", "D2F4");
mappingTable.set("7DBE", "D2F5");
mappingTable.set("80FD", "D2F6");
mappingTable.set("83F1", "D2F7");
mappingTable.set("9675", "D2F8");
mappingTable.set("5C3C", "D2F9");
mappingTable.set("6CE5", "D2FA");
mappingTable.set("533F", "D2FB");
mappingTable.set("6EBA", "D2FC");
mappingTable.set("591A", "D2FD");
mappingTable.set("8336", "D2FE");
mappingTable.set("4E39", "D3A1");
mappingTable.set("4EB6", "D3A2");
mappingTable.set("4F46", "D3A3");
mappingTable.set("55AE", "D3A4");
mappingTable.set("5718", "D3A5");
mappingTable.set("58C7", "D3A6");
mappingTable.set("5F56", "D3A7");
mappingTable.set("65B7", "D3A8");
mappingTable.set("65E6", "D3A9");
mappingTable.set("6A80", "D3AA");
mappingTable.set("6BB5", "D3AB");
mappingTable.set("6E4D", "D3AC");
mappingTable.set("77ED", "D3AD");
mappingTable.set("7AEF", "D3AE");
mappingTable.set("7C1E", "D3AF");
mappingTable.set("7DDE", "D3B0");
mappingTable.set("86CB", "D3B1");
mappingTable.set("8892", "D3B2");
mappingTable.set("9132", "D3B3");
mappingTable.set("935B", "D3B4");
mappingTable.set("64BB", "D3B5");
mappingTable.set("6FBE", "D3B6");
mappingTable.set("737A", "D3B7");
mappingTable.set("75B8", "D3B8");
mappingTable.set("9054", "D3B9");
mappingTable.set("5556", "D3BA");
mappingTable.set("574D", "D3BB");
mappingTable.set("61BA", "D3BC");
mappingTable.set("64D4", "D3BD");
mappingTable.set("66C7", "D3BE");
mappingTable.set("6DE1", "D3BF");
mappingTable.set("6E5B", "D3C0");
mappingTable.set("6F6D", "D3C1");
mappingTable.set("6FB9", "D3C2");
mappingTable.set("75F0", "D3C3");
mappingTable.set("8043", "D3C4");
mappingTable.set("81BD", "D3C5");
mappingTable.set("8541", "D3C6");
mappingTable.set("8983", "D3C7");
mappingTable.set("8AC7", "D3C8");
mappingTable.set("8B5A", "D3C9");
mappingTable.set("931F", "D3CA");
mappingTable.set("6C93", "D3CB");
mappingTable.set("7553", "D3CC");
mappingTable.set("7B54", "D3CD");
mappingTable.set("8E0F", "D3CE");
mappingTable.set("905D", "D3CF");
mappingTable.set("5510", "D3D0");
mappingTable.set("5802", "D3D1");
mappingTable.set("5858", "D3D2");
mappingTable.set("5E62", "D3D3");
mappingTable.set("6207", "D3D4");
mappingTable.set("649E", "D3D5");
mappingTable.set("68E0", "D3D6");
mappingTable.set("7576", "D3D7");
mappingTable.set("7CD6", "D3D8");
mappingTable.set("87B3", "D3D9");
mappingTable.set("9EE8", "D3DA");
mappingTable.set("4EE3", "D3DB");
mappingTable.set("5788", "D3DC");
mappingTable.set("576E", "D3DD");
mappingTable.set("5927", "D3DE");
mappingTable.set("5C0D", "D3DF");
mappingTable.set("5CB1", "D3E0");
mappingTable.set("5E36", "D3E1");
mappingTable.set("5F85", "D3E2");
mappingTable.set("6234", "D3E3");
mappingTable.set("64E1", "D3E4");
mappingTable.set("73B3", "D3E5");
mappingTable.set("81FA", "D3E6");
mappingTable.set("888B", "D3E7");
mappingTable.set("8CB8", "D3E8");
mappingTable.set("968A", "D3E9");
mappingTable.set("9EDB", "D3EA");
mappingTable.set("5B85", "D3EB");
mappingTable.set("5FB7", "D3EC");
mappingTable.set("60B3", "D3ED");
mappingTable.set("5012", "D3EE");
mappingTable.set("5200", "D3EF");
mappingTable.set("5230", "D3F0");
mappingTable.set("5716", "D3F1");
mappingTable.set("5835", "D3F2");
mappingTable.set("5857", "D3F3");
mappingTable.set("5C0E", "D3F4");
mappingTable.set("5C60", "D3F5");
mappingTable.set("5CF6", "D3F6");
mappingTable.set("5D8B", "D3F7");
mappingTable.set("5EA6", "D3F8");
mappingTable.set("5F92", "D3F9");
mappingTable.set("60BC", "D3FA");
mappingTable.set("6311", "D3FB");
mappingTable.set("6389", "D3FC");
mappingTable.set("6417", "D3FD");
mappingTable.set("6843", "D3FE");
mappingTable.set("68F9", "D4A1");
mappingTable.set("6AC2", "D4A2");
mappingTable.set("6DD8", "D4A3");
mappingTable.set("6E21", "D4A4");
mappingTable.set("6ED4", "D4A5");
mappingTable.set("6FE4", "D4A6");
mappingTable.set("71FE", "D4A7");
mappingTable.set("76DC", "D4A8");
mappingTable.set("7779", "D4A9");
mappingTable.set("79B1", "D4AA");
mappingTable.set("7A3B", "D4AB");
mappingTable.set("8404", "D4AC");
mappingTable.set("89A9", "D4AD");
mappingTable.set("8CED", "D4AE");
mappingTable.set("8DF3", "D4AF");
mappingTable.set("8E48", "D4B0");
mappingTable.set("9003", "D4B1");
mappingTable.set("9014", "D4B2");
mappingTable.set("9053", "D4B3");
mappingTable.set("90FD", "D4B4");
mappingTable.set("934D", "D4B5");
mappingTable.set("9676", "D4B6");
mappingTable.set("97DC", "D4B7");
mappingTable.set("6BD2", "D4B8");
mappingTable.set("7006", "D4B9");
mappingTable.set("7258", "D4BA");
mappingTable.set("72A2", "D4BB");
mappingTable.set("7368", "D4BC");
mappingTable.set("7763", "D4BD");
mappingTable.set("79BF", "D4BE");
mappingTable.set("7BE4", "D4BF");
mappingTable.set("7E9B", "D4C0");
mappingTable.set("8B80", "D4C1");
mappingTable.set("58A9", "D4C2");
mappingTable.set("60C7", "D4C3");
mappingTable.set("6566", "D4C4");
mappingTable.set("65FD", "D4C5");
mappingTable.set("66BE", "D4C6");
mappingTable.set("6C8C", "D4C7");
mappingTable.set("711E", "D4C8");
mappingTable.set("71C9", "D4C9");
mappingTable.set("8C5A", "D4CA");
mappingTable.set("9813", "D4CB");
mappingTable.set("4E6D", "D4CC");
mappingTable.set("7A81", "D4CD");
mappingTable.set("4EDD", "D4CE");
mappingTable.set("51AC", "D4CF");
mappingTable.set("51CD", "D4D0");
mappingTable.set("52D5", "D4D1");
mappingTable.set("540C", "D4D2");
mappingTable.set("61A7", "D4D3");
mappingTable.set("6771", "D4D4");
mappingTable.set("6850", "D4D5");
mappingTable.set("68DF", "D4D6");
mappingTable.set("6D1E", "D4D7");
mappingTable.set("6F7C", "D4D8");
mappingTable.set("75BC", "D4D9");
mappingTable.set("77B3", "D4DA");
mappingTable.set("7AE5", "D4DB");
mappingTable.set("80F4", "D4DC");
mappingTable.set("8463", "D4DD");
mappingTable.set("9285", "D4DE");
mappingTable.set("515C", "D4DF");
mappingTable.set("6597", "D4E0");
mappingTable.set("675C", "D4E1");
mappingTable.set("6793", "D4E2");
mappingTable.set("75D8", "D4E3");
mappingTable.set("7AC7", "D4E4");
mappingTable.set("8373", "D4E5");
mappingTable.set("8B80", "D4E6");
mappingTable.set("8C46", "D4E7");
mappingTable.set("9017", "D4E8");
mappingTable.set("982D", "D4E9");
mappingTable.set("5C6F", "D4EA");
mappingTable.set("81C0", "D4EB");
mappingTable.set("829A", "D4EC");
mappingTable.set("9041", "D4ED");
mappingTable.set("906F", "D4EE");
mappingTable.set("920D", "D4EF");
mappingTable.set("5F97", "D4F0");
mappingTable.set("5D9D", "D4F1");
mappingTable.set("6A59", "D4F2");
mappingTable.set("71C8", "D4F3");
mappingTable.set("767B", "D4F4");
mappingTable.set("7B49", "D4F5");
mappingTable.set("85E4", "D4F6");
mappingTable.set("8B04", "D4F7");
mappingTable.set("9127", "D4F8");
mappingTable.set("9A30", "D4F9");
mappingTable.set("5587", "D4FA");
mappingTable.set("61F6", "D4FB");
mappingTable.set("62CF", "D4FC");
mappingTable.set("7669", "D4FD");
mappingTable.set("7F85", "D4FE");
mappingTable.set("863F", "D5A1");
mappingTable.set("87BA", "D5A2");
mappingTable.set("88F8", "D5A3");
mappingTable.set("908F", "D5A4");
mappingTable.set("6A02", "D5A5");
mappingTable.set("6D1B", "D5A6");
mappingTable.set("70D9", "D5A7");
mappingTable.set("73DE", "D5A8");
mappingTable.set("7D61", "D5A9");
mappingTable.set("843D", "D5AA");
mappingTable.set("8AFE", "D5AB");
mappingTable.set("916A", "D5AC");
mappingTable.set("99F1", "D5AD");
mappingTable.set("4E39", "D5AE");
mappingTable.set("4E82", "D5AF");
mappingTable.set("5375", "D5B0");
mappingTable.set("6B04", "D5B1");
mappingTable.set("6B12", "D5B2");
mappingTable.set("703E", "D5B3");
mappingTable.set("721B", "D5B4");
mappingTable.set("862D", "D5B5");
mappingTable.set("9E1E", "D5B6");
mappingTable.set("524C", "D5B7");
mappingTable.set("8FA3", "D5B8");
mappingTable.set("5D50", "D5B9");
mappingTable.set("64E5", "D5BA");
mappingTable.set("652C", "D5BB");
mappingTable.set("6B16", "D5BC");
mappingTable.set("6FEB", "D5BD");
mappingTable.set("7C43", "D5BE");
mappingTable.set("7E9C", "D5BF");
mappingTable.set("85CD", "D5C0");
mappingTable.set("8964", "D5C1");
mappingTable.set("89BD", "D5C2");
mappingTable.set("62C9", "D5C3");
mappingTable.set("81D8", "D5C4");
mappingTable.set("881F", "D5C5");
mappingTable.set("5ECA", "D5C6");
mappingTable.set("6717", "D5C7");
mappingTable.set("6D6A", "D5C8");
mappingTable.set("72FC", "D5C9");
mappingTable.set("7405", "D5CA");
mappingTable.set("746F", "D5CB");
mappingTable.set("8782", "D5CC");
mappingTable.set("90DE", "D5CD");
mappingTable.set("4F86", "D5CE");
mappingTable.set("5D0D", "D5CF");
mappingTable.set("5FA0", "D5D0");
mappingTable.set("840A", "D5D1");
mappingTable.set("51B7", "D5D2");
mappingTable.set("63A0", "D5D3");
mappingTable.set("7565", "D5D4");
mappingTable.set("4EAE", "D5D5");
mappingTable.set("5006", "D5D6");
mappingTable.set("5169", "D5D7");
mappingTable.set("51C9", "D5D8");
mappingTable.set("6881", "D5D9");
mappingTable.set("6A11", "D5DA");
mappingTable.set("7CAE", "D5DB");
mappingTable.set("7CB1", "D5DC");
mappingTable.set("7CE7", "D5DD");
mappingTable.set("826F", "D5DE");
mappingTable.set("8AD2", "D5DF");
mappingTable.set("8F1B", "D5E0");
mappingTable.set("91CF", "D5E1");
mappingTable.set("4FB6", "D5E2");
mappingTable.set("5137", "D5E3");
mappingTable.set("52F5", "D5E4");
mappingTable.set("5442", "D5E5");
mappingTable.set("5EEC", "D5E6");
mappingTable.set("616E", "D5E7");
mappingTable.set("623E", "D5E8");
mappingTable.set("65C5", "D5E9");
mappingTable.set("6ADA", "D5EA");
mappingTable.set("6FFE", "D5EB");
mappingTable.set("792A", "D5EC");
mappingTable.set("85DC", "D5ED");
mappingTable.set("8823", "D5EE");
mappingTable.set("95AD", "D5EF");
mappingTable.set("9A62", "D5F0");
mappingTable.set("9A6A", "D5F1");
mappingTable.set("9E97", "D5F2");
mappingTable.set("9ECE", "D5F3");
mappingTable.set("529B", "D5F4");
mappingTable.set("66C6", "D5F5");
mappingTable.set("6B77", "D5F6");
mappingTable.set("701D", "D5F7");
mappingTable.set("792B", "D5F8");
mappingTable.set("8F62", "D5F9");
mappingTable.set("9742", "D5FA");
mappingTable.set("6190", "D5FB");
mappingTable.set("6200", "D5FC");
mappingTable.set("6523", "D5FD");
mappingTable.set("6F23", "D5FE");
mappingTable.set("7149", "D6A1");
mappingTable.set("7489", "D6A2");
mappingTable.set("7DF4", "D6A3");
mappingTable.set("806F", "D6A4");
mappingTable.set("84EE", "D6A5");
mappingTable.set("8F26", "D6A6");
mappingTable.set("9023", "D6A7");
mappingTable.set("934A", "D6A8");
mappingTable.set("51BD", "D6A9");
mappingTable.set("5217", "D6AA");
mappingTable.set("52A3", "D6AB");
mappingTable.set("6D0C", "D6AC");
mappingTable.set("70C8", "D6AD");
mappingTable.set("88C2", "D6AE");
mappingTable.set("5EC9", "D6AF");
mappingTable.set("6582", "D6B0");
mappingTable.set("6BAE", "D6B1");
mappingTable.set("6FC2", "D6B2");
mappingTable.set("7C3E", "D6B3");
mappingTable.set("7375", "D6B4");
mappingTable.set("4EE4", "D6B5");
mappingTable.set("4F36", "D6B6");
mappingTable.set("56F9", "D6B7");
mappingTable.set("5BE7", "D6B8");
mappingTable.set("5CBA", "D6B9");
mappingTable.set("5DBA", "D6BA");
mappingTable.set("601C", "D6BB");
mappingTable.set("73B2", "D6BC");
mappingTable.set("7B2D", "D6BD");
mappingTable.set("7F9A", "D6BE");
mappingTable.set("7FCE", "D6BF");
mappingTable.set("8046", "D6C0");
mappingTable.set("901E", "D6C1");
mappingTable.set("9234", "D6C2");
mappingTable.set("96F6", "D6C3");
mappingTable.set("9748", "D6C4");
mappingTable.set("9818", "D6C5");
mappingTable.set("9F61", "D6C6");
mappingTable.set("4F8B", "D6C7");
mappingTable.set("6FA7", "D6C8");
mappingTable.set("79AE", "D6C9");
mappingTable.set("91B4", "D6CA");
mappingTable.set("96B7", "D6CB");
mappingTable.set("52DE", "D6CC");
mappingTable.set("6012", "D6CD");
mappingTable.set("6488", "D6CE");
mappingTable.set("64C4", "D6CF");
mappingTable.set("6AD3", "D6D0");
mappingTable.set("6F5E", "D6D1");
mappingTable.set("7018", "D6D2");
mappingTable.set("7210", "D6D3");
mappingTable.set("76E7", "D6D4");
mappingTable.set("8001", "D6D5");
mappingTable.set("8606", "D6D6");
mappingTable.set("865C", "D6D7");
mappingTable.set("8DEF", "D6D8");
mappingTable.set("8F05", "D6D9");
mappingTable.set("9732", "D6DA");
mappingTable.set("9B6F", "D6DB");
mappingTable.set("9DFA", "D6DC");
mappingTable.set("9E75", "D6DD");
mappingTable.set("788C", "D6DE");
mappingTable.set("797F", "D6DF");
mappingTable.set("7DA0", "D6E0");
mappingTable.set("83C9", "D6E1");
mappingTable.set("9304", "D6E2");
mappingTable.set("9E7F", "D6E3");
mappingTable.set("9E93", "D6E4");
mappingTable.set("8AD6", "D6E5");
mappingTable.set("58DF", "D6E6");
mappingTable.set("5F04", "D6E7");
mappingTable.set("6727", "D6E8");
mappingTable.set("7027", "D6E9");
mappingTable.set("74CF", "D6EA");
mappingTable.set("7C60", "D6EB");
mappingTable.set("807E", "D6EC");
mappingTable.set("5121", "D6ED");
mappingTable.set("7028", "D6EE");
mappingTable.set("7262", "D6EF");
mappingTable.set("78CA", "D6F0");
mappingTable.set("8CC2", "D6F1");
mappingTable.set("8CDA", "D6F2");
mappingTable.set("8CF4", "D6F3");
mappingTable.set("96F7", "D6F4");
mappingTable.set("4E86", "D6F5");
mappingTable.set("50DA", "D6F6");
mappingTable.set("5BEE", "D6F7");
mappingTable.set("5ED6", "D6F8");
mappingTable.set("6599", "D6F9");
mappingTable.set("71CE", "D6FA");
mappingTable.set("7642", "D6FB");
mappingTable.set("77AD", "D6FC");
mappingTable.set("804A", "D6FD");
mappingTable.set("84FC", "D6FE");
mappingTable.set("907C", "D7A1");
mappingTable.set("9B27", "D7A2");
mappingTable.set("9F8D", "D7A3");
mappingTable.set("58D8", "D7A4");
mappingTable.set("5A41", "D7A5");
mappingTable.set("5C62", "D7A6");
mappingTable.set("6A13", "D7A7");
mappingTable.set("6DDA", "D7A8");
mappingTable.set("6F0F", "D7A9");
mappingTable.set("763B", "D7AA");
mappingTable.set("7D2F", "D7AB");
mappingTable.set("7E37", "D7AC");
mappingTable.set("851E", "D7AD");
mappingTable.set("8938", "D7AE");
mappingTable.set("93E4", "D7AF");
mappingTable.set("964B", "D7B0");
mappingTable.set("5289", "D7B1");
mappingTable.set("65D2", "D7B2");
mappingTable.set("67F3", "D7B3");
mappingTable.set("69B4", "D7B4");
mappingTable.set("6D41", "D7B5");
mappingTable.set("6E9C", "D7B6");
mappingTable.set("700F", "D7B7");
mappingTable.set("7409", "D7B8");
mappingTable.set("7460", "D7B9");
mappingTable.set("7559", "D7BA");
mappingTable.set("7624", "D7BB");
mappingTable.set("786B", "D7BC");
mappingTable.set("8B2C", "D7BD");
mappingTable.set("985E", "D7BE");
mappingTable.set("516D", "D7BF");
mappingTable.set("622E", "D7C0");
mappingTable.set("9678", "D7C1");
mappingTable.set("4F96", "D7C2");
mappingTable.set("502B", "D7C3");
mappingTable.set("5D19", "D7C4");
mappingTable.set("6DEA", "D7C5");
mappingTable.set("7DB8", "D7C6");
mappingTable.set("8F2A", "D7C7");
mappingTable.set("5F8B", "D7C8");
mappingTable.set("6144", "D7C9");
mappingTable.set("6817", "D7CA");
mappingTable.set("7387", "D7CB");
mappingTable.set("9686", "D7CC");
mappingTable.set("52D2", "D7CD");
mappingTable.set("808B", "D7CE");
mappingTable.set("51DC", "D7CF");
mappingTable.set("51CC", "D7D0");
mappingTable.set("695E", "D7D1");
mappingTable.set("7A1C", "D7D2");
mappingTable.set("7DBE", "D7D3");
mappingTable.set("83F1", "D7D4");
mappingTable.set("9675", "D7D5");
mappingTable.set("4FDA", "D7D6");
mappingTable.set("5229", "D7D7");
mappingTable.set("5398", "D7D8");
mappingTable.set("540F", "D7D9");
mappingTable.set("550E", "D7DA");
mappingTable.set("5C65", "D7DB");
mappingTable.set("60A7", "D7DC");
mappingTable.set("674E", "D7DD");
mappingTable.set("68A8", "D7DE");
mappingTable.set("6D6C", "D7DF");
mappingTable.set("7281", "D7E0");
mappingTable.set("72F8", "D7E1");
mappingTable.set("7406", "D7E2");
mappingTable.set("7483", "D7E3");
mappingTable.set("7570", "D7E4");
mappingTable.set("75E2", "D7E5");
mappingTable.set("7C6C", "D7E6");
mappingTable.set("7F79", "D7E7");
mappingTable.set("7FB8", "D7E8");
mappingTable.set("8389", "D7E9");
mappingTable.set("88CF", "D7EA");
mappingTable.set("88E1", "D7EB");
mappingTable.set("91CC", "D7EC");
mappingTable.set("91D0", "D7ED");
mappingTable.set("96E2", "D7EE");
mappingTable.set("9BC9", "D7EF");
mappingTable.set("541D", "D7F0");
mappingTable.set("6F7E", "D7F1");
mappingTable.set("71D0", "D7F2");
mappingTable.set("7498", "D7F3");
mappingTable.set("85FA", "D7F4");
mappingTable.set("8EAA", "D7F5");
mappingTable.set("96A3", "D7F6");
mappingTable.set("9C57", "D7F7");
mappingTable.set("9E9F", "D7F8");
mappingTable.set("6797", "D7F9");
mappingTable.set("6DCB", "D7FA");
mappingTable.set("7433", "D7FB");
mappingTable.set("81E8", "D7FC");
mappingTable.set("9716", "D7FD");
mappingTable.set("782C", "D7FE");
mappingTable.set("7ACB", "D8A1");
mappingTable.set("7B20", "D8A2");
mappingTable.set("7C92", "D8A3");
mappingTable.set("6469", "D8A4");
mappingTable.set("746A", "D8A5");
mappingTable.set("75F2", "D8A6");
mappingTable.set("78BC", "D8A7");
mappingTable.set("78E8", "D8A8");
mappingTable.set("99AC", "D8A9");
mappingTable.set("9B54", "D8AA");
mappingTable.set("9EBB", "D8AB");
mappingTable.set("5BDE", "D8AC");
mappingTable.set("5E55", "D8AD");
mappingTable.set("6F20", "D8AE");
mappingTable.set("819C", "D8AF");
mappingTable.set("83AB", "D8B0");
mappingTable.set("9088", "D8B1");
mappingTable.set("4E07", "D8B2");
mappingTable.set("534D", "D8B3");
mappingTable.set("5A29", "D8B4");
mappingTable.set("5DD2", "D8B5");
mappingTable.set("5F4E", "D8B6");
mappingTable.set("6162", "D8B7");
mappingTable.set("633D", "D8B8");
mappingTable.set("6669", "D8B9");
mappingTable.set("66FC", "D8BA");
mappingTable.set("6EFF", "D8BB");
mappingTable.set("6F2B", "D8BC");
mappingTable.set("7063", "D8BD");
mappingTable.set("779E", "D8BE");
mappingTable.set("842C", "D8BF");
mappingTable.set("8513", "D8C0");
mappingTable.set("883B", "D8C1");
mappingTable.set("8F13", "D8C2");
mappingTable.set("9945", "D8C3");
mappingTable.set("9C3B", "D8C4");
mappingTable.set("551C", "D8C5");
mappingTable.set("62B9", "D8C6");
mappingTable.set("672B", "D8C7");
mappingTable.set("6CAB", "D8C8");
mappingTable.set("8309", "D8C9");
mappingTable.set("896A", "D8CA");
mappingTable.set("977A", "D8CB");
mappingTable.set("4EA1", "D8CC");
mappingTable.set("5984", "D8CD");
mappingTable.set("5FD8", "D8CE");
mappingTable.set("5FD9", "D8CF");
mappingTable.set("671B", "D8D0");
mappingTable.set("7DB2", "D8D1");
mappingTable.set("7F54", "D8D2");
mappingTable.set("8292", "D8D3");
mappingTable.set("832B", "D8D4");
mappingTable.set("83BD", "D8D5");
mappingTable.set("8F1E", "D8D6");
mappingTable.set("9099", "D8D7");
mappingTable.set("57CB", "D8D8");
mappingTable.set("59B9", "D8D9");
mappingTable.set("5A92", "D8DA");
mappingTable.set("5BD0", "D8DB");
mappingTable.set("6627", "D8DC");
mappingTable.set("679A", "D8DD");
mappingTable.set("6885", "D8DE");
mappingTable.set("6BCF", "D8DF");
mappingTable.set("7164", "D8E0");
mappingTable.set("7F75", "D8E1");
mappingTable.set("8CB7", "D8E2");
mappingTable.set("8CE3", "D8E3");
mappingTable.set("9081", "D8E4");
mappingTable.set("9B45", "D8E5");
mappingTable.set("8108", "D8E6");
mappingTable.set("8C8A", "D8E7");
mappingTable.set("964C", "D8E8");
mappingTable.set("9A40", "D8E9");
mappingTable.set("9EA5", "D8EA");
mappingTable.set("5B5F", "D8EB");
mappingTable.set("6C13", "D8EC");
mappingTable.set("731B", "D8ED");
mappingTable.set("76F2", "D8EE");
mappingTable.set("76DF", "D8EF");
mappingTable.set("840C", "D8F0");
mappingTable.set("51AA", "D8F1");
mappingTable.set("8993", "D8F2");
mappingTable.set("514D", "D8F3");
mappingTable.set("5195", "D8F4");
mappingTable.set("52C9", "D8F5");
mappingTable.set("68C9", "D8F6");
mappingTable.set("6C94", "D8F7");
mappingTable.set("7704", "D8F8");
mappingTable.set("7720", "D8F9");
mappingTable.set("7DBF", "D8FA");
mappingTable.set("7DEC", "D8FB");
mappingTable.set("9762", "D8FC");
mappingTable.set("9EB5", "D8FD");
mappingTable.set("6EC5", "D8FE");
mappingTable.set("8511", "D9A1");
mappingTable.set("51A5", "D9A2");
mappingTable.set("540D", "D9A3");
mappingTable.set("547D", "D9A4");
mappingTable.set("660E", "D9A5");
mappingTable.set("669D", "D9A6");
mappingTable.set("6927", "D9A7");
mappingTable.set("6E9F", "D9A8");
mappingTable.set("76BF", "D9A9");
mappingTable.set("7791", "D9AA");
mappingTable.set("8317", "D9AB");
mappingTable.set("84C2", "D9AC");
mappingTable.set("879F", "D9AD");
mappingTable.set("9169", "D9AE");
mappingTable.set("9298", "D9AF");
mappingTable.set("9CF4", "D9B0");
mappingTable.set("8882", "D9B1");
mappingTable.set("4FAE", "D9B2");
mappingTable.set("5192", "D9B3");
mappingTable.set("52DF", "D9B4");
mappingTable.set("59C6", "D9B5");
mappingTable.set("5E3D", "D9B6");
mappingTable.set("6155", "D9B7");
mappingTable.set("6478", "D9B8");
mappingTable.set("6479", "D9B9");
mappingTable.set("66AE", "D9BA");
mappingTable.set("67D0", "D9BB");
mappingTable.set("6A21", "D9BC");
mappingTable.set("6BCD", "D9BD");
mappingTable.set("6BDB", "D9BE");
mappingTable.set("725F", "D9BF");
mappingTable.set("7261", "D9C0");
mappingTable.set("7441", "D9C1");
mappingTable.set("7738", "D9C2");
mappingTable.set("77DB", "D9C3");
mappingTable.set("8017", "D9C4");
mappingTable.set("82BC", "D9C5");
mappingTable.set("8305", "D9C6");
mappingTable.set("8B00", "D9C7");
mappingTable.set("8B28", "D9C8");
mappingTable.set("8C8C", "D9C9");
mappingTable.set("6728", "D9CA");
mappingTable.set("6C90", "D9CB");
mappingTable.set("7267", "D9CC");
mappingTable.set("76EE", "D9CD");
mappingTable.set("7766", "D9CE");
mappingTable.set("7A46", "D9CF");
mappingTable.set("9DA9", "D9D0");
mappingTable.set("6B7F", "D9D1");
mappingTable.set("6C92", "D9D2");
mappingTable.set("5922", "D9D3");
mappingTable.set("6726", "D9D4");
mappingTable.set("8499", "D9D5");
mappingTable.set("536F", "D9D6");
mappingTable.set("5893", "D9D7");
mappingTable.set("5999", "D9D8");
mappingTable.set("5EDF", "D9D9");
mappingTable.set("63CF", "D9DA");
mappingTable.set("6634", "D9DB");
mappingTable.set("6773", "D9DC");
mappingTable.set("6E3A", "D9DD");
mappingTable.set("732B", "D9DE");
mappingTable.set("7AD7", "D9DF");
mappingTable.set("82D7", "D9E0");
mappingTable.set("9328", "D9E1");
mappingTable.set("52D9", "D9E2");
mappingTable.set("5DEB", "D9E3");
mappingTable.set("61AE", "D9E4");
mappingTable.set("61CB", "D9E5");
mappingTable.set("620A", "D9E6");
mappingTable.set("62C7", "D9E7");
mappingTable.set("64AB", "D9E8");
mappingTable.set("65E0", "D9E9");
mappingTable.set("6959", "D9EA");
mappingTable.set("6B66", "D9EB");
mappingTable.set("6BCB", "D9EC");
mappingTable.set("7121", "D9ED");
mappingTable.set("73F7", "D9EE");
mappingTable.set("755D", "D9EF");
mappingTable.set("7E46", "D9F0");
mappingTable.set("821E", "D9F1");
mappingTable.set("8302", "D9F2");
mappingTable.set("856A", "D9F3");
mappingTable.set("8AA3", "D9F4");
mappingTable.set("8CBF", "D9F5");
mappingTable.set("9727", "D9F6");
mappingTable.set("9D61", "D9F7");
mappingTable.set("58A8", "D9F8");
mappingTable.set("9ED8", "D9F9");
mappingTable.set("5011", "D9FA");
mappingTable.set("520E", "D9FB");
mappingTable.set("543B", "D9FC");
mappingTable.set("554F", "D9FD");
mappingTable.set("6587", "D9FE");
mappingTable.set("6C76", "DAA1");
mappingTable.set("7D0A", "DAA2");
mappingTable.set("7D0B", "DAA3");
mappingTable.set("805E", "DAA4");
mappingTable.set("868A", "DAA5");
mappingTable.set("9580", "DAA6");
mappingTable.set("96EF", "DAA7");
mappingTable.set("52FF", "DAA8");
mappingTable.set("6C95", "DAA9");
mappingTable.set("7269", "DAAA");
mappingTable.set("5473", "DAAB");
mappingTable.set("5A9A", "DAAC");
mappingTable.set("5C3E", "DAAD");
mappingTable.set("5D4B", "DAAE");
mappingTable.set("5F4C", "DAAF");
mappingTable.set("5FAE", "DAB0");
mappingTable.set("672A", "DAB1");
mappingTable.set("68B6", "DAB2");
mappingTable.set("6963", "DAB3");
mappingTable.set("6E3C", "DAB4");
mappingTable.set("6E44", "DAB5");
mappingTable.set("7709", "DAB6");
mappingTable.set("7C73", "DAB7");
mappingTable.set("7F8E", "DAB8");
mappingTable.set("8587", "DAB9");
mappingTable.set("8B0E", "DABA");
mappingTable.set("8FF7", "DABB");
mappingTable.set("9761", "DABC");
mappingTable.set("9EF4", "DABD");
mappingTable.set("5CB7", "DABE");
mappingTable.set("60B6", "DABF");
mappingTable.set("610D", "DAC0");
mappingTable.set("61AB", "DAC1");
mappingTable.set("654F", "DAC2");
mappingTable.set("65FB", "DAC3");
mappingTable.set("65FC", "DAC4");
mappingTable.set("6C11", "DAC5");
mappingTable.set("6CEF", "DAC6");
mappingTable.set("739F", "DAC7");
mappingTable.set("73C9", "DAC8");
mappingTable.set("7DE1", "DAC9");
mappingTable.set("9594", "DACA");
mappingTable.set("5BC6", "DACB");
mappingTable.set("871C", "DACC");
mappingTable.set("8B10", "DACD");
mappingTable.set("525D", "DACE");
mappingTable.set("535A", "DACF");
mappingTable.set("62CD", "DAD0");
mappingTable.set("640F", "DAD1");
mappingTable.set("64B2", "DAD2");
mappingTable.set("6734", "DAD3");
mappingTable.set("6A38", "DAD4");
mappingTable.set("6CCA", "DAD5");
mappingTable.set("73C0", "DAD6");
mappingTable.set("749E", "DAD7");
mappingTable.set("7B94", "DAD8");
mappingTable.set("7C95", "DAD9");
mappingTable.set("7E1B", "DADA");
mappingTable.set("818A", "DADB");
mappingTable.set("8236", "DADC");
mappingTable.set("8584", "DADD");
mappingTable.set("8FEB", "DADE");
mappingTable.set("96F9", "DADF");
mappingTable.set("99C1", "DAE0");
mappingTable.set("4F34", "DAE1");
mappingTable.set("534A", "DAE2");
mappingTable.set("53CD", "DAE3");
mappingTable.set("53DB", "DAE4");
mappingTable.set("62CC", "DAE5");
mappingTable.set("642C", "DAE6");
mappingTable.set("6500", "DAE7");
mappingTable.set("6591", "DAE8");
mappingTable.set("69C3", "DAE9");
mappingTable.set("6CEE", "DAEA");
mappingTable.set("6F58", "DAEB");
mappingTable.set("73ED", "DAEC");
mappingTable.set("7554", "DAED");
mappingTable.set("7622", "DAEE");
mappingTable.set("76E4", "DAEF");
mappingTable.set("76FC", "DAF0");
mappingTable.set("78D0", "DAF1");
mappingTable.set("78FB", "DAF2");
mappingTable.set("792C", "DAF3");
mappingTable.set("7D46", "DAF4");
mappingTable.set("822C", "DAF5");
mappingTable.set("87E0", "DAF6");
mappingTable.set("8FD4", "DAF7");
mappingTable.set("9812", "DAF8");
mappingTable.set("98EF", "DAF9");
mappingTable.set("52C3", "DAFA");
mappingTable.set("62D4", "DAFB");
mappingTable.set("64A5", "DAFC");
mappingTable.set("6E24", "DAFD");
mappingTable.set("6F51", "DAFE");
mappingTable.set("767C", "DBA1");
mappingTable.set("8DCB", "DBA2");
mappingTable.set("91B1", "DBA3");
mappingTable.set("9262", "DBA4");
mappingTable.set("9AEE", "DBA5");
mappingTable.set("9B43", "DBA6");
mappingTable.set("5023", "DBA7");
mappingTable.set("508D", "DBA8");
mappingTable.set("574A", "DBA9");
mappingTable.set("59A8", "DBAA");
mappingTable.set("5C28", "DBAB");
mappingTable.set("5E47", "DBAC");
mappingTable.set("5F77", "DBAD");
mappingTable.set("623F", "DBAE");
mappingTable.set("653E", "DBAF");
mappingTable.set("65B9", "DBB0");
mappingTable.set("65C1", "DBB1");
mappingTable.set("6609", "DBB2");
mappingTable.set("678B", "DBB3");
mappingTable.set("699C", "DBB4");
mappingTable.set("6EC2", "DBB5");
mappingTable.set("78C5", "DBB6");
mappingTable.set("7D21", "DBB7");
mappingTable.set("80AA", "DBB8");
mappingTable.set("8180", "DBB9");
mappingTable.set("822B", "DBBA");
mappingTable.set("82B3", "DBBB");
mappingTable.set("84A1", "DBBC");
mappingTable.set("868C", "DBBD");
mappingTable.set("8A2A", "DBBE");
mappingTable.set("8B17", "DBBF");
mappingTable.set("90A6", "DBC0");
mappingTable.set("9632", "DBC1");
mappingTable.set("9F90", "DBC2");
mappingTable.set("500D", "DBC3");
mappingTable.set("4FF3", "DBC4");
mappingTable.set("5317", "DBC5");
mappingTable.set("57F9", "DBC6");
mappingTable.set("5F98", "DBC7");
mappingTable.set("62DC", "DBC8");
mappingTable.set("6392", "DBC9");
mappingTable.set("676F", "DBCA");
mappingTable.set("6E43", "DBCB");
mappingTable.set("7119", "DBCC");
mappingTable.set("76C3", "DBCD");
mappingTable.set("80CC", "DBCE");
mappingTable.set("80DA", "DBCF");
mappingTable.set("88F4", "DBD0");
mappingTable.set("88F5", "DBD1");
mappingTable.set("8919", "DBD2");
mappingTable.set("8CE0", "DBD3");
mappingTable.set("8F29", "DBD4");
mappingTable.set("914D", "DBD5");
mappingTable.set("966A", "DBD6");
mappingTable.set("4F2F", "DBD7");
mappingTable.set("4F70", "DBD8");
mappingTable.set("5E1B", "DBD9");
mappingTable.set("67CF", "DBDA");
mappingTable.set("6822", "DBDB");
mappingTable.set("767D", "DBDC");
mappingTable.set("767E", "DBDD");
mappingTable.set("9B44", "DBDE");
mappingTable.set("5E61", "DBDF");
mappingTable.set("6A0A", "DBE0");
mappingTable.set("7169", "DBE1");
mappingTable.set("71D4", "DBE2");
mappingTable.set("756A", "DBE3");
mappingTable.set("78FB", "DBE4");
mappingTable.set("7E41", "DBE5");
mappingTable.set("8543", "DBE6");
mappingTable.set("85E9", "DBE7");
mappingTable.set("98DC", "DBE8");
mappingTable.set("4F10", "DBE9");
mappingTable.set("7B4F", "DBEA");
mappingTable.set("7F70", "DBEB");
mappingTable.set("95A5", "DBEC");
mappingTable.set("51E1", "DBED");
mappingTable.set("5E06", "DBEE");
mappingTable.set("68B5", "DBEF");
mappingTable.set("6C3E", "DBF0");
mappingTable.set("6C4E", "DBF1");
mappingTable.set("6CDB", "DBF2");
mappingTable.set("72AF", "DBF3");
mappingTable.set("7BC4", "DBF4");
mappingTable.set("8303", "DBF5");
mappingTable.set("6CD5", "DBF6");
mappingTable.set("743A", "DBF7");
mappingTable.set("50FB", "DBF8");
mappingTable.set("5288", "DBF9");
mappingTable.set("58C1", "DBFA");
mappingTable.set("64D8", "DBFB");
mappingTable.set("6A97", "DBFC");
mappingTable.set("74A7", "DBFD");
mappingTable.set("7656", "DBFE");
mappingTable.set("78A7", "DCA1");
mappingTable.set("8617", "DCA2");
mappingTable.set("95E2", "DCA3");
mappingTable.set("9739", "DCA4");
mappingTable.set("4FBF", "DCA5");
mappingTable.set("535E", "DCA6");
mappingTable.set("5F01", "DCA7");
mappingTable.set("8B8A", "DCA8");
mappingTable.set("8FA8", "DCA9");
mappingTable.set("8FAF", "DCAA");
mappingTable.set("908A", "DCAB");
mappingTable.set("5225", "DCAC");
mappingTable.set("77A5", "DCAD");
mappingTable.set("9C49", "DCAE");
mappingTable.set("9F08", "DCAF");
mappingTable.set("4E19", "DCB0");
mappingTable.set("5002", "DCB1");
mappingTable.set("5175", "DCB2");
mappingTable.set("5C5B", "DCB3");
mappingTable.set("5E77", "DCB4");
mappingTable.set("661E", "DCB5");
mappingTable.set("663A", "DCB6");
mappingTable.set("67C4", "DCB7");
mappingTable.set("68C5", "DCB8");
mappingTable.set("70B3", "DCB9");
mappingTable.set("7501", "DCBA");
mappingTable.set("75C5", "DCBB");
mappingTable.set("79C9", "DCBC");
mappingTable.set("7ADD", "DCBD");
mappingTable.set("8F27", "DCBE");
mappingTable.set("9920", "DCBF");
mappingTable.set("9A08", "DCC0");
mappingTable.set("4FDD", "DCC1");
mappingTable.set("5821", "DCC2");
mappingTable.set("5831", "DCC3");
mappingTable.set("5BF6", "DCC4");
mappingTable.set("666E", "DCC5");
mappingTable.set("6B65", "DCC6");
mappingTable.set("6D11", "DCC7");
mappingTable.set("6E7A", "DCC8");
mappingTable.set("6F7D", "DCC9");
mappingTable.set("73E4", "DCCA");
mappingTable.set("752B", "DCCB");
mappingTable.set("83E9", "DCCC");
mappingTable.set("88DC", "DCCD");
mappingTable.set("8913", "DCCE");
mappingTable.set("8B5C", "DCCF");
mappingTable.set("8F14", "DCD0");
mappingTable.set("4F0F", "DCD1");
mappingTable.set("50D5", "DCD2");
mappingTable.set("5310", "DCD3");
mappingTable.set("535C", "DCD4");
mappingTable.set("5B93", "DCD5");
mappingTable.set("5FA9", "DCD6");
mappingTable.set("670D", "DCD7");
mappingTable.set("798F", "DCD8");
mappingTable.set("8179", "DCD9");
mappingTable.set("832F", "DCDA");
mappingTable.set("8514", "DCDB");
mappingTable.set("8907", "DCDC");
mappingTable.set("8986", "DCDD");
mappingTable.set("8F39", "DCDE");
mappingTable.set("8F3B", "DCDF");
mappingTable.set("99A5", "DCE0");
mappingTable.set("9C12", "DCE1");
mappingTable.set("672C", "DCE2");
mappingTable.set("4E76", "DCE3");
mappingTable.set("4FF8", "DCE4");
mappingTable.set("5949", "DCE5");
mappingTable.set("5C01", "DCE6");
mappingTable.set("5CEF", "DCE7");
mappingTable.set("5CF0", "DCE8");
mappingTable.set("6367", "DCE9");
mappingTable.set("68D2", "DCEA");
mappingTable.set("70FD", "DCEB");
mappingTable.set("71A2", "DCEC");
mappingTable.set("742B", "DCED");
mappingTable.set("7E2B", "DCEE");
mappingTable.set("84EC", "DCEF");
mappingTable.set("8702", "DCF0");
mappingTable.set("9022", "DCF1");
mappingTable.set("92D2", "DCF2");
mappingTable.set("9CF3", "DCF3");
mappingTable.set("4E0D", "DCF4");
mappingTable.set("4ED8", "DCF5");
mappingTable.set("4FEF", "DCF6");
mappingTable.set("5085", "DCF7");
mappingTable.set("5256", "DCF8");
mappingTable.set("526F", "DCF9");
mappingTable.set("5426", "DCFA");
mappingTable.set("5490", "DCFB");
mappingTable.set("57E0", "DCFC");
mappingTable.set("592B", "DCFD");
mappingTable.set("5A66", "DCFE");
mappingTable.set("5B5A", "DDA1");
mappingTable.set("5B75", "DDA2");
mappingTable.set("5BCC", "DDA3");
mappingTable.set("5E9C", "DDA4");
mappingTable.set("5FA9", "DDA5");
mappingTable.set("6276", "DDA6");
mappingTable.set("6577", "DDA7");
mappingTable.set("65A7", "DDA8");
mappingTable.set("6D6E", "DDA9");
mappingTable.set("6EA5", "DDAA");
mappingTable.set("7236", "DDAB");
mappingTable.set("7B26", "DDAC");
mappingTable.set("7C3F", "DDAD");
mappingTable.set("7F36", "DDAE");
mappingTable.set("8150", "DDAF");
mappingTable.set("8151", "DDB0");
mappingTable.set("819A", "DDB1");
mappingTable.set("8240", "DDB2");
mappingTable.set("8299", "DDB3");
mappingTable.set("83A9", "DDB4");
mappingTable.set("8A03", "DDB5");
mappingTable.set("8CA0", "DDB6");
mappingTable.set("8CE6", "DDB7");
mappingTable.set("8CFB", "DDB8");
mappingTable.set("8D74", "DDB9");
mappingTable.set("8DBA", "DDBA");
mappingTable.set("90E8", "DDBB");
mappingTable.set("91DC", "DDBC");
mappingTable.set("961C", "DDBD");
mappingTable.set("9644", "DDBE");
mappingTable.set("99D9", "DDBF");
mappingTable.set("9CE7", "DDC0");
mappingTable.set("5317", "DDC1");
mappingTable.set("5206", "DDC2");
mappingTable.set("5429", "DDC3");
mappingTable.set("5674", "DDC4");
mappingTable.set("58B3", "DDC5");
mappingTable.set("5954", "DDC6");
mappingTable.set("596E", "DDC7");
mappingTable.set("5FFF", "DDC8");
mappingTable.set("61A4", "DDC9");
mappingTable.set("626E", "DDCA");
mappingTable.set("6610", "DDCB");
mappingTable.set("6C7E", "DDCC");
mappingTable.set("711A", "DDCD");
mappingTable.set("76C6", "DDCE");
mappingTable.set("7C89", "DDCF");
mappingTable.set("7CDE", "DDD0");
mappingTable.set("7D1B", "DDD1");
mappingTable.set("82AC", "DDD2");
mappingTable.set("8CC1", "DDD3");
mappingTable.set("96F0", "DDD4");
mappingTable.set("4E0D", "DDD5");
mappingTable.set("4F5B", "DDD6");
mappingTable.set("5F17", "DDD7");
mappingTable.set("5F7F", "DDD8");
mappingTable.set("62C2", "DDD9");
mappingTable.set("5D29", "DDDA");
mappingTable.set("670B", "DDDB");
mappingTable.set("68DA", "DDDC");
mappingTable.set("787C", "DDDD");
mappingTable.set("7E43", "DDDE");
mappingTable.set("9D6C", "DDDF");
mappingTable.set("4E15", "DDE0");
mappingTable.set("5099", "DDE1");
mappingTable.set("5315", "DDE2");
mappingTable.set("532A", "DDE3");
mappingTable.set("5351", "DDE4");
mappingTable.set("5983", "DDE5");
mappingTable.set("5A62", "DDE6");
mappingTable.set("5E87", "DDE7");
mappingTable.set("60B2", "DDE8");
mappingTable.set("618A", "DDE9");
mappingTable.set("6249", "DDEA");
mappingTable.set("6279", "DDEB");
mappingTable.set("6590", "DDEC");
mappingTable.set("6787", "DDED");
mappingTable.set("69A7", "DDEE");
mappingTable.set("6BD4", "DDEF");
mappingTable.set("6BD6", "DDF0");
mappingTable.set("6BD7", "DDF1");
mappingTable.set("6BD8", "DDF2");
mappingTable.set("6CB8", "DDF3");
mappingTable.set("6CCC", "DDF4");
mappingTable.set("7435", "DDF5");
mappingTable.set("75FA", "DDF6");
mappingTable.set("7812", "DDF7");
mappingTable.set("7891", "DDF8");
mappingTable.set("79D5", "DDF9");
mappingTable.set("79D8", "DDFA");
mappingTable.set("7C83", "DDFB");
mappingTable.set("7DCB", "DDFC");
mappingTable.set("7FE1", "DDFD");
mappingTable.set("80A5", "DDFE");
mappingTable.set("813E", "DEA1");
mappingTable.set("81C2", "DEA2");
mappingTable.set("83F2", "DEA3");
mappingTable.set("871A", "DEA4");
mappingTable.set("88E8", "DEA5");
mappingTable.set("8AB9", "DEA6");
mappingTable.set("8B6C", "DEA7");
mappingTable.set("8CBB", "DEA8");
mappingTable.set("9119", "DEA9");
mappingTable.set("975E", "DEAA");
mappingTable.set("98DB", "DEAB");
mappingTable.set("9F3B", "DEAC");
mappingTable.set("56AC", "DEAD");
mappingTable.set("5B2A", "DEAE");
mappingTable.set("5F6C", "DEAF");
mappingTable.set("658C", "DEB0");
mappingTable.set("6AB3", "DEB1");
mappingTable.set("6BAF", "DEB2");
mappingTable.set("6D5C", "DEB3");
mappingTable.set("6FF1", "DEB4");
mappingTable.set("7015", "DEB5");
mappingTable.set("725D", "DEB6");
mappingTable.set("73AD", "DEB7");
mappingTable.set("8CA7", "DEB8");
mappingTable.set("8CD3", "DEB9");
mappingTable.set("983B", "DEBA");
mappingTable.set("6191", "DEBB");
mappingTable.set("6C37", "DEBC");
mappingTable.set("8058", "DEBD");
mappingTable.set("9A01", "DEBE");
mappingTable.set("4E4D", "DEBF");
mappingTable.set("4E8B", "DEC0");
mappingTable.set("4E9B", "DEC1");
mappingTable.set("4ED5", "DEC2");
mappingTable.set("4F3A", "DEC3");
mappingTable.set("4F3C", "DEC4");
mappingTable.set("4F7F", "DEC5");
mappingTable.set("4FDF", "DEC6");
mappingTable.set("50FF", "DEC7");
mappingTable.set("53F2", "DEC8");
mappingTable.set("53F8", "DEC9");
mappingTable.set("5506", "DECA");
mappingTable.set("55E3", "DECB");
mappingTable.set("56DB", "DECC");
mappingTable.set("58EB", "DECD");
mappingTable.set("5962", "DECE");
mappingTable.set("5A11", "DECF");
mappingTable.set("5BEB", "DED0");
mappingTable.set("5BFA", "DED1");
mappingTable.set("5C04", "DED2");
mappingTable.set("5DF3", "DED3");
mappingTable.set("5E2B", "DED4");
mappingTable.set("5F99", "DED5");
mappingTable.set("601D", "DED6");
mappingTable.set("6368", "DED7");
mappingTable.set("659C", "DED8");
mappingTable.set("65AF", "DED9");
mappingTable.set("67F6", "DEDA");
mappingTable.set("67FB", "DEDB");
mappingTable.set("68AD", "DEDC");
mappingTable.set("6B7B", "DEDD");
mappingTable.set("6C99", "DEDE");
mappingTable.set("6CD7", "DEDF");
mappingTable.set("6E23", "DEE0");
mappingTable.set("7009", "DEE1");
mappingTable.set("7345", "DEE2");
mappingTable.set("7802", "DEE3");
mappingTable.set("793E", "DEE4");
mappingTable.set("7940", "DEE5");
mappingTable.set("7960", "DEE6");
mappingTable.set("79C1", "DEE7");
mappingTable.set("7BE9", "DEE8");
mappingTable.set("7D17", "DEE9");
mappingTable.set("7D72", "DEEA");
mappingTable.set("8086", "DEEB");
mappingTable.set("820D", "DEEC");
mappingTable.set("838E", "DEED");
mappingTable.set("84D1", "DEEE");
mappingTable.set("86C7", "DEEF");
mappingTable.set("88DF", "DEF0");
mappingTable.set("8A50", "DEF1");
mappingTable.set("8A5E", "DEF2");
mappingTable.set("8B1D", "DEF3");
mappingTable.set("8CDC", "DEF4");
mappingTable.set("8D66", "DEF5");
mappingTable.set("8FAD", "DEF6");
mappingTable.set("90AA", "DEF7");
mappingTable.set("98FC", "DEF8");
mappingTable.set("99DF", "DEF9");
mappingTable.set("9E9D", "DEFA");
mappingTable.set("524A", "DEFB");
mappingTable.set("6578", "DEFC");
mappingTable.set("6714", "DEFD");
mappingTable.set("7D22", "DEFE");
mappingTable.set("5098", "DFA1");
mappingTable.set("522A", "DFA2");
mappingTable.set("5C71", "DFA3");
mappingTable.set("6563", "DFA4");
mappingTable.set("6C55", "DFA5");
mappingTable.set("73CA", "DFA6");
mappingTable.set("7523", "DFA7");
mappingTable.set("759D", "DFA8");
mappingTable.set("7B97", "DFA9");
mappingTable.set("849C", "DFAA");
mappingTable.set("9178", "DFAB");
mappingTable.set("9730", "DFAC");
mappingTable.set("4E77", "DFAD");
mappingTable.set("6492", "DFAE");
mappingTable.set("6BBA", "DFAF");
mappingTable.set("715E", "DFB0");
mappingTable.set("85A9", "DFB1");
mappingTable.set("4E09", "DFB2");
mappingTable.set("53C3", "DFB3");
mappingTable.set("6749", "DFB4");
mappingTable.set("68EE", "DFB5");
mappingTable.set("6E17", "DFB6");
mappingTable.set("829F", "DFB7");
mappingTable.set("8518", "DFB8");
mappingTable.set("886B", "DFB9");
mappingTable.set("63F7", "DFBA");
mappingTable.set("6F81", "DFBB");
mappingTable.set("9212", "DFBC");
mappingTable.set("98AF", "DFBD");
mappingTable.set("4E0A", "DFBE");
mappingTable.set("50B7", "DFBF");
mappingTable.set("50CF", "DFC0");
mappingTable.set("511F", "DFC1");
mappingTable.set("5546", "DFC2");
mappingTable.set("55AA", "DFC3");
mappingTable.set("5617", "DFC4");
mappingTable.set("5B40", "DFC5");
mappingTable.set("5C19", "DFC6");
mappingTable.set("5CE0", "DFC7");
mappingTable.set("5E38", "DFC8");
mappingTable.set("5E8A", "DFC9");
mappingTable.set("5EA0", "DFCA");
mappingTable.set("5EC2", "DFCB");
mappingTable.set("60F3", "DFCC");
mappingTable.set("6851", "DFCD");
mappingTable.set("6A61", "DFCE");
mappingTable.set("6E58", "DFCF");
mappingTable.set("723D", "DFD0");
mappingTable.set("7240", "DFD1");
mappingTable.set("72C0", "DFD2");
mappingTable.set("76F8", "DFD3");
mappingTable.set("7965", "DFD4");
mappingTable.set("7BB1", "DFD5");
mappingTable.set("7FD4", "DFD6");
mappingTable.set("88F3", "DFD7");
mappingTable.set("89F4", "DFD8");
mappingTable.set("8A73", "DFD9");
mappingTable.set("8C61", "DFDA");
mappingTable.set("8CDE", "DFDB");
mappingTable.set("971C", "DFDC");
mappingTable.set("585E", "DFDD");
mappingTable.set("74BD", "DFDE");
mappingTable.set("8CFD", "DFDF");
mappingTable.set("55C7", "DFE0");
mappingTable.set("585E", "DFE1");
mappingTable.set("7A61", "DFE2");
mappingTable.set("7D22", "DFE3");
mappingTable.set("8272", "DFE4");
mappingTable.set("7272", "DFE5");
mappingTable.set("751F", "DFE6");
mappingTable.set("7525", "DFE7");
mappingTable.set("7701", "DFE8");
mappingTable.set("7B19", "DFE9");
mappingTable.set("5885", "DFEA");
mappingTable.set("58FB", "DFEB");
mappingTable.set("5DBC", "DFEC");
mappingTable.set("5E8F", "DFED");
mappingTable.set("5EB6", "DFEE");
mappingTable.set("5F90", "DFEF");
mappingTable.set("6055", "DFF0");
mappingTable.set("6292", "DFF1");
mappingTable.set("637F", "DFF2");
mappingTable.set("654D", "DFF3");
mappingTable.set("6691", "DFF4");
mappingTable.set("66D9", "DFF5");
mappingTable.set("66F8", "DFF6");
mappingTable.set("6816", "DFF7");
mappingTable.set("68F2", "DFF8");
mappingTable.set("7280", "DFF9");
mappingTable.set("745E", "DFFA");
mappingTable.set("7B6E", "DFFB");
mappingTable.set("7D6E", "DFFC");
mappingTable.set("7DD6", "DFFD");
mappingTable.set("7F72", "DFFE");
mappingTable.set("80E5", "E0A1");
mappingTable.set("8212", "E0A2");
mappingTable.set("85AF", "E0A3");
mappingTable.set("897F", "E0A4");
mappingTable.set("8A93", "E0A5");
mappingTable.set("901D", "E0A6");
mappingTable.set("92E4", "E0A7");
mappingTable.set("9ECD", "E0A8");
mappingTable.set("9F20", "E0A9");
mappingTable.set("5915", "E0AA");
mappingTable.set("596D", "E0AB");
mappingTable.set("5E2D", "E0AC");
mappingTable.set("60DC", "E0AD");
mappingTable.set("6614", "E0AE");
mappingTable.set("6673", "E0AF");
mappingTable.set("6790", "E0B0");
mappingTable.set("6C50", "E0B1");
mappingTable.set("6DC5", "E0B2");
mappingTable.set("6F5F", "E0B3");
mappingTable.set("77F3", "E0B4");
mappingTable.set("78A9", "E0B5");
mappingTable.set("84C6", "E0B6");
mappingTable.set("91CB", "E0B7");
mappingTable.set("932B", "E0B8");
mappingTable.set("4ED9", "E0B9");
mappingTable.set("50CA", "E0BA");
mappingTable.set("5148", "E0BB");
mappingTable.set("5584", "E0BC");
mappingTable.set("5B0B", "E0BD");
mappingTable.set("5BA3", "E0BE");
mappingTable.set("6247", "E0BF");
mappingTable.set("657E", "E0C0");
mappingTable.set("65CB", "E0C1");
mappingTable.set("6E32", "E0C2");
mappingTable.set("717D", "E0C3");
mappingTable.set("7401", "E0C4");
mappingTable.set("7444", "E0C5");
mappingTable.set("7487", "E0C6");
mappingTable.set("74BF", "E0C7");
mappingTable.set("766C", "E0C8");
mappingTable.set("79AA", "E0C9");
mappingTable.set("7DDA", "E0CA");
mappingTable.set("7E55", "E0CB");
mappingTable.set("7FA8", "E0CC");
mappingTable.set("817A", "E0CD");
mappingTable.set("81B3", "E0CE");
mappingTable.set("8239", "E0CF");
mappingTable.set("861A", "E0D0");
mappingTable.set("87EC", "E0D1");
mappingTable.set("8A75", "E0D2");
mappingTable.set("8DE3", "E0D3");
mappingTable.set("9078", "E0D4");
mappingTable.set("9291", "E0D5");
mappingTable.set("9425", "E0D6");
mappingTable.set("994D", "E0D7");
mappingTable.set("9BAE", "E0D8");
mappingTable.set("5368", "E0D9");
mappingTable.set("5C51", "E0DA");
mappingTable.set("6954", "E0DB");
mappingTable.set("6CC4", "E0DC");
mappingTable.set("6D29", "E0DD");
mappingTable.set("6E2B", "E0DE");
mappingTable.set("820C", "E0DF");
mappingTable.set("859B", "E0E0");
mappingTable.set("893B", "E0E1");
mappingTable.set("8A2D", "E0E2");
mappingTable.set("8AAA", "E0E3");
mappingTable.set("96EA", "E0E4");
mappingTable.set("9F67", "E0E5");
mappingTable.set("5261", "E0E6");
mappingTable.set("66B9", "E0E7");
mappingTable.set("6BB2", "E0E8");
mappingTable.set("7E96", "E0E9");
mappingTable.set("87FE", "E0EA");
mappingTable.set("8D0D", "E0EB");
mappingTable.set("9583", "E0EC");
mappingTable.set("965D", "E0ED");
mappingTable.set("651D", "E0EE");
mappingTable.set("6D89", "E0EF");
mappingTable.set("71EE", "E0F0");
mappingTable.set("8449", "E0F1");
mappingTable.set("57CE", "E0F2");
mappingTable.set("59D3", "E0F3");
mappingTable.set("5BAC", "E0F4");
mappingTable.set("6027", "E0F5");
mappingTable.set("60FA", "E0F6");
mappingTable.set("6210", "E0F7");
mappingTable.set("661F", "E0F8");
mappingTable.set("665F", "E0F9");
mappingTable.set("7329", "E0FA");
mappingTable.set("73F9", "E0FB");
mappingTable.set("76DB", "E0FC");
mappingTable.set("7701", "E0FD");
mappingTable.set("7B6C", "E0FE");
mappingTable.set("8056", "E1A1");
mappingTable.set("8072", "E1A2");
mappingTable.set("8165", "E1A3");
mappingTable.set("8AA0", "E1A4");
mappingTable.set("9192", "E1A5");
mappingTable.set("4E16", "E1A6");
mappingTable.set("52E2", "E1A7");
mappingTable.set("6B72", "E1A8");
mappingTable.set("6D17", "E1A9");
mappingTable.set("7A05", "E1AA");
mappingTable.set("7B39", "E1AB");
mappingTable.set("7D30", "E1AC");
mappingTable.set("8AAA", "E1AD");
mappingTable.set("8CB0", "E1AE");
mappingTable.set("53EC", "E1AF");
mappingTable.set("562F", "E1B0");
mappingTable.set("5851", "E1B1");
mappingTable.set("5BB5", "E1B2");
mappingTable.set("5C0F", "E1B3");
mappingTable.set("5C11", "E1B4");
mappingTable.set("5DE2", "E1B5");
mappingTable.set("6240", "E1B6");
mappingTable.set("6383", "E1B7");
mappingTable.set("6414", "E1B8");
mappingTable.set("662D", "E1B9");
mappingTable.set("68B3", "E1BA");
mappingTable.set("6CBC", "E1BB");
mappingTable.set("6D88", "E1BC");
mappingTable.set("6EAF", "E1BD");
mappingTable.set("701F", "E1BE");
mappingTable.set("70A4", "E1BF");
mappingTable.set("71D2", "E1C0");
mappingTable.set("7526", "E1C1");
mappingTable.set("758F", "E1C2");
mappingTable.set("758E", "E1C3");
mappingTable.set("7619", "E1C4");
mappingTable.set("7B11", "E1C5");
mappingTable.set("7BE0", "E1C6");
mappingTable.set("7C2B", "E1C7");
mappingTable.set("7D20", "E1C8");
mappingTable.set("7D39", "E1C9");
mappingTable.set("852C", "E1CA");
mappingTable.set("856D", "E1CB");
mappingTable.set("8607", "E1CC");
mappingTable.set("8A34", "E1CD");
mappingTable.set("900D", "E1CE");
mappingTable.set("9061", "E1CF");
mappingTable.set("90B5", "E1D0");
mappingTable.set("92B7", "E1D1");
mappingTable.set("97F6", "E1D2");
mappingTable.set("9A37", "E1D3");
mappingTable.set("4FD7", "E1D4");
mappingTable.set("5C6C", "E1D5");
mappingTable.set("675F", "E1D6");
mappingTable.set("6D91", "E1D7");
mappingTable.set("7C9F", "E1D8");
mappingTable.set("7E8C", "E1D9");
mappingTable.set("8B16", "E1DA");
mappingTable.set("8D16", "E1DB");
mappingTable.set("901F", "E1DC");
mappingTable.set("5B6B", "E1DD");
mappingTable.set("5DFD", "E1DE");
mappingTable.set("640D", "E1DF");
mappingTable.set("84C0", "E1E0");
mappingTable.set("905C", "E1E1");
mappingTable.set("98E1", "E1E2");
mappingTable.set("7387", "E1E3");
mappingTable.set("5B8B", "E1E4");
mappingTable.set("609A", "E1E5");
mappingTable.set("677E", "E1E6");
mappingTable.set("6DDE", "E1E7");
mappingTable.set("8A1F", "E1E8");
mappingTable.set("8AA6", "E1E9");
mappingTable.set("9001", "E1EA");
mappingTable.set("980C", "E1EB");
mappingTable.set("5237", "E1EC");
mappingTable.set("6BBA", "E1ED");
mappingTable.set("7051", "E1EE");
mappingTable.set("788E", "E1EF");
mappingTable.set("9396", "E1F0");
mappingTable.set("8870", "E1F1");
mappingTable.set("91D7", "E1F2");
mappingTable.set("4FEE", "E1F3");
mappingTable.set("53D7", "E1F4");
mappingTable.set("55FD", "E1F5");
mappingTable.set("56DA", "E1F6");
mappingTable.set("5782", "E1F7");
mappingTable.set("58FD", "E1F8");
mappingTable.set("5AC2", "E1F9");
mappingTable.set("5B88", "E1FA");
mappingTable.set("5CAB", "E1FB");
mappingTable.set("5CC0", "E1FC");
mappingTable.set("5E25", "E1FD");
mappingTable.set("6101", "E1FE");
mappingTable.set("620D", "E2A1");
mappingTable.set("624B", "E2A2");
mappingTable.set("6388", "E2A3");
mappingTable.set("641C", "E2A4");
mappingTable.set("6536", "E2A5");
mappingTable.set("6578", "E2A6");
mappingTable.set("6A39", "E2A7");
mappingTable.set("6B8A", "E2A8");
mappingTable.set("6C34", "E2A9");
mappingTable.set("6D19", "E2AA");
mappingTable.set("6F31", "E2AB");
mappingTable.set("71E7", "E2AC");
mappingTable.set("72E9", "E2AD");
mappingTable.set("7378", "E2AE");
mappingTable.set("7407", "E2AF");
mappingTable.set("74B2", "E2B0");
mappingTable.set("7626", "E2B1");
mappingTable.set("7761", "E2B2");
mappingTable.set("79C0", "E2B3");
mappingTable.set("7A57", "E2B4");
mappingTable.set("7AEA", "E2B5");
mappingTable.set("7CB9", "E2B6");
mappingTable.set("7D8F", "E2B7");
mappingTable.set("7DAC", "E2B8");
mappingTable.set("7E61", "E2B9");
mappingTable.set("7F9E", "E2BA");
mappingTable.set("8129", "E2BB");
mappingTable.set("8331", "E2BC");
mappingTable.set("8490", "E2BD");
mappingTable.set("84DA", "E2BE");
mappingTable.set("85EA", "E2BF");
mappingTable.set("8896", "E2C0");
mappingTable.set("8AB0", "E2C1");
mappingTable.set("8B90", "E2C2");
mappingTable.set("8F38", "E2C3");
mappingTable.set("9042", "E2C4");
mappingTable.set("9083", "E2C5");
mappingTable.set("916C", "E2C6");
mappingTable.set("9296", "E2C7");
mappingTable.set("92B9", "E2C8");
mappingTable.set("968B", "E2C9");
mappingTable.set("96A7", "E2CA");
mappingTable.set("96A8", "E2CB");
mappingTable.set("96D6", "E2CC");
mappingTable.set("9700", "E2CD");
mappingTable.set("9808", "E2CE");
mappingTable.set("9996", "E2CF");
mappingTable.set("9AD3", "E2D0");
mappingTable.set("9B1A", "E2D1");
mappingTable.set("53D4", "E2D2");
mappingTable.set("587E", "E2D3");
mappingTable.set("5919", "E2D4");
mappingTable.set("5B70", "E2D5");
mappingTable.set("5BBF", "E2D6");
mappingTable.set("6DD1", "E2D7");
mappingTable.set("6F5A", "E2D8");
mappingTable.set("719F", "E2D9");
mappingTable.set("7421", "E2DA");
mappingTable.set("74B9", "E2DB");
mappingTable.set("8085", "E2DC");
mappingTable.set("83FD", "E2DD");
mappingTable.set("5DE1", "E2DE");
mappingTable.set("5F87", "E2DF");
mappingTable.set("5FAA", "E2E0");
mappingTable.set("6042", "E2E1");
mappingTable.set("65EC", "E2E2");
mappingTable.set("6812", "E2E3");
mappingTable.set("696F", "E2E4");
mappingTable.set("6A53", "E2E5");
mappingTable.set("6B89", "E2E6");
mappingTable.set("6D35", "E2E7");
mappingTable.set("6DF3", "E2E8");
mappingTable.set("73E3", "E2E9");
mappingTable.set("76FE", "E2EA");
mappingTable.set("77AC", "E2EB");
mappingTable.set("7B4D", "E2EC");
mappingTable.set("7D14", "E2ED");
mappingTable.set("8123", "E2EE");
mappingTable.set("821C", "E2EF");
mappingTable.set("8340", "E2F0");
mappingTable.set("84F4", "E2F1");
mappingTable.set("8563", "E2F2");
mappingTable.set("8A62", "E2F3");
mappingTable.set("8AC4", "E2F4");
mappingTable.set("9187", "E2F5");
mappingTable.set("931E", "E2F6");
mappingTable.set("9806", "E2F7");
mappingTable.set("99B4", "E2F8");
mappingTable.set("620C", "E2F9");
mappingTable.set("8853", "E2FA");
mappingTable.set("8FF0", "E2FB");
mappingTable.set("9265", "E2FC");
mappingTable.set("5D07", "E2FD");
mappingTable.set("5D27", "E2FE");
mappingTable.set("5D69", "E3A1");
mappingTable.set("745F", "E3A2");
mappingTable.set("819D", "E3A3");
mappingTable.set("8768", "E3A4");
mappingTable.set("6FD5", "E3A5");
mappingTable.set("62FE", "E3A6");
mappingTable.set("7FD2", "E3A7");
mappingTable.set("8936", "E3A8");
mappingTable.set("8972", "E3A9");
mappingTable.set("4E1E", "E3AA");
mappingTable.set("4E58", "E3AB");
mappingTable.set("50E7", "E3AC");
mappingTable.set("52DD", "E3AD");
mappingTable.set("5347", "E3AE");
mappingTable.set("627F", "E3AF");
mappingTable.set("6607", "E3B0");
mappingTable.set("7E69", "E3B1");
mappingTable.set("8805", "E3B2");
mappingTable.set("965E", "E3B3");
mappingTable.set("4F8D", "E3B4");
mappingTable.set("5319", "E3B5");
mappingTable.set("5636", "E3B6");
mappingTable.set("59CB", "E3B7");
mappingTable.set("5AA4", "E3B8");
mappingTable.set("5C38", "E3B9");
mappingTable.set("5C4E", "E3BA");
mappingTable.set("5C4D", "E3BB");
mappingTable.set("5E02", "E3BC");
mappingTable.set("5F11", "E3BD");
mappingTable.set("6043", "E3BE");
mappingTable.set("65BD", "E3BF");
mappingTable.set("662F", "E3C0");
mappingTable.set("6642", "E3C1");
mappingTable.set("67BE", "E3C2");
mappingTable.set("67F4", "E3C3");
mappingTable.set("731C", "E3C4");
mappingTable.set("77E2", "E3C5");
mappingTable.set("793A", "E3C6");
mappingTable.set("7FC5", "E3C7");
mappingTable.set("8494", "E3C8");
mappingTable.set("84CD", "E3C9");
mappingTable.set("8996", "E3CA");
mappingTable.set("8A66", "E3CB");
mappingTable.set("8A69", "E3CC");
mappingTable.set("8AE1", "E3CD");
mappingTable.set("8C55", "E3CE");
mappingTable.set("8C7A", "E3CF");
mappingTable.set("57F4", "E3D0");
mappingTable.set("5BD4", "E3D1");
mappingTable.set("5F0F", "E3D2");
mappingTable.set("606F", "E3D3");
mappingTable.set("62ED", "E3D4");
mappingTable.set("690D", "E3D5");
mappingTable.set("6B96", "E3D6");
mappingTable.set("6E5C", "E3D7");
mappingTable.set("7184", "E3D8");
mappingTable.set("7BD2", "E3D9");
mappingTable.set("8755", "E3DA");
mappingTable.set("8B58", "E3DB");
mappingTable.set("8EFE", "E3DC");
mappingTable.set("98DF", "E3DD");
mappingTable.set("98FE", "E3DE");
mappingTable.set("4F38", "E3DF");
mappingTable.set("4F81", "E3E0");
mappingTable.set("4FE1", "E3E1");
mappingTable.set("547B", "E3E2");
mappingTable.set("5A20", "E3E3");
mappingTable.set("5BB8", "E3E4");
mappingTable.set("613C", "E3E5");
mappingTable.set("65B0", "E3E6");
mappingTable.set("6668", "E3E7");
mappingTable.set("71FC", "E3E8");
mappingTable.set("7533", "E3E9");
mappingTable.set("795E", "E3EA");
mappingTable.set("7D33", "E3EB");
mappingTable.set("814E", "E3EC");
mappingTable.set("81E3", "E3ED");
mappingTable.set("8398", "E3EE");
mappingTable.set("85AA", "E3EF");
mappingTable.set("85CE", "E3F0");
mappingTable.set("8703", "E3F1");
mappingTable.set("8A0A", "E3F2");
mappingTable.set("8EAB", "E3F3");
mappingTable.set("8F9B", "E3F4");
mappingTable.set("8FB0", "E3F5");
mappingTable.set("8FC5", "E3F6");
mappingTable.set("5931", "E3F7");
mappingTable.set("5BA4", "E3F8");
mappingTable.set("5BE6", "E3F9");
mappingTable.set("6089", "E3FA");
mappingTable.set("5BE9", "E3FB");
mappingTable.set("5C0B", "E3FC");
mappingTable.set("5FC3", "E3FD");
mappingTable.set("6C81", "E3FE");
mappingTable.set("6C88", "E4A1");
mappingTable.set("6DF1", "E4A2");
mappingTable.set("700B", "E4A3");
mappingTable.set("751A", "E4A4");
mappingTable.set("82AF", "E4A5");
mappingTable.set("8AF6", "E4A6");
mappingTable.set("4EC0", "E4A7");
mappingTable.set("5341", "E4A8");
mappingTable.set("62FE", "E4A9");
mappingTable.set("96D9", "E4AA");
mappingTable.set("6C0F", "E4AB");
mappingTable.set("4E9E", "E4AC");
mappingTable.set("4FC4", "E4AD");
mappingTable.set("5152", "E4AE");
mappingTable.set("555E", "E4AF");
mappingTable.set("5A25", "E4B0");
mappingTable.set("5CE8", "E4B1");
mappingTable.set("6211", "E4B2");
mappingTable.set("7259", "E4B3");
mappingTable.set("82BD", "E4B4");
mappingTable.set("83AA", "E4B5");
mappingTable.set("86FE", "E4B6");
mappingTable.set("8859", "E4B7");
mappingTable.set("8A1D", "E4B8");
mappingTable.set("963F", "E4B9");
mappingTable.set("96C5", "E4BA");
mappingTable.set("9913", "E4BB");
mappingTable.set("9D09", "E4BC");
mappingTable.set("9D5D", "E4BD");
mappingTable.set("580A", "E4BE");
mappingTable.set("5CB3", "E4BF");
mappingTable.set("5DBD", "E4C0");
mappingTable.set("5E44", "E4C1");
mappingTable.set("60E1", "E4C2");
mappingTable.set("6115", "E4C3");
mappingTable.set("63E1", "E4C4");
mappingTable.set("6A02", "E4C5");
mappingTable.set("6E25", "E4C6");
mappingTable.set("9102", "E4C7");
mappingTable.set("9354", "E4C8");
mappingTable.set("984E", "E4C9");
mappingTable.set("9C10", "E4CA");
mappingTable.set("9F77", "E4CB");
mappingTable.set("5B89", "E4CC");
mappingTable.set("5CB8", "E4CD");
mappingTable.set("6309", "E4CE");
mappingTable.set("664F", "E4CF");
mappingTable.set("6848", "E4D0");
mappingTable.set("773C", "E4D1");
mappingTable.set("96C1", "E4D2");
mappingTable.set("978D", "E4D3");
mappingTable.set("9854", "E4D4");
mappingTable.set("9B9F", "E4D5");
mappingTable.set("65A1", "E4D6");
mappingTable.set("8B01", "E4D7");
mappingTable.set("8ECB", "E4D8");
mappingTable.set("95BC", "E4D9");
mappingTable.set("5535", "E4DA");
mappingTable.set("5CA9", "E4DB");
mappingTable.set("5DD6", "E4DC");
mappingTable.set("5EB5", "E4DD");
mappingTable.set("6697", "E4DE");
mappingTable.set("764C", "E4DF");
mappingTable.set("83F4", "E4E0");
mappingTable.set("95C7", "E4E1");
mappingTable.set("58D3", "E4E2");
mappingTable.set("62BC", "E4E3");
mappingTable.set("72CE", "E4E4");
mappingTable.set("9D28", "E4E5");
mappingTable.set("4EF0", "E4E6");
mappingTable.set("592E", "E4E7");
mappingTable.set("600F", "E4E8");
mappingTable.set("663B", "E4E9");
mappingTable.set("6B83", "E4EA");
mappingTable.set("79E7", "E4EB");
mappingTable.set("9D26", "E4EC");
mappingTable.set("5393", "E4ED");
mappingTable.set("54C0", "E4EE");
mappingTable.set("57C3", "E4EF");
mappingTable.set("5D16", "E4F0");
mappingTable.set("611B", "E4F1");
mappingTable.set("66D6", "E4F2");
mappingTable.set("6DAF", "E4F3");
mappingTable.set("788D", "E4F4");
mappingTable.set("827E", "E4F5");
mappingTable.set("9698", "E4F6");
mappingTable.set("9744", "E4F7");
mappingTable.set("5384", "E4F8");
mappingTable.set("627C", "E4F9");
mappingTable.set("6396", "E4FA");
mappingTable.set("6DB2", "E4FB");
mappingTable.set("7E0A", "E4FC");
mappingTable.set("814B", "E4FD");
mappingTable.set("984D", "E4FE");
mappingTable.set("6AFB", "E5A1");
mappingTable.set("7F4C", "E5A2");
mappingTable.set("9DAF", "E5A3");
mappingTable.set("9E1A", "E5A4");
mappingTable.set("4E5F", "E5A5");
mappingTable.set("503B", "E5A6");
mappingTable.set("51B6", "E5A7");
mappingTable.set("591C", "E5A8");
mappingTable.set("60F9", "E5A9");
mappingTable.set("63F6", "E5AA");
mappingTable.set("6930", "E5AB");
mappingTable.set("723A", "E5AC");
mappingTable.set("8036", "E5AD");
mappingTable.set("82E5", "E5AE");
mappingTable.set("91CE", "E5AF");
mappingTable.set("5F31", "E5B0");
mappingTable.set("63A0", "E5B1");
mappingTable.set("7565", "E5B2");
mappingTable.set("7D04", "E5B3");
mappingTable.set("82E5", "E5B4");
mappingTable.set("846F", "E5B5");
mappingTable.set("84BB", "E5B6");
mappingTable.set("85E5", "E5B7");
mappingTable.set("8E8D", "E5B8");
mappingTable.set("4EAE", "E5B9");
mappingTable.set("4F6F", "E5BA");
mappingTable.set("5169", "E5BB");
mappingTable.set("51C9", "E5BC");
mappingTable.set("58E4", "E5BD");
mappingTable.set("5B43", "E5BE");
mappingTable.set("6059", "E5BF");
mappingTable.set("63DA", "E5C0");
mappingTable.set("6518", "E5C1");
mappingTable.set("656D", "E5C2");
mappingTable.set("6698", "E5C3");
mappingTable.set("6881", "E5C4");
mappingTable.set("694A", "E5C5");
mappingTable.set("6A23", "E5C6");
mappingTable.set("6D0B", "E5C7");
mappingTable.set("7001", "E5C8");
mappingTable.set("716C", "E5C9");
mappingTable.set("75D2", "E5CA");
mappingTable.set("760D", "E5CB");
mappingTable.set("79B3", "E5CC");
mappingTable.set("7A70", "E5CD");
mappingTable.set("7CE7", "E5CE");
mappingTable.set("7F8A", "E5CF");
mappingTable.set("826F", "E5D0");
mappingTable.set("8944", "E5D1");
mappingTable.set("8AD2", "E5D2");
mappingTable.set("8B93", "E5D3");
mappingTable.set("91C0", "E5D4");
mappingTable.set("967D", "E5D5");
mappingTable.set("91CF", "E5D6");
mappingTable.set("990A", "E5D7");
mappingTable.set("5704", "E5D8");
mappingTable.set("5FA1", "E5D9");
mappingTable.set("65BC", "E5DA");
mappingTable.set("6F01", "E5DB");
mappingTable.set("7600", "E5DC");
mappingTable.set("79A6", "E5DD");
mappingTable.set("8A9E", "E5DE");
mappingTable.set("99AD", "E5DF");
mappingTable.set("9B5A", "E5E0");
mappingTable.set("9F6C", "E5E1");
mappingTable.set("5104", "E5E2");
mappingTable.set("61B6", "E5E3");
mappingTable.set("6291", "E5E4");
mappingTable.set("6A8D", "E5E5");
mappingTable.set("81C6", "E5E6");
mappingTable.set("5043", "E5E7");
mappingTable.set("5830", "E5E8");
mappingTable.set("5F66", "E5E9");
mappingTable.set("7109", "E5EA");
mappingTable.set("8A00", "E5EB");
mappingTable.set("8AFA", "E5EC");
mappingTable.set("5B7C", "E5ED");
mappingTable.set("8616", "E5EE");
mappingTable.set("4FFA", "E5EF");
mappingTable.set("513C", "E5F0");
mappingTable.set("56B4", "E5F1");
mappingTable.set("5944", "E5F2");
mappingTable.set("63A9", "E5F3");
mappingTable.set("6DF9", "E5F4");
mappingTable.set("5DAA", "E5F5");
mappingTable.set("696D", "E5F6");
mappingTable.set("5186", "E5F7");
mappingTable.set("4E88", "E5F8");
mappingTable.set("4F59", "E5F9");
mappingTable.set("52F5", "E5FA");
mappingTable.set("5442", "E5FB");
mappingTable.set("5973", "E5FC");
mappingTable.set("5982", "E5FD");
mappingTable.set("5EEC", "E5FE");
mappingTable.set("65C5", "E6A1");
mappingTable.set("6B5F", "E6A2");
mappingTable.set("6C5D", "E6A3");
mappingTable.set("6FFE", "E6A4");
mappingTable.set("74B5", "E6A5");
mappingTable.set("7916", "E6A6");
mappingTable.set("792A", "E6A7");
mappingTable.set("8207", "E6A8");
mappingTable.set("8245", "E6A9");
mappingTable.set("8339", "E6AA");
mappingTable.set("8F3F", "E6AB");
mappingTable.set("8F5D", "E6AC");
mappingTable.set("95AD", "E6AD");
mappingTable.set("9918", "E6AE");
mappingTable.set("9A6A", "E6AF");
mappingTable.set("9E97", "E6B0");
mappingTable.set("9ECE", "E6B1");
mappingTable.set("4EA6", "E6B2");
mappingTable.set("529B", "E6B3");
mappingTable.set("57DF", "E6B4");
mappingTable.set("5F79", "E6B5");
mappingTable.set("6613", "E6B6");
mappingTable.set("66C6", "E6B7");
mappingTable.set("6B77", "E6B8");
mappingTable.set("75AB", "E6B9");
mappingTable.set("7E79", "E6BA");
mappingTable.set("8B6F", "E6BB");
mappingTable.set("8F62", "E6BC");
mappingTable.set("9006", "E6BD");
mappingTable.set("9A5B", "E6BE");
mappingTable.set("56A5", "E6BF");
mappingTable.set("5827", "E6C0");
mappingTable.set("59F8", "E6C1");
mappingTable.set("5A1F", "E6C2");
mappingTable.set("5BB4", "E6C3");
mappingTable.set("5E74", "E6C4");
mappingTable.set("5EF6", "E6C5");
mappingTable.set("6190", "E6C6");
mappingTable.set("6200", "E6C7");
mappingTable.set("6350", "E6C8");
mappingTable.set("633B", "E6C9");
mappingTable.set("649A", "E6CA");
mappingTable.set("693D", "E6CB");
mappingTable.set("6C87", "E6CC");
mappingTable.set("6CBF", "E6CD");
mappingTable.set("6D8E", "E6CE");
mappingTable.set("6D93", "E6CF");
mappingTable.set("6DF5", "E6D0");
mappingTable.set("6F14", "E6D1");
mappingTable.set("6F23", "E6D2");
mappingTable.set("70DF", "E6D3");
mappingTable.set("7136", "E6D4");
mappingTable.set("7159", "E6D5");
mappingTable.set("7149", "E6D6");
mappingTable.set("71C3", "E6D7");
mappingTable.set("71D5", "E6D8");
mappingTable.set("7489", "E6D9");
mappingTable.set("784F", "E6DA");
mappingTable.set("786F", "E6DB");
mappingTable.set("79CA", "E6DC");
mappingTable.set("7B75", "E6DD");
mappingTable.set("7DE3", "E6DE");
mappingTable.set("7DF4", "E6DF");
mappingTable.set("7E2F", "E6E0");
mappingTable.set("806F", "E6E1");
mappingTable.set("884D", "E6E2");
mappingTable.set("8EDF", "E6E3");
mappingTable.set("8F26", "E6E4");
mappingTable.set("84EE", "E6E5");
mappingTable.set("9023", "E6E6");
mappingTable.set("925B", "E6E7");
mappingTable.set("934A", "E6E8");
mappingTable.set("9CF6", "E6E9");
mappingTable.set("5217", "E6EA");
mappingTable.set("52A3", "E6EB");
mappingTable.set("54BD", "E6EC");
mappingTable.set("6085", "E6ED");
mappingTable.set("6D85", "E6EE");
mappingTable.set("70C8", "E6EF");
mappingTable.set("71B1", "E6F0");
mappingTable.set("88C2", "E6F1");
mappingTable.set("8AAA", "E6F2");
mappingTable.set("95B1", "E6F3");
mappingTable.set("53AD", "E6F4");
mappingTable.set("5EC9", "E6F5");
mappingTable.set("5FF5", "E6F6");
mappingTable.set("637B", "E6F7");
mappingTable.set("67D3", "E6F8");
mappingTable.set("6BAE", "E6F9");
mappingTable.set("708E", "E6FA");
mappingTable.set("7130", "E6FB");
mappingTable.set("7430", "E6FC");
mappingTable.set("8276", "E6FD");
mappingTable.set("82D2", "E6FE");
mappingTable.set("7C3E", "E7A1");
mappingTable.set("95BB", "E7A2");
mappingTable.set("9AE5", "E7A3");
mappingTable.set("9E7D", "E7A4");
mappingTable.set("66C4", "E7A5");
mappingTable.set("7375", "E7A6");
mappingTable.set("71C1", "E7A7");
mappingTable.set("8449", "E7A8");
mappingTable.set("4EE4", "E7A9");
mappingTable.set("56F9", "E7AA");
mappingTable.set("584B", "E7AB");
mappingTable.set("5BE7", "E7AC");
mappingTable.set("5DBA", "E7AD");
mappingTable.set("5DB8", "E7AE");
mappingTable.set("5F71", "E7AF");
mappingTable.set("601C", "E7B0");
mappingTable.set("6620", "E7B1");
mappingTable.set("668E", "E7B2");
mappingTable.set("6979", "E7B3");
mappingTable.set("69AE", "E7B4");
mappingTable.set("6C38", "E7B5");
mappingTable.set("6CF3", "E7B6");
mappingTable.set("6E36", "E7B7");
mappingTable.set("6F41", "E7B8");
mappingTable.set("6FDA", "E7B9");
mappingTable.set("701B", "E7BA");
mappingTable.set("702F", "E7BB");
mappingTable.set("7150", "E7BC");
mappingTable.set("71DF", "E7BD");
mappingTable.set("7370", "E7BE");
mappingTable.set("73B2", "E7BF");
mappingTable.set("745B", "E7C0");
mappingTable.set("7469", "E7C1");
mappingTable.set("74D4", "E7C2");
mappingTable.set("76C8", "E7C3");
mappingTable.set("7A4E", "E7C4");
mappingTable.set("7E93", "E7C5");
mappingTable.set("7F9A", "E7C6");
mappingTable.set("8046", "E7C7");
mappingTable.set("82F1", "E7C8");
mappingTable.set("8A60", "E7C9");
mappingTable.set("8FCE", "E7CA");
mappingTable.set("9234", "E7CB");
mappingTable.set("9348", "E7CC");
mappingTable.set("96F6", "E7CD");
mappingTable.set("9719", "E7CE");
mappingTable.set("9748", "E7CF");
mappingTable.set("9818", "E7D0");
mappingTable.set("4E42", "E7D1");
mappingTable.set("502A", "E7D2");
mappingTable.set("4F8B", "E7D3");
mappingTable.set("5208", "E7D4");
mappingTable.set("53E1", "E7D5");
mappingTable.set("66F3", "E7D6");
mappingTable.set("6C6D", "E7D7");
mappingTable.set("6FCA", "E7D8");
mappingTable.set("730A", "E7D9");
mappingTable.set("777F", "E7DA");
mappingTable.set("7A62", "E7DB");
mappingTable.set("82AE", "E7DC");
mappingTable.set("85DD", "E7DD");
mappingTable.set("8602", "E7DE");
mappingTable.set("79AE", "E7DF");
mappingTable.set("88D4", "E7E0");
mappingTable.set("8A63", "E7E1");
mappingTable.set("8B7D", "E7E2");
mappingTable.set("8C6B", "E7E3");
mappingTable.set("91B4", "E7E4");
mappingTable.set("92B3", "E7E5");
mappingTable.set("0026", "E7E6");
mappingTable.set("9713", "E7E7");
mappingTable.set("9810", "E7E8");
mappingTable.set("4E94", "E7E9");
mappingTable.set("4F0D", "E7EA");
mappingTable.set("4FC9", "E7EB");
mappingTable.set("50B2", "E7EC");
mappingTable.set("5348", "E7ED");
mappingTable.set("543E", "E7EE");
mappingTable.set("5433", "E7EF");
mappingTable.set("55DA", "E7F0");
mappingTable.set("5862", "E7F1");
mappingTable.set("58BA", "E7F2");
mappingTable.set("5967", "E7F3");
mappingTable.set("5A1B", "E7F4");
mappingTable.set("5BE4", "E7F5");
mappingTable.set("609F", "E7F6");
mappingTable.set("60E1", "E7F7");
mappingTable.set("61CA", "E7F8");
mappingTable.set("6556", "E7F9");
mappingTable.set("65FF", "E7FA");
mappingTable.set("6664", "E7FB");
mappingTable.set("68A7", "E7FC");
mappingTable.set("6C5A", "E7FD");
mappingTable.set("6FB3", "E7FE");
mappingTable.set("70CF", "E8A1");
mappingTable.set("71AC", "E8A2");
mappingTable.set("7352", "E8A3");
mappingTable.set("7B7D", "E8A4");
mappingTable.set("8708", "E8A5");
mappingTable.set("8AA4", "E8A6");
mappingTable.set("9C32", "E8A7");
mappingTable.set("9F07", "E8A8");
mappingTable.set("5C4B", "E8A9");
mappingTable.set("6C83", "E8AA");
mappingTable.set("7344", "E8AB");
mappingTable.set("7389", "E8AC");
mappingTable.set("923A", "E8AD");
mappingTable.set("6EAB", "E8AE");
mappingTable.set("7465", "E8AF");
mappingTable.set("761F", "E8B0");
mappingTable.set("7A69", "E8B1");
mappingTable.set("7E15", "E8B2");
mappingTable.set("860A", "E8B3");
mappingTable.set("5140", "E8B4");
mappingTable.set("58C5", "E8B5");
mappingTable.set("64C1", "E8B6");
mappingTable.set("74EE", "E8B7");
mappingTable.set("7515", "E8B8");
mappingTable.set("7670", "E8B9");
mappingTable.set("7FC1", "E8BA");
mappingTable.set("9095", "E8BB");
mappingTable.set("96CD", "E8BC");
mappingTable.set("9954", "E8BD");
mappingTable.set("6E26", "E8BE");
mappingTable.set("74E6", "E8BF");
mappingTable.set("7AA9", "E8C0");
mappingTable.set("7AAA", "E8C1");
mappingTable.set("81E5", "E8C2");
mappingTable.set("86D9", "E8C3");
mappingTable.set("8778", "E8C4");
mappingTable.set("8A1B", "E8C5");
mappingTable.set("5A49", "E8C6");
mappingTable.set("5B8C", "E8C7");
mappingTable.set("5B9B", "E8C8");
mappingTable.set("68A1", "E8C9");
mappingTable.set("6900", "E8CA");
mappingTable.set("6D63", "E8CB");
mappingTable.set("73A9", "E8CC");
mappingTable.set("7413", "E8CD");
mappingTable.set("742C", "E8CE");
mappingTable.set("7897", "E8CF");
mappingTable.set("7DE9", "E8D0");
mappingTable.set("7FEB", "E8D1");
mappingTable.set("8118", "E8D2");
mappingTable.set("8155", "E8D3");
mappingTable.set("839E", "E8D4");
mappingTable.set("8C4C", "E8D5");
mappingTable.set("962E", "E8D6");
mappingTable.set("9811", "E8D7");
mappingTable.set("66F0", "E8D8");
mappingTable.set("5F80", "E8D9");
mappingTable.set("65FA", "E8DA");
mappingTable.set("6789", "E8DB");
mappingTable.set("6C6A", "E8DC");
mappingTable.set("738B", "E8DD");
mappingTable.set("502D", "E8DE");
mappingTable.set("5A03", "E8DF");
mappingTable.set("6B6A", "E8E0");
mappingTable.set("77EE", "E8E1");
mappingTable.set("5916", "E8E2");
mappingTable.set("5D6C", "E8E3");
mappingTable.set("5DCD", "E8E4");
mappingTable.set("7325", "E8E5");
mappingTable.set("754F", "E8E6");
mappingTable.set("4E86", "E8E7");
mappingTable.set("50DA", "E8E8");
mappingTable.set("50E5", "E8E9");
mappingTable.set("51F9", "E8EA");
mappingTable.set("582F", "E8EB");
mappingTable.set("592D", "E8EC");
mappingTable.set("5996", "E8ED");
mappingTable.set("59DA", "E8EE");
mappingTable.set("5BE5", "E8EF");
mappingTable.set("5BEE", "E8F0");
mappingTable.set("5C3F", "E8F1");
mappingTable.set("5DA2", "E8F2");
mappingTable.set("62D7", "E8F3");
mappingTable.set("6416", "E8F4");
mappingTable.set("6493", "E8F5");
mappingTable.set("64FE", "E8F6");
mappingTable.set("6599", "E8F7");
mappingTable.set("66DC", "E8F8");
mappingTable.set("6A02", "E8F9");
mappingTable.set("6A48", "E8FA");
mappingTable.set("71CE", "E8FB");
mappingTable.set("71FF", "E8FC");
mappingTable.set("7464", "E8FD");
mappingTable.set("7642", "E8FE");
mappingTable.set("7A88", "E9A1");
mappingTable.set("7AAF", "E9A2");
mappingTable.set("7E47", "E9A3");
mappingTable.set("7E5E", "E9A4");
mappingTable.set("8000", "E9A5");
mappingTable.set("8170", "E9A6");
mappingTable.set("84FC", "E9A7");
mappingTable.set("87EF", "E9A8");
mappingTable.set("8981", "E9A9");
mappingTable.set("8B20", "E9AA");
mappingTable.set("9059", "E9AB");
mappingTable.set("907C", "E9AC");
mappingTable.set("9080", "E9AD");
mappingTable.set("9952", "E9AE");
mappingTable.set("617E", "E9AF");
mappingTable.set("6B32", "E9B0");
mappingTable.set("6D74", "E9B1");
mappingTable.set("7E1F", "E9B2");
mappingTable.set("8925", "E9B3");
mappingTable.set("8FB1", "E9B4");
mappingTable.set("4FD1", "E9B5");
mappingTable.set("50AD", "E9B6");
mappingTable.set("5197", "E9B7");
mappingTable.set("52C7", "E9B8");
mappingTable.set("57C7", "E9B9");
mappingTable.set("5889", "E9BA");
mappingTable.set("5BB9", "E9BB");
mappingTable.set("5EB8", "E9BC");
mappingTable.set("6142", "E9BD");
mappingTable.set("6995", "E9BE");
mappingTable.set("6D8C", "E9BF");
mappingTable.set("6E67", "E9C0");
mappingTable.set("6EB6", "E9C1");
mappingTable.set("7194", "E9C2");
mappingTable.set("7462", "E9C3");
mappingTable.set("7528", "E9C4");
mappingTable.set("752C", "E9C5");
mappingTable.set("8073", "E9C6");
mappingTable.set("8338", "E9C7");
mappingTable.set("84C9", "E9C8");
mappingTable.set("8E0A", "E9C9");
mappingTable.set("9394", "E9CA");
mappingTable.set("93DE", "E9CB");
mappingTable.set("9F8D", "E9CC");
mappingTable.set("4E8E", "E9CD");
mappingTable.set("4F51", "E9CE");
mappingTable.set("5076", "E9CF");
mappingTable.set("512A", "E9D0");
mappingTable.set("53C8", "E9D1");
mappingTable.set("53CB", "E9D2");
mappingTable.set("53F3", "E9D3");
mappingTable.set("5B87", "E9D4");
mappingTable.set("5BD3", "E9D5");
mappingTable.set("5C24", "E9D6");
mappingTable.set("611A", "E9D7");
mappingTable.set("6182", "E9D8");
mappingTable.set("65F4", "E9D9");
mappingTable.set("725B", "E9DA");
mappingTable.set("7397", "E9DB");
mappingTable.set("7440", "E9DC");
mappingTable.set("76C2", "E9DD");
mappingTable.set("7950", "E9DE");
mappingTable.set("7991", "E9DF");
mappingTable.set("79B9", "E9E0");
mappingTable.set("7D06", "E9E1");
mappingTable.set("7FBD", "E9E2");
mappingTable.set("828B", "E9E3");
mappingTable.set("85D5", "E9E4");
mappingTable.set("865E", "E9E5");
mappingTable.set("8FC2", "E9E6");
mappingTable.set("9047", "E9E7");
mappingTable.set("90F5", "E9E8");
mappingTable.set("91EA", "E9E9");
mappingTable.set("9685", "E9EA");
mappingTable.set("96E8", "E9EB");
mappingTable.set("96E9", "E9EC");
mappingTable.set("52D6", "E9ED");
mappingTable.set("5F67", "E9EE");
mappingTable.set("65ED", "E9EF");
mappingTable.set("6631", "E9F0");
mappingTable.set("682F", "E9F1");
mappingTable.set("715C", "E9F2");
mappingTable.set("7A36", "E9F3");
mappingTable.set("90C1", "E9F4");
mappingTable.set("980A", "E9F5");
mappingTable.set("4E91", "E9F6");
mappingTable.set("6688", "E9F7");
mappingTable.set("6A52", "E9F8");
mappingTable.set("6B9E", "E9F9");
mappingTable.set("6F90", "E9FA");
mappingTable.set("7189", "E9FB");
mappingTable.set("8018", "E9FC");
mappingTable.set("82B8", "E9FD");
mappingTable.set("8553", "E9FE");
mappingTable.set("904B", "EAA1");
mappingTable.set("9695", "EAA2");
mappingTable.set("96F2", "EAA3");
mappingTable.set("97FB", "EAA4");
mappingTable.set("851A", "EAA5");
mappingTable.set("9B31", "EAA6");
mappingTable.set("4E90", "EAA7");
mappingTable.set("718A", "EAA8");
mappingTable.set("96C4", "EAA9");
mappingTable.set("5143", "EAAA");
mappingTable.set("539F", "EAAB");
mappingTable.set("54E1", "EAAC");
mappingTable.set("5713", "EAAD");
mappingTable.set("5712", "EAAE");
mappingTable.set("57A3", "EAAF");
mappingTable.set("5A9B", "EAB0");
mappingTable.set("5AC4", "EAB1");
mappingTable.set("5BC3", "EAB2");
mappingTable.set("6028", "EAB3");
mappingTable.set("613F", "EAB4");
mappingTable.set("63F4", "EAB5");
mappingTable.set("6C85", "EAB6");
mappingTable.set("6D39", "EAB7");
mappingTable.set("6E72", "EAB8");
mappingTable.set("6E90", "EAB9");
mappingTable.set("7230", "EABA");
mappingTable.set("733F", "EABB");
mappingTable.set("7457", "EABC");
mappingTable.set("82D1", "EABD");
mappingTable.set("8881", "EABE");
mappingTable.set("8F45", "EABF");
mappingTable.set("9060", "EAC0");
mappingTable.set("962E", "EAC1");
mappingTable.set("9662", "EAC2");
mappingTable.set("9858", "EAC3");
mappingTable.set("9D1B", "EAC4");
mappingTable.set("6708", "EAC5");
mappingTable.set("8D8A", "EAC6");
mappingTable.set("925E", "EAC7");
mappingTable.set("4F4D", "EAC8");
mappingTable.set("5049", "EAC9");
mappingTable.set("50DE", "EACA");
mappingTable.set("5371", "EACB");
mappingTable.set("570D", "EACC");
mappingTable.set("59D4", "EACD");
mappingTable.set("5A01", "EACE");
mappingTable.set("5C09", "EACF");
mappingTable.set("6170", "EAD0");
mappingTable.set("6690", "EAD1");
mappingTable.set("6E2D", "EAD2");
mappingTable.set("7232", "EAD3");
mappingTable.set("744B", "EAD4");
mappingTable.set("7DEF", "EAD5");
mappingTable.set("80C3", "EAD6");
mappingTable.set("840E", "EAD7");
mappingTable.set("8466", "EAD8");
mappingTable.set("853F", "EAD9");
mappingTable.set("875F", "EADA");
mappingTable.set("885B", "EADB");
mappingTable.set("8918", "EADC");
mappingTable.set("8B02", "EADD");
mappingTable.set("9055", "EADE");
mappingTable.set("97CB", "EADF");
mappingTable.set("9B4F", "EAE0");
mappingTable.set("4E73", "EAE1");
mappingTable.set("4F91", "EAE2");
mappingTable.set("5112", "EAE3");
mappingTable.set("516A", "EAE4");
mappingTable.set("5289", "EAE5");
mappingTable.set("552F", "EAE6");
mappingTable.set("55A9", "EAE7");
mappingTable.set("5B7A", "EAE8");
mappingTable.set("5BA5", "EAE9");
mappingTable.set("5E7C", "EAEA");
mappingTable.set("5E7D", "EAEB");
mappingTable.set("5EBE", "EAEC");
mappingTable.set("60A0", "EAED");
mappingTable.set("60DF", "EAEE");
mappingTable.set("6108", "EAEF");
mappingTable.set("6109", "EAF0");
mappingTable.set("63C4", "EAF1");
mappingTable.set("6538", "EAF2");
mappingTable.set("6709", "EAF3");
mappingTable.set("677B", "EAF4");
mappingTable.set("67D4", "EAF5");
mappingTable.set("67DA", "EAF6");
mappingTable.set("67F3", "EAF7");
mappingTable.set("6961", "EAF8");
mappingTable.set("6962", "EAF9");
mappingTable.set("6CB9", "EAFA");
mappingTable.set("6D27", "EAFB");
mappingTable.set("6D41", "EAFC");
mappingTable.set("6E38", "EAFD");
mappingTable.set("6E9C", "EAFE");
mappingTable.set("6FE1", "EBA1");
mappingTable.set("7336", "EBA2");
mappingTable.set("7337", "EBA3");
mappingTable.set("7409", "EBA4");
mappingTable.set("745C", "EBA5");
mappingTable.set("7531", "EBA6");
mappingTable.set("7559", "EBA7");
mappingTable.set("7652", "EBA8");
mappingTable.set("786B", "EBA9");
mappingTable.set("7D10", "EBAA");
mappingTable.set("7DAD", "EBAB");
mappingTable.set("81FE", "EBAC");
mappingTable.set("8438", "EBAD");
mappingTable.set("88D5", "EBAE");
mappingTable.set("8A98", "EBAF");
mappingTable.set("8ADB", "EBB0");
mappingTable.set("8AED", "EBB1");
mappingTable.set("8E30", "EBB2");
mappingTable.set("8E42", "EBB3");
mappingTable.set("904A", "EBB4");
mappingTable.set("903E", "EBB5");
mappingTable.set("907A", "EBB6");
mappingTable.set("9149", "EBB7");
mappingTable.set("91C9", "EBB8");
mappingTable.set("936E", "EBB9");
mappingTable.set("985E", "EBBA");
mappingTable.set("516D", "EBBB");
mappingTable.set("5809", "EBBC");
mappingTable.set("622E", "EBBD");
mappingTable.set("6BD3", "EBBE");
mappingTable.set("8089", "EBBF");
mappingTable.set("80B2", "EBC0");
mappingTable.set("9678", "EBC1");
mappingTable.set("502B", "EBC2");
mappingTable.set("5141", "EBC3");
mappingTable.set("596B", "EBC4");
mappingTable.set("5C39", "EBC5");
mappingTable.set("5D19", "EBC6");
mappingTable.set("6DEA", "EBC7");
mappingTable.set("6F64", "EBC8");
mappingTable.set("73A7", "EBC9");
mappingTable.set("80E4", "EBCA");
mappingTable.set("8D07", "EBCB");
mappingTable.set("8F2A", "EBCC");
mappingTable.set("9217", "EBCD");
mappingTable.set("958F", "EBCE");
mappingTable.set("5F8B", "EBCF");
mappingTable.set("6144", "EBD0");
mappingTable.set("6817", "EBD1");
mappingTable.set("7387", "EBD2");
mappingTable.set("807F", "EBD3");
mappingTable.set("620E", "EBD4");
mappingTable.set("701C", "EBD5");
mappingTable.set("7D68", "EBD6");
mappingTable.set("878D", "EBD7");
mappingTable.set("9686", "EBD8");
mappingTable.set("57A0", "EBD9");
mappingTable.set("6069", "EBDA");
mappingTable.set("6147", "EBDB");
mappingTable.set("6BB7", "EBDC");
mappingTable.set("8ABE", "EBDD");
mappingTable.set("9280", "EBDE");
mappingTable.set("96B1", "EBDF");
mappingTable.set("4E59", "EBE0");
mappingTable.set("541F", "EBE1");
mappingTable.set("6DEB", "EBE2");
mappingTable.set("852D", "EBE3");
mappingTable.set("9670", "EBE4");
mappingTable.set("97F3", "EBE5");
mappingTable.set("98EE", "EBE6");
mappingTable.set("63D6", "EBE7");
mappingTable.set("6CE3", "EBE8");
mappingTable.set("9091", "EBE9");
mappingTable.set("51DD", "EBEA");
mappingTable.set("61C9", "EBEB");
mappingTable.set("81BA", "EBEC");
mappingTable.set("9DF9", "EBED");
mappingTable.set("4F9D", "EBEE");
mappingTable.set("501A", "EBEF");
mappingTable.set("5100", "EBF0");
mappingTable.set("5B9C", "EBF1");
mappingTable.set("610F", "EBF2");
mappingTable.set("61FF", "EBF3");
mappingTable.set("64EC", "EBF4");
mappingTable.set("6905", "EBF5");
mappingTable.set("6BC5", "EBF6");
mappingTable.set("7591", "EBF7");
mappingTable.set("77E3", "EBF8");
mappingTable.set("7FA9", "EBF9");
mappingTable.set("8264", "EBFA");
mappingTable.set("858F", "EBFB");
mappingTable.set("87FB", "EBFC");
mappingTable.set("8863", "EBFD");
mappingTable.set("8ABC", "EBFE");
mappingTable.set("8B70", "ECA1");
mappingTable.set("91AB", "ECA2");
mappingTable.set("4E8C", "ECA3");
mappingTable.set("4EE5", "ECA4");
mappingTable.set("4F0A", "ECA5");
mappingTable.set("5229", "ECA6");
mappingTable.set("540F", "ECA7");
mappingTable.set("5937", "ECA8");
mappingTable.set("59E8", "ECA9");
mappingTable.set("5C65", "ECAA");
mappingTable.set("5DF2", "ECAB");
mappingTable.set("5F1B", "ECAC");
mappingTable.set("5F5B", "ECAD");
mappingTable.set("6021", "ECAE");
mappingTable.set("6613", "ECAF");
mappingTable.set("674E", "ECB0");
mappingTable.set("68A8", "ECB1");
mappingTable.set("6CE5", "ECB2");
mappingTable.set("723E", "ECB3");
mappingTable.set("73E5", "ECB4");
mappingTable.set("7406", "ECB5");
mappingTable.set("7570", "ECB6");
mappingTable.set("75CD", "ECB7");
mappingTable.set("75E2", "ECB8");
mappingTable.set("79FB", "ECB9");
mappingTable.set("7F79", "ECBA");
mappingTable.set("800C", "ECBB");
mappingTable.set("8033", "ECBC");
mappingTable.set("8084", "ECBD");
mappingTable.set("82E1", "ECBE");
mappingTable.set("8351", "ECBF");
mappingTable.set("88CF", "ECC0");
mappingTable.set("88E1", "ECC1");
mappingTable.set("8CBD", "ECC2");
mappingTable.set("8CB3", "ECC3");
mappingTable.set("9087", "ECC4");
mappingTable.set("91CC", "ECC5");
mappingTable.set("96E2", "ECC6");
mappingTable.set("98F4", "ECC7");
mappingTable.set("990C", "ECC8");
mappingTable.set("533F", "ECC9");
mappingTable.set("6EBA", "ECCA");
mappingTable.set("7037", "ECCB");
mappingTable.set("76CA", "ECCC");
mappingTable.set("7FCA", "ECCD");
mappingTable.set("7FCC", "ECCE");
mappingTable.set("7FFC", "ECCF");
mappingTable.set("8B1A", "ECD0");
mappingTable.set("4EBA", "ECD1");
mappingTable.set("4EC1", "ECD2");
mappingTable.set("5203", "ECD3");
mappingTable.set("5370", "ECD4");
mappingTable.set("541D", "ECD5");
mappingTable.set("54BD", "ECD6");
mappingTable.set("56E0", "ECD7");
mappingTable.set("59FB", "ECD8");
mappingTable.set("5BC5", "ECD9");
mappingTable.set("5F15", "ECDA");
mappingTable.set("5FCD", "ECDB");
mappingTable.set("6E6E", "ECDC");
mappingTable.set("71D0", "ECDD");
mappingTable.set("7498", "ECDE");
mappingTable.set("7D6A", "ECDF");
mappingTable.set("8335", "ECE0");
mappingTable.set("85FA", "ECE1");
mappingTable.set("8693", "ECE2");
mappingTable.set("8A8D", "ECE3");
mappingTable.set("96A3", "ECE4");
mappingTable.set("976D", "ECE5");
mappingTable.set("9777", "ECE6");
mappingTable.set("9C57", "ECE7");
mappingTable.set("9E9F", "ECE8");
mappingTable.set("4E00", "ECE9");
mappingTable.set("4F5A", "ECEA");
mappingTable.set("4F7E", "ECEB");
mappingTable.set("58F9", "ECEC");
mappingTable.set("65E5", "ECED");
mappingTable.set("6EA2", "ECEE");
mappingTable.set("9038", "ECEF");
mappingTable.set("93B0", "ECF0");
mappingTable.set("99B9", "ECF1");
mappingTable.set("4EFB", "ECF2");
mappingTable.set("58EC", "ECF3");
mappingTable.set("598A", "ECF4");
mappingTable.set("59D9", "ECF5");
mappingTable.set("6041", "ECF6");
mappingTable.set("6797", "ECF7");
mappingTable.set("6DCB", "ECF8");
mappingTable.set("7A14", "ECF9");
mappingTable.set("81E8", "ECFA");
mappingTable.set("834F", "ECFB");
mappingTable.set("8CC3", "ECFC");
mappingTable.set("5165", "ECFD");
mappingTable.set("5344", "ECFE");
mappingTable.set("7ACB", "EDA1");
mappingTable.set("7B20", "EDA2");
mappingTable.set("7C92", "EDA3");
mappingTable.set("4ECD", "EDA4");
mappingTable.set("5269", "EDA5");
mappingTable.set("5B55", "EDA6");
mappingTable.set("82BF", "EDA7");
mappingTable.set("4ED4", "EDA8");
mappingTable.set("523A", "EDA9");
mappingTable.set("54A8", "EDAA");
mappingTable.set("59C9", "EDAB");
mappingTable.set("59FF", "EDAC");
mappingTable.set("5B50", "EDAD");
mappingTable.set("5B57", "EDAE");
mappingTable.set("5B5C", "EDAF");
mappingTable.set("6063", "EDB0");
mappingTable.set("6148", "EDB1");
mappingTable.set("6ECB", "EDB2");
mappingTable.set("7099", "EDB3");
mappingTable.set("716E", "EDB4");
mappingTable.set("7386", "EDB5");
mappingTable.set("74F7", "EDB6");
mappingTable.set("75B5", "EDB7");
mappingTable.set("78C1", "EDB8");
mappingTable.set("7D2B", "EDB9");
mappingTable.set("8005", "EDBA");
mappingTable.set("81EA", "EDBB");
mappingTable.set("8328", "EDBC");
mappingTable.set("8517", "EDBD");
mappingTable.set("85C9", "EDBE");
mappingTable.set("8AEE", "EDBF");
mappingTable.set("8CC7", "EDC0");
mappingTable.set("96CC", "EDC1");
mappingTable.set("4F5C", "EDC2");
mappingTable.set("52FA", "EDC3");
mappingTable.set("56BC", "EDC4");
mappingTable.set("65AB", "EDC5");
mappingTable.set("6628", "EDC6");
mappingTable.set("707C", "EDC7");
mappingTable.set("70B8", "EDC8");
mappingTable.set("7235", "EDC9");
mappingTable.set("7DBD", "EDCA");
mappingTable.set("828D", "EDCB");
mappingTable.set("914C", "EDCC");
mappingTable.set("96C0", "EDCD");
mappingTable.set("9D72", "EDCE");
mappingTable.set("5B71", "EDCF");
mappingTable.set("68E7", "EDD0");
mappingTable.set("6B98", "EDD1");
mappingTable.set("6F7A", "EDD2");
mappingTable.set("76DE", "EDD3");
mappingTable.set("5C91", "EDD4");
mappingTable.set("66AB", "EDD5");
mappingTable.set("6F5B", "EDD6");
mappingTable.set("7BB4", "EDD7");
mappingTable.set("7C2A", "EDD8");
mappingTable.set("8836", "EDD9");
mappingTable.set("96DC", "EDDA");
mappingTable.set("4E08", "EDDB");
mappingTable.set("4ED7", "EDDC");
mappingTable.set("5320", "EDDD");
mappingTable.set("5834", "EDDE");
mappingTable.set("58BB", "EDDF");
mappingTable.set("58EF", "EDE0");
mappingTable.set("596C", "EDE1");
mappingTable.set("5C07", "EDE2");
mappingTable.set("5E33", "EDE3");
mappingTable.set("5E84", "EDE4");
mappingTable.set("5F35", "EDE5");
mappingTable.set("638C", "EDE6");
mappingTable.set("66B2", "EDE7");
mappingTable.set("6756", "EDE8");
mappingTable.set("6A1F", "EDE9");
mappingTable.set("6AA3", "EDEA");
mappingTable.set("6B0C", "EDEB");
mappingTable.set("6F3F", "EDEC");
mappingTable.set("7246", "EDED");
mappingTable.set("72C0", "EDEE");
mappingTable.set("7350", "EDEF");
mappingTable.set("748B", "EDF0");
mappingTable.set("7AE0", "EDF1");
mappingTable.set("7CA7", "EDF2");
mappingTable.set("8178", "EDF3");
mappingTable.set("81DF", "EDF4");
mappingTable.set("81E7", "EDF5");
mappingTable.set("838A", "EDF6");
mappingTable.set("846C", "EDF7");
mappingTable.set("8523", "EDF8");
mappingTable.set("8594", "EDF9");
mappingTable.set("85CF", "EDFA");
mappingTable.set("88DD", "EDFB");
mappingTable.set("8D13", "EDFC");
mappingTable.set("91AC", "EDFD");
mappingTable.set("9577", "EDFE");
mappingTable.set("969C", "EEA1");
mappingTable.set("518D", "EEA2");
mappingTable.set("54C9", "EEA3");
mappingTable.set("5728", "EEA4");
mappingTable.set("5BB0", "EEA5");
mappingTable.set("624D", "EEA6");
mappingTable.set("6750", "EEA7");
mappingTable.set("683D", "EEA8");
mappingTable.set("6893", "EEA9");
mappingTable.set("6E3D", "EEAA");
mappingTable.set("6ED3", "EEAB");
mappingTable.set("707D", "EEAC");
mappingTable.set("7E21", "EEAD");
mappingTable.set("88C1", "EEAE");
mappingTable.set("8CA1", "EEAF");
mappingTable.set("8F09", "EEB0");
mappingTable.set("9F4B", "EEB1");
mappingTable.set("9F4E", "EEB2");
mappingTable.set("722D", "EEB3");
mappingTable.set("7B8F", "EEB4");
mappingTable.set("8ACD", "EEB5");
mappingTable.set("931A", "EEB6");
mappingTable.set("4F47", "EEB7");
mappingTable.set("4F4E", "EEB8");
mappingTable.set("5132", "EEB9");
mappingTable.set("5480", "EEBA");
mappingTable.set("59D0", "EEBB");
mappingTable.set("5E95", "EEBC");
mappingTable.set("62B5", "EEBD");
mappingTable.set("6775", "EEBE");
mappingTable.set("696E", "EEBF");
mappingTable.set("6A17", "EEC0");
mappingTable.set("6CAE", "EEC1");
mappingTable.set("6E1A", "EEC2");
mappingTable.set("72D9", "EEC3");
mappingTable.set("732A", "EEC4");
mappingTable.set("75BD", "EEC5");
mappingTable.set("7BB8", "EEC6");
mappingTable.set("7D35", "EEC7");
mappingTable.set("82E7", "EEC8");
mappingTable.set("83F9", "EEC9");
mappingTable.set("8457", "EECA");
mappingTable.set("85F7", "EECB");
mappingTable.set("8A5B", "EECC");
mappingTable.set("8CAF", "EECD");
mappingTable.set("8E87", "EECE");
mappingTable.set("9019", "EECF");
mappingTable.set("90B8", "EED0");
mappingTable.set("96CE", "EED1");
mappingTable.set("9F5F", "EED2");
mappingTable.set("52E3", "EED3");
mappingTable.set("540A", "EED4");
mappingTable.set("5AE1", "EED5");
mappingTable.set("5BC2", "EED6");
mappingTable.set("6458", "EED7");
mappingTable.set("6575", "EED8");
mappingTable.set("6EF4", "EED9");
mappingTable.set("72C4", "EEDA");
mappingTable.set("7099", "EEDB");
mappingTable.set("7684", "EEDC");
mappingTable.set("7A4D", "EEDD");
mappingTable.set("7B1B", "EEDE");
mappingTable.set("7C4D", "EEDF");
mappingTable.set("7E3E", "EEE0");
mappingTable.set("7FDF", "EEE1");
mappingTable.set("837B", "EEE2");
mappingTable.set("8B2B", "EEE3");
mappingTable.set("8CCA", "EEE4");
mappingTable.set("8D64", "EEE5");
mappingTable.set("8DE1", "EEE6");
mappingTable.set("8E5F", "EEE7");
mappingTable.set("8FEA", "EEE8");
mappingTable.set("8FF9", "EEE9");
mappingTable.set("9069", "EEEA");
mappingTable.set("93D1", "EEEB");
mappingTable.set("4F43", "EEEC");
mappingTable.set("4F7A", "EEED");
mappingTable.set("50B3", "EEEE");
mappingTable.set("5168", "EEEF");
mappingTable.set("5178", "EEF0");
mappingTable.set("524D", "EEF1");
mappingTable.set("526A", "EEF2");
mappingTable.set("5861", "EEF3");
mappingTable.set("587C", "EEF4");
mappingTable.set("5960", "EEF5");
mappingTable.set("5C08", "EEF6");
mappingTable.set("5C55", "EEF7");
mappingTable.set("5EDB", "EEF8");
mappingTable.set("609B", "EEF9");
mappingTable.set("6230", "EEFA");
mappingTable.set("6813", "EEFB");
mappingTable.set("6BBF", "EEFC");
mappingTable.set("6C08", "EEFD");
mappingTable.set("6FB1", "EEFE");
mappingTable.set("714E", "EFA1");
mappingTable.set("7420", "EFA2");
mappingTable.set("7530", "EFA3");
mappingTable.set("7538", "EFA4");
mappingTable.set("7551", "EFA5");
mappingTable.set("7672", "EFA6");
mappingTable.set("7B4C", "EFA7");
mappingTable.set("7B8B", "EFA8");
mappingTable.set("7BAD", "EFA9");
mappingTable.set("7BC6", "EFAA");
mappingTable.set("7E8F", "EFAB");
mappingTable.set("8A6E", "EFAC");
mappingTable.set("8F3E", "EFAD");
mappingTable.set("8F49", "EFAE");
mappingTable.set("923F", "EFAF");
mappingTable.set("9293", "EFB0");
mappingTable.set("9322", "EFB1");
mappingTable.set("942B", "EFB2");
mappingTable.set("96FB", "EFB3");
mappingTable.set("985A", "EFB4");
mappingTable.set("986B", "EFB5");
mappingTable.set("991E", "EFB6");
mappingTable.set("5207", "EFB7");
mappingTable.set("622A", "EFB8");
mappingTable.set("6298", "EFB9");
mappingTable.set("6D59", "EFBA");
mappingTable.set("7664", "EFBB");
mappingTable.set("7ACA", "EFBC");
mappingTable.set("7BC0", "EFBD");
mappingTable.set("7D76", "EFBE");
mappingTable.set("5360", "EFBF");
mappingTable.set("5CBE", "EFC0");
mappingTable.set("5E97", "EFC1");
mappingTable.set("6F38", "EFC2");
mappingTable.set("70B9", "EFC3");
mappingTable.set("7C98", "EFC4");
mappingTable.set("9711", "EFC5");
mappingTable.set("9B8E", "EFC6");
mappingTable.set("9EDE", "EFC7");
mappingTable.set("63A5", "EFC8");
mappingTable.set("647A", "EFC9");
mappingTable.set("8776", "EFCA");
mappingTable.set("4E01", "EFCB");
mappingTable.set("4E95", "EFCC");
mappingTable.set("4EAD", "EFCD");
mappingTable.set("505C", "EFCE");
mappingTable.set("5075", "EFCF");
mappingTable.set("5448", "EFD0");
mappingTable.set("59C3", "EFD1");
mappingTable.set("5B9A", "EFD2");
mappingTable.set("5E40", "EFD3");
mappingTable.set("5EAD", "EFD4");
mappingTable.set("5EF7", "EFD5");
mappingTable.set("5F81", "EFD6");
mappingTable.set("60C5", "EFD7");
mappingTable.set("633A", "EFD8");
mappingTable.set("653F", "EFD9");
mappingTable.set("6574", "EFDA");
mappingTable.set("65CC", "EFDB");
mappingTable.set("6676", "EFDC");
mappingTable.set("6678", "EFDD");
mappingTable.set("67FE", "EFDE");
mappingTable.set("6968", "EFDF");
mappingTable.set("6A89", "EFE0");
mappingTable.set("6B63", "EFE1");
mappingTable.set("6C40", "EFE2");
mappingTable.set("6DC0", "EFE3");
mappingTable.set("6DE8", "EFE4");
mappingTable.set("6E1F", "EFE5");
mappingTable.set("6E5E", "EFE6");
mappingTable.set("701E", "EFE7");
mappingTable.set("70A1", "EFE8");
mappingTable.set("738E", "EFE9");
mappingTable.set("73FD", "EFEA");
mappingTable.set("753A", "EFEB");
mappingTable.set("775B", "EFEC");
mappingTable.set("7887", "EFED");
mappingTable.set("798E", "EFEE");
mappingTable.set("7A0B", "EFEF");
mappingTable.set("7A7D", "EFF0");
mappingTable.set("7CBE", "EFF1");
mappingTable.set("7D8E", "EFF2");
mappingTable.set("8247", "EFF3");
mappingTable.set("8A02", "EFF4");
mappingTable.set("8AEA", "EFF5");
mappingTable.set("8C9E", "EFF6");
mappingTable.set("912D", "EFF7");
mappingTable.set("914A", "EFF8");
mappingTable.set("91D8", "EFF9");
mappingTable.set("9266", "EFFA");
mappingTable.set("92CC", "EFFB");
mappingTable.set("9320", "EFFC");
mappingTable.set("9706", "EFFD");
mappingTable.set("9756", "EFFE");
mappingTable.set("975C", "F0A1");
mappingTable.set("9802", "F0A2");
mappingTable.set("9F0E", "F0A3");
mappingTable.set("5236", "F0A4");
mappingTable.set("5291", "F0A5");
mappingTable.set("557C", "F0A6");
mappingTable.set("5824", "F0A7");
mappingTable.set("5E1D", "F0A8");
mappingTable.set("5F1F", "F0A9");
mappingTable.set("608C", "F0AA");
mappingTable.set("63D0", "F0AB");
mappingTable.set("68AF", "F0AC");
mappingTable.set("6FDF", "F0AD");
mappingTable.set("796D", "F0AE");
mappingTable.set("7B2C", "F0AF");
mappingTable.set("81CD", "F0B0");
mappingTable.set("85BA", "F0B1");
mappingTable.set("88FD", "F0B2");
mappingTable.set("8AF8", "F0B3");
mappingTable.set("8E44", "F0B4");
mappingTable.set("918D", "F0B5");
mappingTable.set("9664", "F0B6");
mappingTable.set("969B", "F0B7");
mappingTable.set("973D", "F0B8");
mappingTable.set("984C", "F0B9");
mappingTable.set("9F4A", "F0BA");
mappingTable.set("4FCE", "F0BB");
mappingTable.set("5146", "F0BC");
mappingTable.set("51CB", "F0BD");
mappingTable.set("52A9", "F0BE");
mappingTable.set("5632", "F0BF");
mappingTable.set("5F14", "F0C0");
mappingTable.set("5F6B", "F0C1");
mappingTable.set("63AA", "F0C2");
mappingTable.set("64CD", "F0C3");
mappingTable.set("65E9", "F0C4");
mappingTable.set("6641", "F0C5");
mappingTable.set("66FA", "F0C6");
mappingTable.set("66F9", "F0C7");
mappingTable.set("671D", "F0C8");
mappingTable.set("689D", "F0C9");
mappingTable.set("68D7", "F0CA");
mappingTable.set("69FD", "F0CB");
mappingTable.set("6F15", "F0CC");
mappingTable.set("6F6E", "F0CD");
mappingTable.set("7167", "F0CE");
mappingTable.set("71E5", "F0CF");
mappingTable.set("722A", "F0D0");
mappingTable.set("74AA", "F0D1");
mappingTable.set("773A", "F0D2");
mappingTable.set("7956", "F0D3");
mappingTable.set("795A", "F0D4");
mappingTable.set("79DF", "F0D5");
mappingTable.set("7A20", "F0D6");
mappingTable.set("7A95", "F0D7");
mappingTable.set("7C97", "F0D8");
mappingTable.set("7CDF", "F0D9");
mappingTable.set("7D44", "F0DA");
mappingTable.set("7E70", "F0DB");
mappingTable.set("8087", "F0DC");
mappingTable.set("85FB", "F0DD");
mappingTable.set("86A4", "F0DE");
mappingTable.set("8A54", "F0DF");
mappingTable.set("8ABF", "F0E0");
mappingTable.set("8D99", "F0E1");
mappingTable.set("8E81", "F0E2");
mappingTable.set("9020", "F0E3");
mappingTable.set("906D", "F0E4");
mappingTable.set("91E3", "F0E5");
mappingTable.set("963B", "F0E6");
mappingTable.set("96D5", "F0E7");
mappingTable.set("9CE5", "F0E8");
mappingTable.set("65CF", "F0E9");
mappingTable.set("7C07", "F0EA");
mappingTable.set("8DB3", "F0EB");
mappingTable.set("93C3", "F0EC");
mappingTable.set("5B58", "F0ED");
mappingTable.set("5C0A", "F0EE");
mappingTable.set("5352", "F0EF");
mappingTable.set("62D9", "F0F0");
mappingTable.set("731D", "F0F1");
mappingTable.set("5027", "F0F2");
mappingTable.set("5B97", "F0F3");
mappingTable.set("5F9E", "F0F4");
mappingTable.set("60B0", "F0F5");
mappingTable.set("616B", "F0F6");
mappingTable.set("68D5", "F0F7");
mappingTable.set("6DD9", "F0F8");
mappingTable.set("742E", "F0F9");
mappingTable.set("7A2E", "F0FA");
mappingTable.set("7D42", "F0FB");
mappingTable.set("7D9C", "F0FC");
mappingTable.set("7E31", "F0FD");
mappingTable.set("816B", "F0FE");
mappingTable.set("8E2A", "F1A1");
mappingTable.set("8E35", "F1A2");
mappingTable.set("937E", "F1A3");
mappingTable.set("9418", "F1A4");
mappingTable.set("4F50", "F1A5");
mappingTable.set("5750", "F1A6");
mappingTable.set("5DE6", "F1A7");
mappingTable.set("5EA7", "F1A8");
mappingTable.set("632B", "F1A9");
mappingTable.set("7F6A", "F1AA");
mappingTable.set("4E3B", "F1AB");
mappingTable.set("4F4F", "F1AC");
mappingTable.set("4F8F", "F1AD");
mappingTable.set("505A", "F1AE");
mappingTable.set("59DD", "F1AF");
mappingTable.set("80C4", "F1B0");
mappingTable.set("546A", "F1B1");
mappingTable.set("5468", "F1B2");
mappingTable.set("55FE", "F1B3");
mappingTable.set("594F", "F1B4");
mappingTable.set("5B99", "F1B5");
mappingTable.set("5DDE", "F1B6");
mappingTable.set("5EDA", "F1B7");
mappingTable.set("665D", "F1B8");
mappingTable.set("6731", "F1B9");
mappingTable.set("67F1", "F1BA");
mappingTable.set("682A", "F1BB");
mappingTable.set("6CE8", "F1BC");
mappingTable.set("6D32", "F1BD");
mappingTable.set("6E4A", "F1BE");
mappingTable.set("6F8D", "F1BF");
mappingTable.set("70B7", "F1C0");
mappingTable.set("73E0", "F1C1");
mappingTable.set("7587", "F1C2");
mappingTable.set("7C4C", "F1C3");
mappingTable.set("7D02", "F1C4");
mappingTable.set("7D2C", "F1C5");
mappingTable.set("7DA2", "F1C6");
mappingTable.set("821F", "F1C7");
mappingTable.set("86DB", "F1C8");
mappingTable.set("8A3B", "F1C9");
mappingTable.set("8A85", "F1CA");
mappingTable.set("8D70", "F1CB");
mappingTable.set("8E8A", "F1CC");
mappingTable.set("8F33", "F1CD");
mappingTable.set("9031", "F1CE");
mappingTable.set("914E", "F1CF");
mappingTable.set("9152", "F1D0");
mappingTable.set("9444", "F1D1");
mappingTable.set("99D0", "F1D2");
mappingTable.set("7AF9", "F1D3");
mappingTable.set("7CA5", "F1D4");
mappingTable.set("4FCA", "F1D5");
mappingTable.set("5101", "F1D6");
mappingTable.set("51C6", "F1D7");
mappingTable.set("57C8", "F1D8");
mappingTable.set("5BEF", "F1D9");
mappingTable.set("5CFB", "F1DA");
mappingTable.set("6659", "F1DB");
mappingTable.set("6A3D", "F1DC");
mappingTable.set("6D5A", "F1DD");
mappingTable.set("6E96", "F1DE");
mappingTable.set("6FEC", "F1DF");
mappingTable.set("710C", "F1E0");
mappingTable.set("756F", "F1E1");
mappingTable.set("7AE3", "F1E2");
mappingTable.set("8822", "F1E3");
mappingTable.set("9021", "F1E4");
mappingTable.set("9075", "F1E5");
mappingTable.set("96CB", "F1E6");
mappingTable.set("99FF", "F1E7");
mappingTable.set("8301", "F1E8");
mappingTable.set("4E2D", "F1E9");
mappingTable.set("4EF2", "F1EA");
mappingTable.set("8846", "F1EB");
mappingTable.set("91CD", "F1EC");
mappingTable.set("537D", "F1ED");
mappingTable.set("6ADB", "F1EE");
mappingTable.set("696B", "F1EF");
mappingTable.set("6C41", "F1F0");
mappingTable.set("847A", "F1F1");
mappingTable.set("589E", "F1F2");
mappingTable.set("618E", "F1F3");
mappingTable.set("66FE", "F1F4");
mappingTable.set("62EF", "F1F5");
mappingTable.set("70DD", "F1F6");
mappingTable.set("7511", "F1F7");
mappingTable.set("75C7", "F1F8");
mappingTable.set("7E52", "F1F9");
mappingTable.set("84B8", "F1FA");
mappingTable.set("8B49", "F1FB");
mappingTable.set("8D08", "F1FC");
mappingTable.set("4E4B", "F1FD");
mappingTable.set("53EA", "F1FE");
mappingTable.set("54AB", "F2A1");
mappingTable.set("5730", "F2A2");
mappingTable.set("5740", "F2A3");
mappingTable.set("5FD7", "F2A4");
mappingTable.set("6301", "F2A5");
mappingTable.set("6307", "F2A6");
mappingTable.set("646F", "F2A7");
mappingTable.set("652F", "F2A8");
mappingTable.set("65E8", "F2A9");
mappingTable.set("667A", "F2AA");
mappingTable.set("679D", "F2AB");
mappingTable.set("67B3", "F2AC");
mappingTable.set("6B62", "F2AD");
mappingTable.set("6C60", "F2AE");
mappingTable.set("6C9A", "F2AF");
mappingTable.set("6F2C", "F2B0");
mappingTable.set("77E5", "F2B1");
mappingTable.set("7825", "F2B2");
mappingTable.set("7949", "F2B3");
mappingTable.set("7957", "F2B4");
mappingTable.set("7D19", "F2B5");
mappingTable.set("80A2", "F2B6");
mappingTable.set("8102", "F2B7");
mappingTable.set("81F3", "F2B8");
mappingTable.set("829D", "F2B9");
mappingTable.set("82B7", "F2BA");
mappingTable.set("8718", "F2BB");
mappingTable.set("8A8C", "F2BC");
mappingTable.set("8B58", "F2BD");
mappingTable.set("8D04", "F2BE");
mappingTable.set("8DBE", "F2BF");
mappingTable.set("9072", "F2C0");
mappingTable.set("76F4", "F2C1");
mappingTable.set("7A19", "F2C2");
mappingTable.set("7A37", "F2C3");
mappingTable.set("7E54", "F2C4");
mappingTable.set("8077", "F2C5");
mappingTable.set("5507", "F2C6");
mappingTable.set("55D4", "F2C7");
mappingTable.set("5875", "F2C8");
mappingTable.set("632F", "F2C9");
mappingTable.set("6422", "F2CA");
mappingTable.set("6649", "F2CB");
mappingTable.set("664B", "F2CC");
mappingTable.set("686D", "F2CD");
mappingTable.set("699B", "F2CE");
mappingTable.set("6B84", "F2CF");
mappingTable.set("6D25", "F2D0");
mappingTable.set("6EB1", "F2D1");
mappingTable.set("73CD", "F2D2");
mappingTable.set("7468", "F2D3");
mappingTable.set("74A1", "F2D4");
mappingTable.set("755B", "F2D5");
mappingTable.set("75B9", "F2D6");
mappingTable.set("76E1", "F2D7");
mappingTable.set("771E", "F2D8");
mappingTable.set("778B", "F2D9");
mappingTable.set("79E6", "F2DA");
mappingTable.set("7E09", "F2DB");
mappingTable.set("7E1D", "F2DC");
mappingTable.set("81FB", "F2DD");
mappingTable.set("852F", "F2DE");
mappingTable.set("8897", "F2DF");
mappingTable.set("8A3A", "F2E0");
mappingTable.set("8CD1", "F2E1");
mappingTable.set("8EEB", "F2E2");
mappingTable.set("8FB0", "F2E3");
mappingTable.set("9032", "F2E4");
mappingTable.set("93AD", "F2E5");
mappingTable.set("9663", "F2E6");
mappingTable.set("9673", "F2E7");
mappingTable.set("9707", "F2E8");
mappingTable.set("4F84", "F2E9");
mappingTable.set("53F1", "F2EA");
mappingTable.set("59EA", "F2EB");
mappingTable.set("5AC9", "F2EC");
mappingTable.set("5E19", "F2ED");
mappingTable.set("684E", "F2EE");
mappingTable.set("74C6", "F2EF");
mappingTable.set("75BE", "F2F0");
mappingTable.set("79E9", "F2F1");
mappingTable.set("7A92", "F2F2");
mappingTable.set("81A3", "F2F3");
mappingTable.set("86ED", "F2F4");
mappingTable.set("8CEA", "F2F5");
mappingTable.set("8DCC", "F2F6");
mappingTable.set("8FED", "F2F7");
mappingTable.set("659F", "F2F8");
mappingTable.set("6715", "F2F9");
mappingTable.set("4EC0", "F2FA");
mappingTable.set("57F7", "F2FB");
mappingTable.set("6F57", "F2FC");
mappingTable.set("7DDD", "F2FD");
mappingTable.set("8F2F", "F2FE");
mappingTable.set("93F6", "F3A1");
mappingTable.set("96C6", "F3A2");
mappingTable.set("5FB5", "F3A3");
mappingTable.set("61F2", "F3A4");
mappingTable.set("6F84", "F3A5");
mappingTable.set("4E14", "F3A6");
mappingTable.set("4F98", "F3A7");
mappingTable.set("501F", "F3A8");
mappingTable.set("53C9", "F3A9");
mappingTable.set("55DF", "F3AA");
mappingTable.set("5D6F", "F3AB");
mappingTable.set("5DEE", "F3AC");
mappingTable.set("6B21", "F3AD");
mappingTable.set("6B64", "F3AE");
mappingTable.set("78CB", "F3AF");
mappingTable.set("7B9A", "F3B0");
mappingTable.set("8336", "F3B1");
mappingTable.set("8E49", "F3B2");
mappingTable.set("8ECA", "F3B3");
mappingTable.set("906E", "F3B4");
mappingTable.set("6349", "F3B5");
mappingTable.set("643E", "F3B6");
mappingTable.set("7740", "F3B7");
mappingTable.set("7A84", "F3B8");
mappingTable.set("932F", "F3B9");
mappingTable.set("947F", "F3BA");
mappingTable.set("9F6A", "F3BB");
mappingTable.set("64B0", "F3BC");
mappingTable.set("6FAF", "F3BD");
mappingTable.set("71E6", "F3BE");
mappingTable.set("74A8", "F3BF");
mappingTable.set("74DA", "F3C0");
mappingTable.set("7AC4", "F3C1");
mappingTable.set("7C12", "F3C2");
mappingTable.set("7E82", "F3C3");
mappingTable.set("7CB2", "F3C4");
mappingTable.set("7E98", "F3C5");
mappingTable.set("8B9A", "F3C6");
mappingTable.set("8D0A", "F3C7");
mappingTable.set("947D", "F3C8");
mappingTable.set("9910", "F3C9");
mappingTable.set("994C", "F3CA");
mappingTable.set("5239", "F3CB");
mappingTable.set("5BDF", "F3CC");
mappingTable.set("64E6", "F3CD");
mappingTable.set("672D", "F3CE");
mappingTable.set("7D2E", "F3CF");
mappingTable.set("50ED", "F3D0");
mappingTable.set("53C3", "F3D1");
mappingTable.set("5879", "F3D2");
mappingTable.set("6158", "F3D3");
mappingTable.set("6159", "F3D4");
mappingTable.set("61FA", "F3D5");
mappingTable.set("65AC", "F3D6");
mappingTable.set("7AD9", "F3D7");
mappingTable.set("8B92", "F3D8");
mappingTable.set("8B96", "F3D9");
mappingTable.set("5009", "F3DA");
mappingTable.set("5021", "F3DB");
mappingTable.set("5275", "F3DC");
mappingTable.set("5531", "F3DD");
mappingTable.set("5A3C", "F3DE");
mappingTable.set("5EE0", "F3DF");
mappingTable.set("5F70", "F3E0");
mappingTable.set("6134", "F3E1");
mappingTable.set("655E", "F3E2");
mappingTable.set("660C", "F3E3");
mappingTable.set("6636", "F3E4");
mappingTable.set("66A2", "F3E5");
mappingTable.set("69CD", "F3E6");
mappingTable.set("6EC4", "F3E7");
mappingTable.set("6F32", "F3E8");
mappingTable.set("7316", "F3E9");
mappingTable.set("7621", "F3EA");
mappingTable.set("7A93", "F3EB");
mappingTable.set("8139", "F3EC");
mappingTable.set("8259", "F3ED");
mappingTable.set("83D6", "F3EE");
mappingTable.set("84BC", "F3EF");
mappingTable.set("50B5", "F3F0");
mappingTable.set("57F0", "F3F1");
mappingTable.set("5BC0", "F3F2");
mappingTable.set("5BE8", "F3F3");
mappingTable.set("5F69", "F3F4");
mappingTable.set("63A1", "F3F5");
mappingTable.set("7826", "F3F6");
mappingTable.set("7DB5", "F3F7");
mappingTable.set("83DC", "F3F8");
mappingTable.set("8521", "F3F9");
mappingTable.set("91C7", "F3FA");
mappingTable.set("91F5", "F3FB");
mappingTable.set("518A", "F3FC");
mappingTable.set("67F5", "F3FD");
mappingTable.set("7B56", "F3FE");
mappingTable.set("8CAC", "F4A1");
mappingTable.set("51C4", "F4A2");
mappingTable.set("59BB", "F4A3");
mappingTable.set("60BD", "F4A4");
mappingTable.set("8655", "F4A5");
mappingTable.set("501C", "F4A6");
mappingTable.set("523A", "F4A7");
mappingTable.set("5254", "F4A8");
mappingTable.set("5C3A", "F4A9");
mappingTable.set("617D", "F4AA");
mappingTable.set("621A", "F4AB");
mappingTable.set("62D3", "F4AC");
mappingTable.set("64F2", "F4AD");
mappingTable.set("65A5", "F4AE");
mappingTable.set("6ECC", "F4AF");
mappingTable.set("7620", "F4B0");
mappingTable.set("810A", "F4B1");
mappingTable.set("8E60", "F4B2");
mappingTable.set("965F", "F4B3");
mappingTable.set("96BB", "F4B4");
mappingTable.set("4EDF", "F4B5");
mappingTable.set("5343", "F4B6");
mappingTable.set("5598", "F4B7");
mappingTable.set("5929", "F4B8");
mappingTable.set("5DDD", "F4B9");
mappingTable.set("64C5", "F4BA");
mappingTable.set("6CC9", "F4BB");
mappingTable.set("6DFA", "F4BC");
mappingTable.set("7394", "F4BD");
mappingTable.set("7A7F", "F4BE");
mappingTable.set("821B", "F4BF");
mappingTable.set("85A6", "F4C0");
mappingTable.set("8CE4", "F4C1");
mappingTable.set("8E10", "F4C2");
mappingTable.set("9077", "F4C3");
mappingTable.set("91E7", "F4C4");
mappingTable.set("95E1", "F4C5");
mappingTable.set("9621", "F4C6");
mappingTable.set("97C6", "F4C7");
mappingTable.set("51F8", "F4C8");
mappingTable.set("54F2", "F4C9");
mappingTable.set("5586", "F4CA");
mappingTable.set("5FB9", "F4CB");
mappingTable.set("64A4", "F4CC");
mappingTable.set("6F88", "F4CD");
mappingTable.set("7DB4", "F4CE");
mappingTable.set("8F1F", "F4CF");
mappingTable.set("8F4D", "F4D0");
mappingTable.set("9435", "F4D1");
mappingTable.set("50C9", "F4D2");
mappingTable.set("5C16", "F4D3");
mappingTable.set("6CBE", "F4D4");
mappingTable.set("6DFB", "F4D5");
mappingTable.set("751B", "F4D6");
mappingTable.set("77BB", "F4D7");
mappingTable.set("7C3D", "F4D8");
mappingTable.set("7C64", "F4D9");
mappingTable.set("8A79", "F4DA");
mappingTable.set("8AC2", "F4DB");
mappingTable.set("581E", "F4DC");
mappingTable.set("59BE", "F4DD");
mappingTable.set("5E16", "F4DE");
mappingTable.set("6377", "F4DF");
mappingTable.set("7252", "F4E0");
mappingTable.set("758A", "F4E1");
mappingTable.set("776B", "F4E2");
mappingTable.set("8ADC", "F4E3");
mappingTable.set("8CBC", "F4E4");
mappingTable.set("8F12", "F4E5");
mappingTable.set("5EF3", "F4E6");
mappingTable.set("6674", "F4E7");
mappingTable.set("6DF8", "F4E8");
mappingTable.set("807D", "F4E9");
mappingTable.set("83C1", "F4EA");
mappingTable.set("8ACB", "F4EB");
mappingTable.set("9751", "F4EC");
mappingTable.set("9BD6", "F4ED");
mappingTable.set("5207", "F4EE");
mappingTable.set("5243", "F4EF");
mappingTable.set("66FF", "F4F0");
mappingTable.set("6D95", "F4F1");
mappingTable.set("6EEF", "F4F2");
mappingTable.set("7DE0", "F4F3");
mappingTable.set("8AE6", "F4F4");
mappingTable.set("902E", "F4F5");
mappingTable.set("905E", "F4F6");
mappingTable.set("9AD4", "F4F7");
mappingTable.set("521D", "F4F8");
mappingTable.set("527F", "F4F9");
mappingTable.set("54E8", "F4FA");
mappingTable.set("6194", "F4FB");
mappingTable.set("6284", "F4FC");
mappingTable.set("62DB", "F4FD");
mappingTable.set("68A2", "F4FE");
mappingTable.set("6912", "F5A1");
mappingTable.set("695A", "F5A2");
mappingTable.set("6A35", "F5A3");
mappingTable.set("7092", "F5A4");
mappingTable.set("7126", "F5A5");
mappingTable.set("785D", "F5A6");
mappingTable.set("7901", "F5A7");
mappingTable.set("790E", "F5A8");
mappingTable.set("79D2", "F5A9");
mappingTable.set("7A0D", "F5AA");
mappingTable.set("8096", "F5AB");
mappingTable.set("8278", "F5AC");
mappingTable.set("82D5", "F5AD");
mappingTable.set("8349", "F5AE");
mappingTable.set("8549", "F5AF");
mappingTable.set("8C82", "F5B0");
mappingTable.set("8D85", "F5B1");
mappingTable.set("9162", "F5B2");
mappingTable.set("918B", "F5B3");
mappingTable.set("91AE", "F5B4");
mappingTable.set("4FC3", "F5B5");
mappingTable.set("56D1", "F5B6");
mappingTable.set("71ED", "F5B7");
mappingTable.set("77D7", "F5B8");
mappingTable.set("8700", "F5B9");
mappingTable.set("89F8", "F5BA");
mappingTable.set("5BF8", "F5BB");
mappingTable.set("5FD6", "F5BC");
mappingTable.set("6751", "F5BD");
mappingTable.set("90A8", "F5BE");
mappingTable.set("53E2", "F5BF");
mappingTable.set("585A", "F5C0");
mappingTable.set("5BF5", "F5C1");
mappingTable.set("60A4", "F5C2");
mappingTable.set("6181", "F5C3");
mappingTable.set("6460", "F5C4");
mappingTable.set("7E3D", "F5C5");
mappingTable.set("8070", "F5C6");
mappingTable.set("8525", "F5C7");
mappingTable.set("9283", "F5C8");
mappingTable.set("64AE", "F5C9");
mappingTable.set("50AC", "F5CA");
mappingTable.set("5D14", "F5CB");
mappingTable.set("6700", "F5CC");
mappingTable.set("589C", "F5CD");
mappingTable.set("62BD", "F5CE");
mappingTable.set("63A8", "F5CF");
mappingTable.set("690E", "F5D0");
mappingTable.set("6978", "F5D1");
mappingTable.set("6A1E", "F5D2");
mappingTable.set("6E6B", "F5D3");
mappingTable.set("76BA", "F5D4");
mappingTable.set("79CB", "F5D5");
mappingTable.set("82BB", "F5D6");
mappingTable.set("8429", "F5D7");
mappingTable.set("8ACF", "F5D8");
mappingTable.set("8DA8", "F5D9");
mappingTable.set("8FFD", "F5DA");
mappingTable.set("9112", "F5DB");
mappingTable.set("914B", "F5DC");
mappingTable.set("919C", "F5DD");
mappingTable.set("9310", "F5DE");
mappingTable.set("9318", "F5DF");
mappingTable.set("939A", "F5E0");
mappingTable.set("96DB", "F5E1");
mappingTable.set("9A36", "F5E2");
mappingTable.set("9C0D", "F5E3");
mappingTable.set("4E11", "F5E4");
mappingTable.set("755C", "F5E5");
mappingTable.set("795D", "F5E6");
mappingTable.set("7AFA", "F5E7");
mappingTable.set("7B51", "F5E8");
mappingTable.set("7BC9", "F5E9");
mappingTable.set("7E2E", "F5EA");
mappingTable.set("84C4", "F5EB");
mappingTable.set("8E59", "F5EC");
mappingTable.set("8E74", "F5ED");
mappingTable.set("8EF8", "F5EE");
mappingTable.set("9010", "F5EF");
mappingTable.set("6625", "F5F0");
mappingTable.set("693F", "F5F1");
mappingTable.set("7443", "F5F2");
mappingTable.set("51FA", "F5F3");
mappingTable.set("672E", "F5F4");
mappingTable.set("9EDC", "F5F5");
mappingTable.set("5145", "F5F6");
mappingTable.set("5FE0", "F5F7");
mappingTable.set("6C96", "F5F8");
mappingTable.set("87F2", "F5F9");
mappingTable.set("885D", "F5FA");
mappingTable.set("8877", "F5FB");
mappingTable.set("60B4", "F5FC");
mappingTable.set("81B5", "F5FD");
mappingTable.set("8403", "F5FE");
mappingTable.set("8D05", "F6A1");
mappingTable.set("53D6", "F6A2");
mappingTable.set("5439", "F6A3");
mappingTable.set("5634", "F6A4");
mappingTable.set("5A36", "F6A5");
mappingTable.set("5C31", "F6A6");
mappingTable.set("708A", "F6A7");
mappingTable.set("7FE0", "F6A8");
mappingTable.set("805A", "F6A9");
mappingTable.set("8106", "F6AA");
mappingTable.set("81ED", "F6AB");
mappingTable.set("8DA3", "F6AC");
mappingTable.set("9189", "F6AD");
mappingTable.set("9A5F", "F6AE");
mappingTable.set("9DF2", "F6AF");
mappingTable.set("5074", "F6B0");
mappingTable.set("4EC4", "F6B1");
mappingTable.set("53A0", "F6B2");
mappingTable.set("60FB", "F6B3");
mappingTable.set("6E2C", "F6B4");
mappingTable.set("5C64", "F6B5");
mappingTable.set("4F88", "F6B6");
mappingTable.set("5024", "F6B7");
mappingTable.set("55E4", "F6B8");
mappingTable.set("5CD9", "F6B9");
mappingTable.set("5E5F", "F6BA");
mappingTable.set("6065", "F6BB");
mappingTable.set("6894", "F6BC");
mappingTable.set("6CBB", "F6BD");
mappingTable.set("6DC4", "F6BE");
mappingTable.set("71BE", "F6BF");
mappingTable.set("75D4", "F6C0");
mappingTable.set("75F4", "F6C1");
mappingTable.set("7661", "F6C2");
mappingTable.set("7A1A", "F6C3");
mappingTable.set("7A49", "F6C4");
mappingTable.set("7DC7", "F6C5");
mappingTable.set("7DFB", "F6C6");
mappingTable.set("7F6E", "F6C7");
mappingTable.set("81F4", "F6C8");
mappingTable.set("86A9", "F6C9");
mappingTable.set("8F1C", "F6CA");
mappingTable.set("96C9", "F6CB");
mappingTable.set("99B3", "F6CC");
mappingTable.set("9F52", "F6CD");
mappingTable.set("5247", "F6CE");
mappingTable.set("52C5", "F6CF");
mappingTable.set("98ED", "F6D0");
mappingTable.set("89AA", "F6D1");
mappingTable.set("4E03", "F6D2");
mappingTable.set("67D2", "F6D3");
mappingTable.set("6F06", "F6D4");
mappingTable.set("4FB5", "F6D5");
mappingTable.set("5BE2", "F6D6");
mappingTable.set("6795", "F6D7");
mappingTable.set("6C88", "F6D8");
mappingTable.set("6D78", "F6D9");
mappingTable.set("741B", "F6DA");
mappingTable.set("7827", "F6DB");
mappingTable.set("91DD", "F6DC");
mappingTable.set("937C", "F6DD");
mappingTable.set("87C4", "F6DE");
mappingTable.set("79E4", "F6DF");
mappingTable.set("7A31", "F6E0");
mappingTable.set("5FEB", "F6E1");
mappingTable.set("4ED6", "F6E2");
mappingTable.set("54A4", "F6E3");
mappingTable.set("553E", "F6E4");
mappingTable.set("58AE", "F6E5");
mappingTable.set("59A5", "F6E6");
mappingTable.set("60F0", "F6E7");
mappingTable.set("6253", "F6E8");
mappingTable.set("62D6", "F6E9");
mappingTable.set("6736", "F6EA");
mappingTable.set("6955", "F6EB");
mappingTable.set("8235", "F6EC");
mappingTable.set("9640", "F6ED");
mappingTable.set("99B1", "F6EE");
mappingTable.set("99DD", "F6EF");
mappingTable.set("502C", "F6F0");
mappingTable.set("5353", "F6F1");
mappingTable.set("5544", "F6F2");
mappingTable.set("577C", "F6F3");
mappingTable.set("5EA6", "F6F4");
mappingTable.set("6258", "F6F5");
mappingTable.set("62D3", "F6F6");
mappingTable.set("64E2", "F6F7");
mappingTable.set("666B", "F6F8");
mappingTable.set("67DD", "F6F9");
mappingTable.set("6FC1", "F6FA");
mappingTable.set("6FEF", "F6FB");
mappingTable.set("7422", "F6FC");
mappingTable.set("7438", "F6FD");
mappingTable.set("8A17", "F6FE");
mappingTable.set("9438", "F7A1");
mappingTable.set("5451", "F7A2");
mappingTable.set("5606", "F7A3");
mappingTable.set("5766", "F7A4");
mappingTable.set("5F48", "F7A5");
mappingTable.set("619A", "F7A6");
mappingTable.set("6B4E", "F7A7");
mappingTable.set("7058", "F7A8");
mappingTable.set("70AD", "F7A9");
mappingTable.set("7DBB", "F7AA");
mappingTable.set("8A95", "F7AB");
mappingTable.set("596A", "F7AC");
mappingTable.set("812B", "F7AD");
mappingTable.set("63A2", "F7AE");
mappingTable.set("7708", "F7AF");
mappingTable.set("803D", "F7B0");
mappingTable.set("8CAA", "F7B1");
mappingTable.set("5854", "F7B2");
mappingTable.set("642D", "F7B3");
mappingTable.set("69BB", "F7B4");
mappingTable.set("5B95", "F7B5");
mappingTable.set("5E11", "F7B6");
mappingTable.set("6E6F", "F7B7");
mappingTable.set("7CD6", "F7B8");
mappingTable.set("8569", "F7B9");
mappingTable.set("514C", "F7BA");
mappingTable.set("53F0", "F7BB");
mappingTable.set("592A", "F7BC");
mappingTable.set("6020", "F7BD");
mappingTable.set("614B", "F7BE");
mappingTable.set("6B86", "F7BF");
mappingTable.set("6C70", "F7C0");
mappingTable.set("6CF0", "F7C1");
mappingTable.set("7B1E", "F7C2");
mappingTable.set("80CE", "F7C3");
mappingTable.set("82D4", "F7C4");
mappingTable.set("8DC6", "F7C5");
mappingTable.set("90B0", "F7C6");
mappingTable.set("98B1", "F7C7");
mappingTable.set("5B85", "F7C8");
mappingTable.set("64C7", "F7C9");
mappingTable.set("6FA4", "F7CA");
mappingTable.set("6491", "F7CB");
mappingTable.set("6504", "F7CC");
mappingTable.set("514E", "F7CD");
mappingTable.set("5410", "F7CE");
mappingTable.set("571F", "F7CF");
mappingTable.set("8A0E", "F7D0");
mappingTable.set("615F", "F7D1");
mappingTable.set("6876", "F7D2");
mappingTable.set("6D1E", "F7D3");
mappingTable.set("75DB", "F7D4");
mappingTable.set("7B52", "F7D5");
mappingTable.set("7D71", "F7D6");
mappingTable.set("901A", "F7D7");
mappingTable.set("5806", "F7D8");
mappingTable.set("69CC", "F7D9");
mappingTable.set("817F", "F7DA");
mappingTable.set("892A", "F7DB");
mappingTable.set("9000", "F7DC");
mappingTable.set("9839", "F7DD");
mappingTable.set("5078", "F7DE");
mappingTable.set("5957", "F7DF");
mappingTable.set("59AC", "F7E0");
mappingTable.set("6295", "F7E1");
mappingTable.set("900F", "F7E2");
mappingTable.set("9B2A", "F7E3");
mappingTable.set("615D", "F7E4");
mappingTable.set("7279", "F7E5");
mappingTable.set("95D6", "F7E6");
mappingTable.set("5761", "F7E7");
mappingTable.set("5A46", "F7E8");
mappingTable.set("5DF4", "F7E9");
mappingTable.set("628A", "F7EA");
mappingTable.set("64AD", "F7EB");
mappingTable.set("64FA", "F7EC");
mappingTable.set("6777", "F7ED");
mappingTable.set("6CE2", "F7EE");
mappingTable.set("6D3E", "F7EF");
mappingTable.set("722C", "F7F0");
mappingTable.set("7436", "F7F1");
mappingTable.set("7834", "F7F2");
mappingTable.set("7F77", "F7F3");
mappingTable.set("82AD", "F7F4");
mappingTable.set("8DDB", "F7F5");
mappingTable.set("9817", "F7F6");
mappingTable.set("5224", "F7F7");
mappingTable.set("5742", "F7F8");
mappingTable.set("677F", "F7F9");
mappingTable.set("7248", "F7FA");
mappingTable.set("74E3", "F7FB");
mappingTable.set("8CA9", "F7FC");
mappingTable.set("8FA6", "F7FD");
mappingTable.set("9211", "F7FE");
mappingTable.set("962A", "F8A1");
mappingTable.set("516B", "F8A2");
mappingTable.set("53ED", "F8A3");
mappingTable.set("634C", "F8A4");
mappingTable.set("4F69", "F8A5");
mappingTable.set("5504", "F8A6");
mappingTable.set("6096", "F8A7");
mappingTable.set("6557", "F8A8");
mappingTable.set("6C9B", "F8A9");
mappingTable.set("6D7F", "F8AA");
mappingTable.set("724C", "F8AB");
mappingTable.set("72FD", "F8AC");
mappingTable.set("7A17", "F8AD");
mappingTable.set("8987", "F8AE");
mappingTable.set("8C9D", "F8AF");
mappingTable.set("5F6D", "F8B0");
mappingTable.set("6F8E", "F8B1");
mappingTable.set("70F9", "F8B2");
mappingTable.set("81A8", "F8B3");
mappingTable.set("610E", "F8B4");
mappingTable.set("4FBF", "F8B5");
mappingTable.set("504F", "F8B6");
mappingTable.set("6241", "F8B7");
mappingTable.set("7247", "F8B8");
mappingTable.set("7BC7", "F8B9");
mappingTable.set("7DE8", "F8BA");
mappingTable.set("7FE9", "F8BB");
mappingTable.set("904D", "F8BC");
mappingTable.set("97AD", "F8BD");
mappingTable.set("9A19", "F8BE");
mappingTable.set("8CB6", "F8BF");
mappingTable.set("576A", "F8C0");
mappingTable.set("5E73", "F8C1");
mappingTable.set("67B0", "F8C2");
mappingTable.set("840D", "F8C3");
mappingTable.set("8A55", "F8C4");
mappingTable.set("5420", "F8C5");
mappingTable.set("5B16", "F8C6");
mappingTable.set("5E63", "F8C7");
mappingTable.set("5EE2", "F8C8");
mappingTable.set("5F0A", "F8C9");
mappingTable.set("6583", "F8CA");
mappingTable.set("80BA", "F8CB");
mappingTable.set("853D", "F8CC");
mappingTable.set("9589", "F8CD");
mappingTable.set("965B", "F8CE");
mappingTable.set("4F48", "F8CF");
mappingTable.set("5305", "F8D0");
mappingTable.set("530D", "F8D1");
mappingTable.set("530F", "F8D2");
mappingTable.set("5486", "F8D3");
mappingTable.set("54FA", "F8D4");
mappingTable.set("5703", "F8D5");
mappingTable.set("5E03", "F8D6");
mappingTable.set("6016", "F8D7");
mappingTable.set("629B", "F8D8");
mappingTable.set("62B1", "F8D9");
mappingTable.set("6355", "F8DA");
mappingTable.set("66B4", "F8DB");
mappingTable.set("6CE1", "F8DC");
mappingTable.set("6D66", "F8DD");
mappingTable.set("75B1", "F8DE");
mappingTable.set("7832", "F8DF");
mappingTable.set("80DE", "F8E0");
mappingTable.set("812F", "F8E1");
mappingTable.set("82DE", "F8E2");
mappingTable.set("8461", "F8E3");
mappingTable.set("84B2", "F8E4");
mappingTable.set("888D", "F8E5");
mappingTable.set("8912", "F8E6");
mappingTable.set("900B", "F8E7");
mappingTable.set("92EA", "F8E8");
mappingTable.set("98FD", "F8E9");
mappingTable.set("9B91", "F8EA");
mappingTable.set("5E45", "F8EB");
mappingTable.set("66B4", "F8EC");
mappingTable.set("66DD", "F8ED");
mappingTable.set("7011", "F8EE");
mappingTable.set("7206", "F8EF");
mappingTable.set("8F3B", "F8F0");
mappingTable.set("4FF5", "F8F1");
mappingTable.set("527D", "F8F2");
mappingTable.set("5F6A", "F8F3");
mappingTable.set("6153", "F8F4");
mappingTable.set("6753", "F8F5");
mappingTable.set("6A19", "F8F6");
mappingTable.set("6F02", "F8F7");
mappingTable.set("74E2", "F8F8");
mappingTable.set("7968", "F8F9");
mappingTable.set("8868", "F8FA");
mappingTable.set("8C79", "F8FB");
mappingTable.set("98C7", "F8FC");
mappingTable.set("98C4", "F8FD");
mappingTable.set("9A43", "F8FE");
mappingTable.set("54C1", "F9A1");
mappingTable.set("7A1F", "F9A2");
mappingTable.set("6953", "F9A3");
mappingTable.set("8AF7", "F9A4");
mappingTable.set("8C4A", "F9A5");
mappingTable.set("98A8", "F9A6");
mappingTable.set("99AE", "F9A7");
mappingTable.set("5F7C", "F9A8");
mappingTable.set("62AB", "F9A9");
mappingTable.set("75B2", "F9AA");
mappingTable.set("76AE", "F9AB");
mappingTable.set("88AB", "F9AC");
mappingTable.set("907F", "F9AD");
mappingTable.set("9642", "F9AE");
mappingTable.set("5339", "F9AF");
mappingTable.set("5F3C", "F9B0");
mappingTable.set("5FC5", "F9B1");
mappingTable.set("6CCC", "F9B2");
mappingTable.set("73CC", "F9B3");
mappingTable.set("7562", "F9B4");
mappingTable.set("758B", "F9B5");
mappingTable.set("7B46", "F9B6");
mappingTable.set("82FE", "F9B7");
mappingTable.set("999D", "F9B8");
mappingTable.set("4E4F", "F9B9");
mappingTable.set("903C", "F9BA");
mappingTable.set("4E0B", "F9BB");
mappingTable.set("4F55", "F9BC");
mappingTable.set("53A6", "F9BD");
mappingTable.set("590F", "F9BE");
mappingTable.set("5EC8", "F9BF");
mappingTable.set("6630", "F9C0");
mappingTable.set("6CB3", "F9C1");
mappingTable.set("7455", "F9C2");
mappingTable.set("8377", "F9C3");
mappingTable.set("8766", "F9C4");
mappingTable.set("8CC0", "F9C5");
mappingTable.set("9050", "F9C6");
mappingTable.set("971E", "F9C7");
mappingTable.set("9C15", "F9C8");
mappingTable.set("58D1", "F9C9");
mappingTable.set("5B78", "F9CA");
mappingTable.set("8650", "F9CB");
mappingTable.set("8B14", "F9CC");
mappingTable.set("9DB4", "F9CD");
mappingTable.set("5BD2", "F9CE");
mappingTable.set("6068", "F9CF");
mappingTable.set("608D", "F9D0");
mappingTable.set("65F1", "F9D1");
mappingTable.set("6C57", "F9D2");
mappingTable.set("6F22", "F9D3");
mappingTable.set("6FA3", "F9D4");
mappingTable.set("701A", "F9D5");
mappingTable.set("7F55", "F9D6");
mappingTable.set("7FF0", "F9D7");
mappingTable.set("9591", "F9D8");
mappingTable.set("9592", "F9D9");
mappingTable.set("9650", "F9DA");
mappingTable.set("97D3", "F9DB");
mappingTable.set("5272", "F9DC");
mappingTable.set("8F44", "F9DD");
mappingTable.set("51FD", "F9DE");
mappingTable.set("542B", "F9DF");
mappingTable.set("54B8", "F9E0");
mappingTable.set("5563", "F9E1");
mappingTable.set("558A", "F9E2");
mappingTable.set("6ABB", "F9E3");
mappingTable.set("6DB5", "F9E4");
mappingTable.set("7DD8", "F9E5");
mappingTable.set("8266", "F9E6");
mappingTable.set("929C", "F9E7");
mappingTable.set("9677", "F9E8");
mappingTable.set("9E79", "F9E9");
mappingTable.set("5408", "F9EA");
mappingTable.set("54C8", "F9EB");
mappingTable.set("76D2", "F9EC");
mappingTable.set("86E4", "F9ED");
mappingTable.set("95A4", "F9EE");
mappingTable.set("95D4", "F9EF");
mappingTable.set("965C", "F9F0");
mappingTable.set("4EA2", "F9F1");
mappingTable.set("4F09", "F9F2");
mappingTable.set("59EE", "F9F3");
mappingTable.set("5AE6", "F9F4");
mappingTable.set("5DF7", "F9F5");
mappingTable.set("6052", "F9F6");
mappingTable.set("6297", "F9F7");
mappingTable.set("676D", "F9F8");
mappingTable.set("6841", "F9F9");
mappingTable.set("6C86", "F9FA");
mappingTable.set("6E2F", "F9FB");
mappingTable.set("7F38", "F9FC");
mappingTable.set("809B", "F9FD");
mappingTable.set("822A", "F9FE");
mappingTable.set("884C", "FAA1");
mappingTable.set("964D", "FAA2");
mappingTable.set("9805", "FAA3");
mappingTable.set("4EA5", "FAA4");
mappingTable.set("5055", "FAA5");
mappingTable.set("54B3", "FAA6");
mappingTable.set("5793", "FAA7");
mappingTable.set("595A", "FAA8");
mappingTable.set("5B69", "FAA9");
mappingTable.set("5BB3", "FAAA");
mappingTable.set("61C8", "FAAB");
mappingTable.set("6977", "FAAC");
mappingTable.set("6D77", "FAAD");
mappingTable.set("7023", "FAAE");
mappingTable.set("87F9", "FAAF");
mappingTable.set("89E3", "FAB0");
mappingTable.set("8A72", "FAB1");
mappingTable.set("8AE7", "FAB2");
mappingTable.set("9082", "FAB3");
mappingTable.set("99ED", "FAB4");
mappingTable.set("9AB8", "FAB5");
mappingTable.set("52BE", "FAB6");
mappingTable.set("6838", "FAB7");
mappingTable.set("5016", "FAB8");
mappingTable.set("5E78", "FAB9");
mappingTable.set("674F", "FABA");
mappingTable.set("8347", "FABB");
mappingTable.set("884C", "FABC");
mappingTable.set("4EAB", "FABD");
mappingTable.set("5411", "FABE");
mappingTable.set("56AE", "FABF");
mappingTable.set("73E6", "FAC0");
mappingTable.set("9115", "FAC1");
mappingTable.set("97FF", "FAC2");
mappingTable.set("9909", "FAC3");
mappingTable.set("9957", "FAC4");
mappingTable.set("9999", "FAC5");
mappingTable.set("5653", "FAC6");
mappingTable.set("589F", "FAC7");
mappingTable.set("865B", "FAC8");
mappingTable.set("8A31", "FAC9");
mappingTable.set("61B2", "FACA");
mappingTable.set("6AF6", "FACB");
mappingTable.set("737B", "FACC");
mappingTable.set("8ED2", "FACD");
mappingTable.set("6B47", "FACE");
mappingTable.set("96AA", "FACF");
mappingTable.set("9A57", "FAD0");
mappingTable.set("5955", "FAD1");
mappingTable.set("7200", "FAD2");
mappingTable.set("8D6B", "FAD3");
mappingTable.set("9769", "FAD4");
mappingTable.set("4FD4", "FAD5");
mappingTable.set("5CF4", "FAD6");
mappingTable.set("5F26", "FAD7");
mappingTable.set("61F8", "FAD8");
mappingTable.set("665B", "FAD9");
mappingTable.set("6CEB", "FADA");
mappingTable.set("70AB", "FADB");
mappingTable.set("7384", "FADC");
mappingTable.set("73B9", "FADD");
mappingTable.set("73FE", "FADE");
mappingTable.set("7729", "FADF");
mappingTable.set("774D", "FAE0");
mappingTable.set("7D43", "FAE1");
mappingTable.set("7D62", "FAE2");
mappingTable.set("7E23", "FAE3");
mappingTable.set("8237", "FAE4");
mappingTable.set("8852", "FAE5");
mappingTable.set("898B", "FAE6");
mappingTable.set("8CE2", "FAE7");
mappingTable.set("9249", "FAE8");
mappingTable.set("986F", "FAE9");
mappingTable.set("5B51", "FAEA");
mappingTable.set("7A74", "FAEB");
mappingTable.set("8840", "FAEC");
mappingTable.set("9801", "FAED");
mappingTable.set("5ACC", "FAEE");
mappingTable.set("4FE0", "FAEF");
mappingTable.set("5354", "FAF0");
mappingTable.set("593E", "FAF1");
mappingTable.set("5CFD", "FAF2");
mappingTable.set("633E", "FAF3");
mappingTable.set("6D79", "FAF4");
mappingTable.set("72F9", "FAF5");
mappingTable.set("8105", "FAF6");
mappingTable.set("8107", "FAF7");
mappingTable.set("83A2", "FAF8");
mappingTable.set("92CF", "FAF9");
mappingTable.set("9830", "FAFA");
mappingTable.set("4EA8", "FAFB");
mappingTable.set("5144", "FAFC");
mappingTable.set("5211", "FAFD");
mappingTable.set("578B", "FAFE");
mappingTable.set("5F62", "FBA1");
mappingTable.set("6CC2", "FBA2");
mappingTable.set("6ECE", "FBA3");
mappingTable.set("7005", "FBA4");
mappingTable.set("7050", "FBA5");
mappingTable.set("70AF", "FBA6");
mappingTable.set("7192", "FBA7");
mappingTable.set("73E9", "FBA8");
mappingTable.set("7469", "FBA9");
mappingTable.set("834A", "FBAA");
mappingTable.set("87A2", "FBAB");
mappingTable.set("8861", "FBAC");
mappingTable.set("9008", "FBAD");
mappingTable.set("90A2", "FBAE");
mappingTable.set("93A3", "FBAF");
mappingTable.set("99A8", "FBB0");
mappingTable.set("516E", "FBB1");
mappingTable.set("5F57", "FBB2");
mappingTable.set("60E0", "FBB3");
mappingTable.set("6167", "FBB4");
mappingTable.set("66B3", "FBB5");
mappingTable.set("8559", "FBB6");
mappingTable.set("8E4A", "FBB7");
mappingTable.set("91AF", "FBB8");
mappingTable.set("978B", "FBB9");
mappingTable.set("4E4E", "FBBA");
mappingTable.set("4E92", "FBBB");
mappingTable.set("547C", "FBBC");
mappingTable.set("58D5", "FBBD");
mappingTable.set("58FA", "FBBE");
mappingTable.set("597D", "FBBF");
mappingTable.set("5CB5", "FBC0");
mappingTable.set("5F27", "FBC1");
mappingTable.set("6236", "FBC2");
mappingTable.set("6248", "FBC3");
mappingTable.set("660A", "FBC4");
mappingTable.set("6667", "FBC5");
mappingTable.set("6BEB", "FBC6");
mappingTable.set("6D69", "FBC7");
mappingTable.set("6DCF", "FBC8");
mappingTable.set("6E56", "FBC9");
mappingTable.set("6EF8", "FBCA");
mappingTable.set("6F94", "FBCB");
mappingTable.set("6FE0", "FBCC");
mappingTable.set("6FE9", "FBCD");
mappingTable.set("705D", "FBCE");
mappingTable.set("72D0", "FBCF");
mappingTable.set("7425", "FBD0");
mappingTable.set("745A", "FBD1");
mappingTable.set("74E0", "FBD2");
mappingTable.set("7693", "FBD3");
mappingTable.set("795C", "FBD4");
mappingTable.set("7CCA", "FBD5");
mappingTable.set("7E1E", "FBD6");
mappingTable.set("80E1", "FBD7");
mappingTable.set("82A6", "FBD8");
mappingTable.set("846B", "FBD9");
mappingTable.set("84BF", "FBDA");
mappingTable.set("864E", "FBDB");
mappingTable.set("865F", "FBDC");
mappingTable.set("8774", "FBDD");
mappingTable.set("8B77", "FBDE");
mappingTable.set("8C6A", "FBDF");
mappingTable.set("93AC", "FBE0");
mappingTable.set("9800", "FBE1");
mappingTable.set("9865", "FBE2");
mappingTable.set("60D1", "FBE3");
mappingTable.set("6216", "FBE4");
mappingTable.set("9177", "FBE5");
mappingTable.set("5A5A", "FBE6");
mappingTable.set("660F", "FBE7");
mappingTable.set("6DF7", "FBE8");
mappingTable.set("6E3E", "FBE9");
mappingTable.set("743F", "FBEA");
mappingTable.set("9B42", "FBEB");
mappingTable.set("5FFD", "FBEC");
mappingTable.set("60DA", "FBED");
mappingTable.set("7B0F", "FBEE");
mappingTable.set("54C4", "FBEF");
mappingTable.set("5F18", "FBF0");
mappingTable.set("6C5E", "FBF1");
mappingTable.set("6CD3", "FBF2");
mappingTable.set("6D2A", "FBF3");
mappingTable.set("70D8", "FBF4");
mappingTable.set("7D05", "FBF5");
mappingTable.set("8679", "FBF6");
mappingTable.set("8A0C", "FBF7");
mappingTable.set("9D3B", "FBF8");
mappingTable.set("5316", "FBF9");
mappingTable.set("548C", "FBFA");
mappingTable.set("5B05", "FBFB");
mappingTable.set("6A3A", "FBFC");
mappingTable.set("706B", "FBFD");
mappingTable.set("7575", "FBFE");
mappingTable.set("798D", "FCA1");
mappingTable.set("79BE", "FCA2");
mappingTable.set("82B1", "FCA3");
mappingTable.set("83EF", "FCA4");
mappingTable.set("8A71", "FCA5");
mappingTable.set("8B41", "FCA6");
mappingTable.set("8CA8", "FCA7");
mappingTable.set("9774", "FCA8");
mappingTable.set("5ED3", "FCA9");
mappingTable.set("64F4", "FCAA");
mappingTable.set("652B", "FCAB");
mappingTable.set("78BA", "FCAC");
mappingTable.set("78BB", "FCAD");
mappingTable.set("7A6B", "FCAE");
mappingTable.set("4E38", "FCAF");
mappingTable.set("559A", "FCB0");
mappingTable.set("5950", "FCB1");
mappingTable.set("5BA6", "FCB2");
mappingTable.set("5E7B", "FCB3");
mappingTable.set("60A3", "FCB4");
mappingTable.set("63DB", "FCB5");
mappingTable.set("6B61", "FCB6");
mappingTable.set("6665", "FCB7");
mappingTable.set("6853", "FCB8");
mappingTable.set("6E19", "FCB9");
mappingTable.set("7165", "FCBA");
mappingTable.set("74B0", "FCBB");
mappingTable.set("7D08", "FCBC");
mappingTable.set("9084", "FCBD");
mappingTable.set("9A69", "FCBE");
mappingTable.set("9C25", "FCBF");
mappingTable.set("6D3B", "FCC0");
mappingTable.set("6ED1", "FCC1");
mappingTable.set("733E", "FCC2");
mappingTable.set("8C41", "FCC3");
mappingTable.set("95CA", "FCC4");
mappingTable.set("51F0", "FCC5");
mappingTable.set("5E4C", "FCC6");
mappingTable.set("5FA8", "FCC7");
mappingTable.set("604D", "FCC8");
mappingTable.set("60F6", "FCC9");
mappingTable.set("6130", "FCCA");
mappingTable.set("614C", "FCCB");
mappingTable.set("6643", "FCCC");
mappingTable.set("6644", "FCCD");
mappingTable.set("69A5", "FCCE");
mappingTable.set("6CC1", "FCCF");
mappingTable.set("6E5F", "FCD0");
mappingTable.set("6EC9", "FCD1");
mappingTable.set("6F62", "FCD2");
mappingTable.set("714C", "FCD3");
mappingTable.set("749C", "FCD4");
mappingTable.set("7687", "FCD5");
mappingTable.set("7BC1", "FCD6");
mappingTable.set("7C27", "FCD7");
mappingTable.set("8352", "FCD8");
mappingTable.set("8757", "FCD9");
mappingTable.set("9051", "FCDA");
mappingTable.set("968D", "FCDB");
mappingTable.set("9EC3", "FCDC");
mappingTable.set("532F", "FCDD");
mappingTable.set("56DE", "FCDE");
mappingTable.set("5EFB", "FCDF");
mappingTable.set("5F8A", "FCE0");
mappingTable.set("6062", "FCE1");
mappingTable.set("6094", "FCE2");
mappingTable.set("61F7", "FCE3");
mappingTable.set("6666", "FCE4");
mappingTable.set("6703", "FCE5");
mappingTable.set("6A9C", "FCE6");
mappingTable.set("6DEE", "FCE7");
mappingTable.set("6FAE", "FCE8");
mappingTable.set("7070", "FCE9");
mappingTable.set("736A", "FCEA");
mappingTable.set("7E6A", "FCEB");
mappingTable.set("81BE", "FCEC");
mappingTable.set("8334", "FCED");
mappingTable.set("86D4", "FCEE");
mappingTable.set("8AA8", "FCEF");
mappingTable.set("8CC4", "FCF0");
mappingTable.set("5283", "FCF1");
mappingTable.set("7372", "FCF2");
mappingTable.set("5B96", "FCF3");
mappingTable.set("6A6B", "FCF4");
mappingTable.set("9404", "FCF5");
mappingTable.set("54EE", "FCF6");
mappingTable.set("5686", "FCF7");
mappingTable.set("5B5D", "FCF8");
mappingTable.set("6548", "FCF9");
mappingTable.set("6585", "FCFA");
mappingTable.set("66C9", "FCFB");
mappingTable.set("689F", "FCFC");
mappingTable.set("6D8D", "FCFD");
mappingTable.set("6DC6", "FCFE");
mappingTable.set("723B", "FDA1");
mappingTable.set("80B4", "FDA2");
mappingTable.set("9175", "FDA3");
mappingTable.set("9A4D", "FDA4");
mappingTable.set("4FAF", "FDA5");
mappingTable.set("5019", "FDA6");
mappingTable.set("539A", "FDA7");
mappingTable.set("540E", "FDA8");
mappingTable.set("543C", "FDA9");
mappingTable.set("5589", "FDAA");
mappingTable.set("55C5", "FDAB");
mappingTable.set("5E3F", "FDAC");
mappingTable.set("5F8C", "FDAD");
mappingTable.set("673D", "FDAE");
mappingTable.set("7166", "FDAF");
mappingTable.set("73DD", "FDB0");
mappingTable.set("9005", "FDB1");
mappingTable.set("52DB", "FDB2");
mappingTable.set("52F3", "FDB3");
mappingTable.set("5864", "FDB4");
mappingTable.set("58CE", "FDB5");
mappingTable.set("7104", "FDB6");
mappingTable.set("718F", "FDB7");
mappingTable.set("71FB", "FDB8");
mappingTable.set("85B0", "FDB9");
mappingTable.set("8A13", "FDBA");
mappingTable.set("6688", "FDBB");
mappingTable.set("85A8", "FDBC");
mappingTable.set("55A7", "FDBD");
mappingTable.set("6684", "FDBE");
mappingTable.set("714A", "FDBF");
mappingTable.set("8431", "FDC0");
mappingTable.set("5349", "FDC1");
mappingTable.set("5599", "FDC2");
mappingTable.set("6BC1", "FDC3");
mappingTable.set("5F59", "FDC4");
mappingTable.set("5FBD", "FDC5");
mappingTable.set("63EE", "FDC6");
mappingTable.set("6689", "FDC7");
mappingTable.set("7147", "FDC8");
mappingTable.set("8AF1", "FDC9");
mappingTable.set("8F1D", "FDCA");
mappingTable.set("9EBE", "FDCB");
mappingTable.set("4F11", "FDCC");
mappingTable.set("643A", "FDCD");
mappingTable.set("70CB", "FDCE");
mappingTable.set("7566", "FDCF");
mappingTable.set("8667", "FDD0");
mappingTable.set("6064", "FDD1");
mappingTable.set("8B4E", "FDD2");
mappingTable.set("9DF8", "FDD3");
mappingTable.set("5147", "FDD4");
mappingTable.set("51F6", "FDD5");
mappingTable.set("5308", "FDD6");
mappingTable.set("6D36", "FDD7");
mappingTable.set("80F8", "FDD8");
mappingTable.set("9ED1", "FDD9");
mappingTable.set("6615", "FDDA");
mappingTable.set("6B23", "FDDB");
mappingTable.set("7098", "FDDC");
mappingTable.set("75D5", "FDDD");
mappingTable.set("5403", "FDDE");
mappingTable.set("5C79", "FDDF");
mappingTable.set("7D07", "FDE0");
mappingTable.set("8A16", "FDE1");
mappingTable.set("6B20", "FDE2");
mappingTable.set("6B3D", "FDE3");
mappingTable.set("6B46", "FDE4");
mappingTable.set("5438", "FDE5");
mappingTable.set("6070", "FDE6");
mappingTable.set("6D3D", "FDE7");
mappingTable.set("7FD5", "FDE8");
mappingTable.set("8208", "FDE9");
mappingTable.set("50D6", "FDEA");
mappingTable.set("51DE", "FDEB");
mappingTable.set("559C", "FDEC");
mappingTable.set("566B", "FDED");
mappingTable.set("56CD", "FDEE");
mappingTable.set("59EC", "FDEF");
mappingTable.set("5B09", "FDF0");
mappingTable.set("5E0C", "FDF1");
mappingTable.set("6199", "FDF2");
mappingTable.set("6198", "FDF3");
mappingTable.set("6231", "FDF4");
mappingTable.set("665E", "FDF5");
mappingTable.set("66E6", "FDF6");
mappingTable.set("7199", "FDF7");
mappingTable.set("71B9", "FDF8");
mappingTable.set("71BA", "FDF9");
mappingTable.set("72A7", "FDFA");
mappingTable.set("79A7", "FDFB");
mappingTable.set("7A00", "FDFC");
mappingTable.set("7FB2", "FDFD");
mappingTable.set("8A70", "FDFE");

