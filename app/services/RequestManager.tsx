// import axios from 'axios';

// const API_URL_ROOMS = 'https://hungviet-six.vercel.app/api/rooms'; // Replace with your API base URL
// const API_URL_HOTELS = 'https://hungviet-six.vercel.app/api/hotels';
// // Define the structure of the room data response
// interface PriceRange {
//     minPrice: number;
//     maxPrice: number;
// }
// export interface Hotel {
//     id: string;
//     name?: string; // Optional
//     contact?: string; // Optional
//     address?: string; // Optional
//     phoneNumber?: string; // Optional
//     email?: string; // Optional
//     description?: string;
//     amenities?: string[];
//     rating?: number;
//     isActive: boolean;
//     primaryImage?: string;
//     images: string[];
//     createdAt: Date;
//     updatedAt: Date;
// }
// export const slugify = (text: string): string => {
//     return text
//         .toLowerCase()
//         .trim()
//         .normalize('NFD')
//         .replace(/[\u0300-\u036f]/g, '') // Remove accents
//         .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters
//         .replace(/\s+/g, '-'); // Replace spaces with dashes
// };

// export function formatCurrency(amount: number): string {
//     return new Intl.NumberFormat('vi-VN', {
//         style: 'currency',
//         currency: 'VND'
//     }).format(amount);
// }

// export interface Room {
//     id: string;
//     hotelName: string;
//     name: string;
//     description: string;
//     priceRange: PriceRange;
//     capacity: string;
//     bedType: string;
//     viewType: string;
//     viewImage: string;
//     size: number;
//     images: string[];
//     amenities: string[];
//     features: string[];
//     isAvailable: boolean;
//     roomType: number;
// }

// export enum HotelName {
//     ThienAn = "0",
//     SongTra = "1",
//     ThienHung = "2",
//     LySon = "3",
// }

// export const HOTEL_NAMES = {
//     [HotelName.ThienAn]: 'Thiên Ân',
//     [HotelName.SongTra]: 'Sông Trà',
//     [HotelName.ThienHung]: 'Thiên Hưng',
//     [HotelName.LySon]: 'Lý Sơn'
// };

// interface RoomAPIResponse {
//     _id: string;
//     hotelName: string;
//     name: string;
//     description: string;
//     priceRange: PriceRange;
//     capacity: string;
//     bedType: string;
//     viewType: string;
//     viewImage: string;
//     size: number;
//     images: string[];
//     amenities: string[];
//     features: string[];
//     isAvailable: boolean;
//     roomType: number;
// }

// // Fetch all rooms
// export const fetchRooms = async (): Promise<Room[]> => {
//     try {
//         console.log(`${API_URL_ROOMS}`);
//         const response = await axios.get(API_URL_ROOMS);

//         // Process the response data to match the Room interface
//         const rooms: Room[] = response.data.map((room: RoomAPIResponse) => ({
//             id: room._id,
//             hotelName: room.hotelName,
//             name: room.name,
//             description: room.description,
//             priceRange: {
//                 minPrice: room.priceRange.minPrice,
//                 maxPrice: room.priceRange.maxPrice
//             },
//             capacity: room.capacity,
//             bedType: room.bedType,
//             viewType: room.viewType,
//             viewImage: room.viewImage,
//             size: room.size,
//             images: room.images,
//             amenities: room.amenities,
//             features: room.features,
//             isAvailable: room.isAvailable,
//             roomType: room.roomType
//         }));

//         return rooms;
//     } catch (error) {
//         console.error('Error fetching rooms:', error);
//         return [];
//     }
// };

// // Fetch rooms by hotel name
// export const fetchRoomsByHotelName = async (hotelName: string): Promise<Room[]> => {
//     try {
//         const response = await axios.get(API_URL_ROOMS);

//         const rooms: Room[] = response.data.map((room: RoomAPIResponse) => ({
//             id: room._id,
//             hotelName: room.hotelName,
//             name: room.name,
//             description: room.description,
//             priceRange: {
//                 minPrice: room.priceRange.minPrice,
//                 maxPrice: room.priceRange.maxPrice
//             },
//             capacity: room.capacity,
//             bedType: room.bedType,
//             viewType: room.viewType,
//             viewImage: room.viewImage,
//             size: room.size,
//             images: room.images,
//             amenities: room.amenities,
//             features: room.features,
//             isAvailable: room.isAvailable,
//             roomType: room.roomType
//         }));

//         // Filter rooms by hotelName and availability
//         return rooms.filter(room => room.hotelName === hotelName && room.isAvailable);
//     } catch (error) {
//         console.error('Error fetching rooms by hotel name:', error);
//         return [];
//     }
// };

// // Fetch a single room by ID
// export async function getRoomById(id: string): Promise<Room | null> {
//     try {
//         console.log(`Fetching room with ID: ${id} from URL: ${API_URL_ROOMS}/${id}`);
//         const response = await axios.get(`${API_URL_ROOMS}/${id}`, {
//             headers: {
//                 accept: 'application/json',
//             },
//         });
//         console.log(response)
//         const room: RoomAPIResponse = response.data;

