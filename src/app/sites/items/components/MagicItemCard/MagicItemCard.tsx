import styles from './MagicItemCard.module.css';

type ItemRarity = 'common' | 'uncommon' | 'rare' | 'very rare' | 'legendary' | 'artifact';


interface MagicItemCardProps {
    name: string;
    type?: string;
    rarity: ItemRarity;
    attunement: boolean;
    description: string;
    prerequistes?: string;
    imageUrl?: string | null;
}

function MagicItemCard(properties: MagicItemCardProps) {
    return (
        <div className={styles.cardBody}>
            <div className={styles.cardContainer}>
                <div className={styles.cardImage}></div>
                <div className={styles.cardInfoText}>
                    {properties.rarity}, {properties.type}
                    {properties.attunement && ', requires Attunement'}
                </div>
                <div className={styles.cardDescription}>
                    {properties.description}
                </div>
            </div>
        </div>
    );
}

export default MagicItemCard;