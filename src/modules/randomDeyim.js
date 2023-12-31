const quotes = [
    "Abuk sabuk konuşmak: Düşünmeden konuşmak.",
    "Ağırdan almak: Bir şeyi yapmak için acele etmemek, yavaş yapmak.",
    "Ağız aramak: Öğrenmek istediği bir konuda insanları yoklamak.",
    "Ağzı kulaklarına varmak: Çok mutlu olmak, mutlu olduğunu çok belli etmek.",
    "Ağzında bakla ıslanmamak: Sır saklamayı becerememk.",
    "Baş etmek: Bir işi yapmaya gücü yetmek, o işi yapabilmek.",
    "Başına çorap örmek: Birisini kötü bir duruma düşürmek için gizli gizli planlar yapmak.",
    "Bal dök yala: Her tarafın tertemiz olması.",
    "Bahtı kara: Talihinin kötü olması",
    "Burnunun dikine gitmek: Her zaman kendi dilediğini yapıp kimsenin sözüne önem vermemek.",
    "Caka satmak: Gösteriş yapmak.",
    "Can atmak: Bir iş için çok istekli olmak.",
    "Can damarına basmak: Bir kişinin veya bir işin en duyarlı yerine değinmek",
    "Canını burnuna gelmek: Bir işi yaparken çok zorlanmak.",
    "Çam devirmek: Farkında olmadan söylememesi gereken bir şeyi söylemek.",
    "Çantada keklik: Ele geçirilmesi kolay veya kesin olan şeyler için kullanılan bir deyim.",
    "Çar çur etmek: Malını gereksiz şeyler için harcayıp bitirmek.",
    "Çekirdekten yetişme: Bir işi küçük yaştan itibaren öğrenme ve yapma.",
    "Çene çalmak: Çok konuşarak vakit geçirmek.",
    "Dağdan gelip bağdakini kovmak: Sonradan geldiği yerde veya katıldığı bir işte eskiden beri olan insanları beğenmemek.",
    "Dalevere çevirmek: Bir işi yaparken yalan dolan ve hile ile yapmak.",
    "Daldan dala konmak: Belli bir düşüncede kalmamak sürekli değişkenlik göstermek.",
    "Damdan düşer gibi: Bir şeyin aniden çok hızlı bir şekilde olması.",
    "Dara düşmek: Para sıkıntısına girmek.",
    "Eceline susamak: Ölümüne neden olacak kadar zor işlere kalkışmak",
    "Eğri bakmak: Bir insana kötü niyetle, kötü düşünce ile bakmak.",
    "Ekmeğinden etmek: Bir insanın işine engel olmak. İşinden atmak.",
    "Farkına varmak: Bir konuda gözü açılmak , daha iyi ayırt etmek.",
    "Fena etmek: Bir insanı kötü duruma düşürmek, zor durumda bırakmak.",
    "Ferman dinlememek: Etrafındaki kişilerin dediklerini dinlemeyip kendi düşündüğü şekilde davranmak.",
    "Fink atmak: Kafasına göre davranmak, hareket etmek.",
    "Gavur inadı: Önüne geçilemeyen, yumuşatılamayan inat.",
    "Gazel okumak: Kandırmak ve oyuna getirmek için söylenen boş sözler.",
    "Gına gelmek: Bıkmak, usanmak.",
    "Göbeği çatlamak: Bir şeyi yapabilmek için büyük çabalar harcamak.",
    "Göğüs germek: Zorluklara direnmek , vazgeçmemek.",
    "Göklere çıkarmak: Çok fazla övmek.",
    "Halden anlamak: Bir kişinin içinde bulunduğu zor durumu anlayarak, ona anlayış göstermek.",
    "Hale yola koymak: Düzenlemek, planlamak.",
    "Hali vakti yerinde: Zengin, oldukça varlıklı kişiler için söylenen bir deyim.",
    "Hapı yutmak: Zor bir duruma düşmek.",
    "Har vurup harman savurmak: Parayı çarçur etmek, gereksiz yere kullanmak.",
    "Ikınıp sıkınmak: Bir işi yaparken çok zorlanmak.",
    "Iskartaya çıkarmak: İşe yaramaz ve değersiz olanları ayırmak.",
    "Islah etmek: Bir kişiyi daha iyi bir duruma getirmek, eğitmek.",
    "İbret almak: Bir olaydan veya bir kişinin içine düştüğü kötü durumdan ders çıkarmak.",
    "İçi açılmak: Güzel bir haber veya olaydan sonra mutlu olmak, iç sıkıntısını gidermek.",
    "İçi cız etmek: Acı bir olay karşısında üzülmek, acımak.",
    "İçi içine sığmamak: Çok sevindiğini gizleyememek, sevinçten yerinde duramamak.",
    "İçine işlemek: Bir şeyden çok etkilenmek, fazla duygulanmak.",
    "Kabak tadı vermek: Çok sık yinelendiği için sıkılmak, bıkmak.",
    "Kabına sığamamak: Duygularını gizli tutamamak, fazla davranışlarda bulunmak.",
    "Kafa patlatmak: Bir şeyi yapabilmek için uzun süre düşünmek, bu konuda kafa yormak.",
    "Kafa tutmak: Karşı gelmek, söz dinlememek.",
    "Laf altında kalmamak: Başka kimselerin sözlerine karşılık vermemek, sözü karşılıksız bırakmamak.",
    "Lafı ağzına tıkmak: Karşısındaki kişinin sözünü kesmek, konuşmasına engel olmak.",
    "Leb demeden leblebiyi anlamak: Bir sözü, konuyu hemen algılamak.",
    "Leke sürmek: İnsanlara iftira atmak, onlara kötü şeyler söylemek.",
    "Lokmasını saymak: Bir kişinin ne kadar yediğini ve yiyeceğini hesaplamak.",
    "Mahşer gibi: Çok kalabalık.",
    "Maskara olmak: Gülünç, komik duruma düşmek.",
    "Mayası bozuk: Soyu kötü, doğuştan kötü olan kişiler için kullanılan bir deyimdir.",
    "Maymun iştahlı: Bugün beğendiği şeyi yarın beğenmeyen. Sevdiği şeylerde kararsız olan.",
    "Nabza göre şerbet vermek: Birine onun hoşuna gidecek biçimde davranmak.",
    "Nam almak: Bir yerde tanınmak, bir konuda ünlü olmak.",
    "Naza çekmek: Ağırdan almak, bir konuda çok istekli görünmemek.",
    "Ocağına düşmek: Bir kişiye muhtaç hale gelmek.",
    "Ok yaydan çıkmak: Geri dönüşü olmayacak bir işe girmek.",
    "Omuz silkmek: Bir şeyi önemsiz bulmak, umursamamak.",
    "Öç almak: İntikam almak, yapılan bir kötülüğün karşılığını vermek.",
    "Ödü patlamak: Çok korkmak.",
    "Ön ayak olmak: Bir işin yapılabilmesi için yardımcı olmak, işi başlatmak.",
    "Özenip bezenmek: İşi özenerek ve dikkatli yapmak.",
    "Pabuç bırakmamak: Bir kişiye korkmadığını ve işi yapacağını göstermek.",
    "Paçaları sıvamak: Bir işi yapmak için hazırlanmak.",
    "Paha biçilmez: Çok değerli, manevi değeri olan şeyler için kullanılan bir deyimdir.",
    "Rafa kaldırmak: Bir işi bırakmak, üzerinde durmayıp kenara kaldırmak.",
    "Rast gitmek: Bir şeyin yolunda gitmesi, sorunsuz yapılması.",
    "Renk vermemek: Duygularını belli etmemek, mutsuz olduğunu gizlemek.",
    "Sabır taşı: Çok sabırlı olan insanlar için kullanılan bir deyim.",
    "Saç ağartmak: Bir işi yaparken çok zorlanmak, büyük çabalar göstermek.",
    "Sağ gözünü sol gözünden sakınmak: Çok kıskanmak, üzerine titremek.",
    "Şaka götürmemek: Şakadan hoşlanmamak, rahatsız olmak.",
    "Şakası yok: Çok tehlikeli, önemsenmesi gereken şeyler.",
    "Şeref vermek: Onurlandırmak.",
    "Tabana kuvvet: Yürümek gereken durumlarda kullanılan bir deyimdir.",
    "Tadını çıkarmak: Bir güzellikten ve imkanlardan doya doya yararlanmak.",
    "Tam üstüne basmak: Konuya doğru şekilde değinmek, isabet ettirmek.",
    "Tarihe karışmak: Zamanla unutulmak, hatırlanmamak.",
    "Ucunu kaçırmak: Bir işi yaparken veya yönetirken gereken ölçüyü kaçırmak, toparlanamayacak duruma gelmek.",
    "Ucuz atlatmak: Kötü bir olaydan hafif kayıplarla çıkmak, ağır zararlar almamak.",
    "Üç buçuk atmak: Çok korkmak, ürkmek,",
    "Üste çıkmak: Bir olayda kendini haklı çıkarmaya çalışmak.",
    "Vadesi yetmek: Ölme zamanının gelmesi, yaşamının sona ermesi.",
    "Vebali boynuna almak: Bir işin kötü sonuçlanması durumunu üstlenmek.",
    "Yabana atmak: Bir şeyi önemsiz görmek, ilgilenmemek.",
    "Yağ tulumu: Fazla kilolu insanlar için kullanılan deyim.",
    "Zeval vermemek: Zarar vermemek, korumak.",
    "Zevkten dört köşe olmak: Çok sevinmek, keyiflenmek.",
    "Zeytinyağı gibi üste çıkmak: Haksız olduğu bir konuyu kabul etmeyip kendini haklı göstermeye çalışmak.",
    "Acele işe şeytan karışır: Belki de en çok kullanılan atasözlerinden biridir. Acele davranma gibi durumlarda bu atasözü kullanılır. Yaptığımız işlerde acele edersek hata riski ortaya çıkar ve aksilik çıkabilir. Anlamlarına gelmektedir.",
    "Abanın kıymeti yağmurda bilinir: Hiç değerini bilmediğimiz veya unuttuğumuz eşyaların zamanı geldiğinde kıymetlendiği ifadeler için kullanılır.",
    "Acemi katı kapı önünde yük indirir: İşi alan kişi profesyonel şekilde çalışma yapmaz. İşi yarıda bırakır. Üstüne birde işten sıyrılıp kaçar.",
    "Acı patlıcan kırağı çalmaz: Zorluk gören kişiler her şeyin üstesinden gelir. Önceden zorluk gördüğü için yine bir zorlukla karşılaşsa da hemen pes etmez ve mücadele verir.",
    "Ağaç yaprağıyla güzeldir: Olumlu ve mutluluk anlarında herkesle paylaşma isteği duyulur",
    "Besle kargayı oysun gözünü: İnsanlara iyilik yaparsınız ve yardım edersiniz. Ama iyilik yaptığınız kişi bunun kıymetini bilmez ve siz karşı gelebilir ya da ihanet eder.",
    "Boş çuval ayakta durmaz: Bir yere tutunamayan, bir işi beceremeyenler için bu atasözü kullanılır.",
    "Baca eğri de olsa dumanı doğru çıkar: İyi bir karaktere sahip olan bireyler önlerine engel çıksa da kötülüklerle karşılaşsalar da her zaman iyilikle ve güzellikle olayları karşılar.",
    "Büyük lokma ye büyük söz söyleme: Her ağzımıza geleni söylememek gerekir. Söylenilen gibi her şey doğru çıkmayabilir. Büyük laf ederek büyümeyiz.",
    "Can çıkmayınca huy çıkmaz: Bir insanın huyu neyse o şekilde aynı kalır. Değiştirmeye kalkışsanız bile değişmez. Hep aynı kalır.",
    "Damlaya damlaya göl olur: Birikim yapmak için az paraya sahip olabilirsiniz. Ancak azar azar biriktirince daha sonrasında çoğalır. Günümüzde oldukça yaygın kullanılan atasözleri ve anlamları olarak bilinir.",
    "Acem kılıcı gibi olmak: Birbirine zıt iki gruptan hangisinin tarafında bulunuyorsa onlardanmış gibi hissettirmek.",
    "Açık kapı bırakmak: Bir sıkıntı esnasında gelecekte uzlaşabileceğini göstermek ve bunu hissettirecek sözler söylemek.",
    "Ağzında bakla ıslanmamak: Hiç kimsenin gizli söylediğini içinde tutamamak.",
    "Bal dök yala: Tüm etrafı temizlemek ve parlatmak.",
    "Can kulağı ile dinlemek: Tüm konsantresini dinleyiciye vermek.",
    "Cebi delik: Savurgan olan kişinin tanımıdır.",
    "Çalmadan Oynamak: Müzik dahi gerekmeden mutluluktan coşmak.",
    "Çam devirmek: Bir yakınının kalbini kıracak laflar etmek.",
    "Çamur atmak: Bir kimseye asılsız ithamlarda bulunmak.",
    "Çantada Keklik: Çabucak elde edilmek.",
    "Damarına Basmak: Bir kişinin hassas olduğu mevzulara değinmek.",
    "Damdan düşer gibi: Ansızın olan bir şey için kullanılır.",
    "Dış kapının dış mandalı:  Çok yakın olmadığı halde olaya dahil olan kişilere denir.",
    "Dilli Düdük: Konuşkan kişilere denir.",
    "Eceline Susamak: Aşırı riskli olaylara karışmak, ölüm tehlikesi olan olaylara girmek.",
    "Ekmeğine kan doğramak: Elem içerisinde olmak.",
    "El Etek Çekmek: Eski ilgilendiği bir işi bırakmak.",
    "Eline Eteğine Doğru: Namuslu ve kötü alışkanlığı olmayan kişi için söylenir.",
    "Fare Düşse Başı Yarılır: Çok fakir olan yerler için kullanılır.",
    "Fırıldak gibi dönmek: Menfaati doğrultusunda hareket etmek, yalnızca kendini düşünmek.",
    "Fink Atmak: İstediği gibi davranmak, eğlenmek.",
    "İç etmek: Kendinin olmayan malı sahiplenmek.",
    "İçli dışlı:  Samimi davranmak.",
    "İçi içine sığmamak: Sevinçten ne yapacağını bilememek.",
    "İçine ateş düşmek: Çok büyük bir üzüntü yaşamak.",
    "Kanı kaynamak: Ani bir sevgiyle kaplanmak ve kendine engel olamamak.",
    "Mart kedisi gibi: Oldukça çapkın olmak.",
    "Masal okumak: Kişinin bildiği halde yalan atmaya çalışmak.",
    "Nal toplamak: Bir sınavda başarısız olmak.",
    "Nalları dikmek: Hayvanın ölmesidir.",
    "Ne baş belli ne ayak: Her şey karışmış karman çorman, düzensiz grup ve yerler.",
    "Ne oldum delisi:  Sonradan görme, geçmişinin unutma, şımarmak.",
    "Ocağına düşmek: Bir kimseye muhtaç olmak.",
    "Ok yaydan çıktı: Bir durumun artık karşı konamayacak duruma gelmesidir.",
    "Oturduğu dalı kesmek: Kendi yararına olan kaynakları yok etmek.",
    "Ödü patlamak: Aşırı korkmak.",
    "Rest çekmek: Kesin olarak bir durumu kabul etmemek.",
    "Rol oynamak: Bir olayda etkili olmak.",
    "Ruhu duymamak: Hiç haberi olmadan bir şeyin yapılmasıdır.",
    "Saman alevi gibi parlamak: Aniden sinirlenmektir.",
    "Sepet havası çalmak: İşinden kovulmak.",
    "Sıfırı tüketmek: Tüm varlığını tüketmek.",
    "Sinek avlamak: İşi veya müşterisi olmamak ve boş boş takılmaktır.",
    "Şamar oğlanı: Herkesin hırsını ondan aldığı kişidir.",
    "Şeytan görsün yüzünü: Bir kimseyle irtibat kurmak istememektir.  O",
    "Ucu ucuna getirmek: Tam zamanında bitirebilmektir.",
    "Ulu orta konuşmak: Düşünmeden cümleler kurmak.",
    "Uzun hikaye: Konunun ayrıntılarının çok olması ve anlatımının uzun bir süre alacağıdır.",
    "Uzun boylu: İncelikleri detaylıca düşünmektir.",
    "Üç buçuk atmak: Korkmak.",
    "Yabana atmak: Önemsememek.",
    "Yağlı müşteri: Çok zengin olan bir müşteridir.",
    "Yaka silkmek: Sıkılmak artık o kişiden bıkmaktır.",
    "Yan çizmek: Söz verdiği bir şeyden vazgeçmektir.",
    "Zemheri zürefası: Çok soğuk havada havaya uygun olmayacak kadar ince giymektir.",
    "Zılgıt yemek: Birisinden azar yemektir.",
    "Zıvanadan çıkmak: Delirmek, kendine engel olamayacak kadar çıldırmaktır.",
    "Zokayı yutmak: Bir kimse tarafından aldatılmak.",
    "Zurnanın zırt dediği yer: Yapılmakta olan işin en can alıcı yeridir."
];

export default function get() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

//zemi.space