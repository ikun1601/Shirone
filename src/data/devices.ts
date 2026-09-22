/**
 * 设备展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/devicesConfig.ts 控制。
 */
import type { DeviceItem } from "@/types/devicesConfig";

export const devicesData: DeviceItem[] = [
	{
		id: "macbook-pro-16",
		name: 'MacBook Pro 16"',
		brand: "Apple",
		category: "desk",
		status: "active",
		specs: "M3 Max / 64GB / 2TB",
		description:
			"Primary workstation for development, design, and heavy rendering workloads.",
		icon: "material-symbols:laptop-mac-rounded",
		featured: true,
		year: "2024",
		link: "https://www.apple.com/macbook-pro/",
	},
	{
		id: "OnePlus Ace 5",
		name: "OnePlus Ace 5",
		brand: "OnePlus",
		category: "mobile",
		status: "active",
		specs: "8Gen3 / 512GB",
		description:
			"好用，但是建议上PRO",
		icon: "material-symbols:phone-iphone",
		featured: true,
		year: "2025",
	},
		{
		id: "XiaoMi MIx2s",
		name: "XiaoMi MIx2s",
		brand: "XiaoMi",
		category: "mobile",
		status: "backup",
		specs: "骁龙835 / 128GB",
		description:
			"巨能刷，但是性能不够",
		icon: "material-symbols:phone-iphone",
		featured: true,
		year: "2026",
	},
	{
		id: "OnePlus Buds 3V",
		name: "OnePlus Buds 3V",
		brand: "OnePlus",
		category: "audio",
		status: "active",
		specs: "Silver / ANC / LDAC",
		description:
			"一般",
		icon: "material-symbols:headphones-rounded",
		year: "2026",
	},
	{
		id: "OPPO Watch X3",
		name: "OPPO Watch X3",
		brand: "OPPO",
		category: "watch",
		status: "active",
		specs: "Arm-v7a / 32GB",
		description:
			"就感觉挺不值的",
		icon: "material-symbols:watch",
		year: "2026",
	},
	{
		id: "MiPad5",
		name: 'MiPad5"',
		brand: "XiaoMi",
		category: "mobile",
		status: "active",
		specs: "骁龙860 / 1TB",
		description:
			"还算好用的一个平板",
		icon: "material-symbols:tablet-mac-rounded",
		year: "2026",
	},
];

/** 获取所有设备数据列表 */
export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
