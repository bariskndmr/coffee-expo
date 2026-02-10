import iconSet from '@/assets/selection.json';
import IcoMoon from 'react-icomoon';
import { Svg, Path } from 'react-native-svg';

type IconName = (typeof iconSet.icons)[number]['icon']['tags'][number];

type TIconProps = {
    icon: IconName;
    size?: number;
    color?: string;
};

const Icon = ({ icon, size = 24, color = '#000' }: TIconProps) => {
    return (
        <IcoMoon
            native
            SvgComponent={Svg}
            PathComponent={Path}
            iconSet={iconSet}
            icon={icon}
            size={size}
            color={color}
        />
    );
};

export { Icon };
