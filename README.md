# Ionic Harcama Takip Uygulaması

Bu proje, TBP4001 Mobil Programlama dersi kapsamında hazırladığım Ionic tabanlı bir harcama takip uygulamasıdır. Uygulamanın temel amacı, kullanıcının günlük harcamalarını kolay bir şekilde ekleyebilmesi, listeleyebilmesi, toplam harcamasını görebilmesi ve istediği kayıtları silebilmesidir.

Projede ders kapsamında gördüğümüz Ionic bileşenlerini, Angular tarafında veri bağlama mantığını ve LocalStorage kullanımını uygulamaya çalıştım. Uygulama basit tutuldu ama temel ihtiyaçları karşılayacak şekilde çalışır durumdadır.

## Projenin Amacı

Bu uygulamada kullanıcı yaptığı harcamaları kaydedebilir. Her harcama için harcama adı, tutar ve kategori bilgisi girilir. Eklenen harcamalar ekranda liste olarak gösterilir. Ayrıca uygulama toplam harcama tutarını otomatik olarak hesaplar.

Veriler LocalStorage ile saklandığı için sayfa yenilense bile eklenen harcamalar kaybolmaz. Kullanıcı isterse listedeki harcamaları kaydırmalı silme işlemiyle silebilir.

## Kullanılan Teknolojiler

- Ionic Framework
- Angular
- TypeScript
- HTML
- SCSS
- LocalStorage

## Uygulamada Bulunan Özellikler

- Harcama adı girme
- Harcama tutarı girme
- Kategori seçme
- Boş veri girişini engelleme
- Harcamaları listeleme
- Toplam harcama tutarını dinamik hesaplama
- LocalStorage ile verileri kalıcı olarak saklama
- `ion-item-sliding` ile kaydırmalı silme işlemi
- Silme işleminden önce onay mesajı gösterme
- Harcama ekleme ve silme işlemlerinde toast mesajı gösterme
- Harcama tarihi ekleme
- Mobil ekrana uygun sade arayüz

## Kullanılan Ionic Bileşenleri

Projede ödevde istenen Ionic bileşenlerini kullanmaya dikkat ettim:

- `ion-header`
- `ion-toolbar`
- `ion-title`
- `ion-content`
- `ion-card`
- `ion-input`
- `ion-select`
- `ion-button`
- `ion-list`
- `ion-item`
- `ion-item-sliding`

Bunların yanında daha düzgün bir görünüm ve kullanıcı etkileşimi için `ion-badge`, `ion-text`, `ion-icon`, `ion-item-options` ve `ion-item-option` bileşenlerini de kullandım.

## Dosya Yapısı

Bu projede asıl işlemler `src/app/home` klasöründeki dosyalarda yapılmıştır.

```text
src/
└── app/
    └── home/
        ├── home.page.html
        ├── home.page.scss
        └── home.page.ts
```

### `home.page.ts`

Bu dosyada uygulamanın TypeScript tarafındaki işlemleri yer almaktadır. Harcama bilgileri, kategori listesi, toplam tutar hesaplama, LocalStorage işlemleri, toast mesajları ve silme onayı bu dosyada yapılmıştır.

Uygulamada kullanılan harcama modeli şu şekildedir:

```ts
interface Harcama {
  adi: string;
  tutari: number;
  kategori: string;
  tarih: string;
}
```

Kullanıcı yeni bir harcama eklediğinde bilgiler kontrol edilir. Eğer harcama adı, tutar veya kategori boş bırakılırsa kayıt eklenmez ve kullanıcıya uyarı mesajı gösterilir.

### `home.page.html`

Bu dosyada uygulamanın arayüzü bulunmaktadır. Kullanıcıdan veri almak için input ve select alanları, harcamaları göstermek için liste yapısı ve toplam tutarı göstermek için kart yapısı kullanılmıştır.

Harcamalar Angular `*ngFor` yapısı ile ekrana yazdırılmıştır. Ayrıca silme işlemi için `ion-item-sliding` kullanılmıştır.

### `home.page.scss`

Bu dosyada uygulamanın görsel düzenlemeleri yapılmıştır. Kartların köşeleri yuvarlatılmış, toplam harcama bölümü daha belirgin hale getirilmiş ve liste elemanları daha okunabilir olacak şekilde düzenlenmiştir.

## Uygulamanın Çalışma Mantığı

Uygulama açıldığında önce LocalStorage içinde daha önce kaydedilmiş harcama olup olmadığı kontrol edilir. Eğer kayıtlı veri varsa bu veriler ekrana yüklenir ve toplam harcama yeniden hesaplanır.

Kullanıcı harcama adı, tutar ve kategori bilgilerini girip “Harcama Ekle” butonuna bastığında uygulama önce boş alan kontrolü yapar. Bilgiler doğru girilmişse yeni harcama listeye eklenir, LocalStorage içine kaydedilir ve toplam tutar güncellenir.

Kullanıcı listedeki bir harcamayı silmek istediğinde harcama satırını kaydırarak silme seçeneğini açabilir. Silme butonuna basıldığında onay mesajı gösterilir. Kullanıcı onay verirse harcama listeden ve LocalStorage içinden silinir.

## Kategoriler

Uygulamada şu kategoriler bulunmaktadır:

- Market
- Ulaşım
- Fatura
- Eğlence
- Eğitim
- Diğer

## Projeyi Çalıştırma

Projeyi çalıştırmak için önce gerekli paketlerin kurulması gerekir.

```bash
npm install
```

Daha sonra Ionic projesi şu komutla çalıştırılabilir:

```bash
ionic serve
```

Eğer Ionic CLI yüklü değilse şu komutla kurulabilir:

```bash
npm install -g @ionic/cli


## Kısa Açıklama

Bu projede Ionic kullanarak günlük harcamaları takip etmeye yarayan basit bir mobil uygulama geliştirdim. Kullanıcı harcama adı, tutar ve kategori bilgisi girerek yeni harcama ekleyebiliyor. Eklenen harcamalar liste halinde gösteriliyor ve toplam harcama tutarı otomatik olarak hesaplanıyor. Veriler LocalStorage içinde saklandığı için sayfa yenilense bile kaybolmuyor. Ayrıca kullanıcı harcamaları kaydırmalı silme özelliğiyle silebiliyor.