//         return {
//             id: room._id,
//             hotelName: room.hotelName,
//             name: room.name,
//             description: room.description,
//             priceRange: {
//                 minPrice: room.priceRange.minPrice,
//                 maxPrice: room.priceRange.maxPrice
//             },
//             capacity: room.capacity,
//             bedType: room.bedType,
//             viewType: room.viewType,
//             viewImage: room.viewImage,
//             size: room.size,
//             images: room.images,
//             amenities: room.amenities,
//             features: room.features,
//             isAvailable: room.isAvailable,
//             roomType: room.roomType
//         };
//     } catch (error) {
//         console.error('Error fetching room by ID:', error);
//         return null;
//     }
// }

// export const fetchHotels = async (): Promise<Hotel[]> => {
//     try {
//         const response = await axios.get(API_URL_HOTELS);
//         return response.data.map((hotel: Hotel) => ({
//             id: hotel.id,
//             name: hotel.name,
//             contact: hotel.contact,
//             address: hotel.address,
//             phoneNumber: hotel.phoneNumber,
//             email: hotel.email,
//             description: hotel.description,
//             amenities: hotel.amenities || [],
//             rating: hotel.rating || null,
//             isActive: hotel.isActive || false,
//             primaryImage: hotel.primaryImage || null,
//             images: hotel.images || [],
//             createdAt: new Date(hotel.createdAt),
//             updatedAt: new Date(hotel.updatedAt),
//         }));
//     } catch (error) {
//         console.error('Error fetching hotels:', error);
//         return [];
//     }
// };

// // Fetch a single hotel by ID
// export const fetchHotelById = async (id: string): Promise<Hotel | null> => {
//     try {
//         const response = await axios.get(`${API_URL_HOTELS}/${id}`);
//         const hotel = response.data;
//         return {
//             id: hotel._id,
//             name: hotel.name,
//             contact: hotel.contact,
//             address: hotel.address,
//             phoneNumber: hotel.phoneNumber,
//             email: hotel.email,
//             description: hotel.description,
//             amenities: hotel.amenities || [],
//             rating: hotel.rating || null,
//             isActive: hotel.isActive || false,
//             primaryImage: hotel.primaryImage || null,
//             images: hotel.images || [],
//             createdAt: new Date(hotel.createdAt),
//             updatedAt: new Date(hotel.updatedAt),
//         };
//     } catch (error) {
//         console.error('Error fetching hotel by ID:', error);
//         return null;
//     }
// };

// // Create a new hotel
// export const createHotel = async (hotelData: Partial<Hotel>, files: File[]): Promise<Hotel | null> => {
//     try {
//         const formData = new FormData();

//         for (const [key, value] of Object.entries(hotelData)) {
//             if (value !== undefined && value !== null) {
//                 formData.append(key, value.toString());
//             }
//         }

//         // Add images to the FormData
//         files.forEach((file) => {
//             formData.append('images', file);
//         });

//         const response = await axios.post(API_URL_HOTELS, formData, {
//             headers: { 'Content-Type': 'multipart/form-data' },
//         });

//         return {
//             id: response.data.id,
//             name: hotelData.name || "", // Default to an empty string if undefined
//             contact: hotelData.contact || "",
//             address: hotelData.address || "",
//             phoneNumber: hotelData.phoneNumber || "",
//             email: hotelData.email || "",
//             description: hotelData.description || "",
//             amenities: hotelData.amenities || [],
//             rating: hotelData.rating || 0,
//             isActive: hotelData.isActive ?? false, // Explicit nullish check for booleans
//             primaryImage: response.data.primaryImageUrl || "",
//             images: response.data.imageUrls || [],
//             createdAt: new Date(),
//             updatedAt: new Date(),
//         };
//     } catch (error) {
//         console.error('Error creating hotel:', error);
//         return null;
//     }
// };

// // Update a hotel by ID
// export const updateHotel = async (id: string, hotelData: Partial<Hotel>, files: File[]): Promise<boolean> => {
//     try {
//         const formData = new FormData();

//         for (const [key, value] of Object.entries(hotelData)) {
//             if (value !== undefined && value !== null) {
//                 formData.append(key, value.toString());
//             }
//         }

//         // Add updated images if any
//         files.forEach((file) => {
//             formData.append('images', file);
//         });

//         await axios.put(`${API_URL_HOTELS}/${id}`, formData, {
//             headers: { 'Content-Type': 'multipart/form-data' },
//         });

//         return true;
//     } catch (error) {
//         console.error('Error updating hotel:', error);
//         return false;
//     }
// };

// // Delete a hotel by ID
// export const deleteHotel = async (id: string): Promise<boolean> => {
//     try {
//         await axios.delete(`${API_URL_HOTELS}/${id}`);
//         return true;
//     } catch (error) {
//         console.error('Error deleting hotel:', error);
//         return false;
//     }
// };