import { IStatusList } from "../interfaces/index";

/**
 * @author      : Riya Mehere
 * @date        : 2024-02-22
 * @description : This statusOptions.ts returns the languages list
 * @params      : -
 * @return      : Returns a Status list (value and text) for status filter dropdown
 */
export const statusOptions : IStatusList[] = [
  { value: 'Placed', text: 'Placed' },
  { value: 'In-transit', text: 'In-transit' },
  { value: 'Out for delivery', text: 'Out for delivery' },
];

