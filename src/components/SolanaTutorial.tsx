// SolanaTutorial.tsx

const solanaTutorial: string = `
# Solana Blockchain Eğitimi

## Solana Nedir?
Solana, yüksek performanslı, ölçeklenebilir bir blockchain platformudur. 2017 yılında Anatoly Yakovenko tarafından geliştirilmiştir ve ana ağı 2020 yılında faaliyete geçmiştir.

## Solana'nın Temel Özellikleri
- **Proof of History (PoH)**: Solana'nın en dikkat çeken özelliğidir.
- **Yüksek İşlem Hızı**: Saniyede 65.000+ işlem yapabilir.
- **Düşük Ücretler**: İşlem ücretleri çok düşüktür.
- **Akıllı Sözleşmeler ve dApp'ler**: Desteklenir.
- **Geliştirici Dostu**: Rust, C, C++ gibi dillerle geliştirme imkânı sunar.

## Solana Nasıl Çalışır?
- **PoH ile Zaman Senkronizasyonu**
- **Tower BFT**
- **Turbine**
- **Gulf Stream**
- **Sealevel**

## Solana Kullanım Alanları
- **NFT Pazar Yerleri** (Magic Eden)
- **DeFi Projeleri** (Serum, Raydium)
- **Oyun ve Metaverse** (Star Atlas)
- **Ödeme Sistemleri** (Solana Pay)

## Solana Token'ı: SOL
- SOL, ağın yerel token'ıdır.
- İşlem ödemelerinde ve staking işlemlerinde kullanılır.

## Avantajları
- Yüksek ölçeklenebilirlik
- Düşük işlem maliyetleri
- Hızlı finalite

## Dezavantajları
- Merkeziyetsizlik tartışmaları
- Ağ kesintileri

## Solana'da Nasıl Yatırım Yapılır?
- Borsaya kayıt olun.
- SOL satın alın.
- Cüzdanda saklayın.

## Sonuç
Solana, blockchain dünyasında hız ve verimliliği ile öne çıkan bir projedir.
`;

const SolanaTutorial = () => {
  return (
    <div className="p-6">
      <div className="h-[600px] overflow-y-auto border rounded-xl border-gray-400 shadow-md p-6 text-left font-sans">
        <div className="prose prose-lg max-w-none">
          {solanaTutorial.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-bold mb-4">{line.replace('# ', '')}</h1>;
            } else if (line.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-semibold mb-3">{line.replace('## ', '')}</h2>;
            } else if (line.startsWith('- **')) {
              return <p key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }} />;
            } else if (line.startsWith('- ')) {
              return <li key={index} className="list-disc ml-6 mb-1">{line.replace('- ', '')}</li>;
            } else {
              return <p key={index} className="mb-2">{line}</p>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default SolanaTutorial;
