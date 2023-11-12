/*
 * Format:
 * 
 * data['School'] = {
 * 
 *     map: {
 *         file: 'Map Image',
 *         size: { rows: #Rows, cols: #Cols }
 *     },
 * 
 *     buildings: [
 *         {
 *             code: 'Building Code',
 *             name: 'Building Name',
 *             tips: [
 *                 'Building Tips',
 *                 ...(cont)...
 *             ],
 *             link: 'Maps/Geo Link',
 *             cell: { row: #Row, col: #Col }
 *         },
 *         ...(cont)...
 *     ],
 *     
 * }
 * 
 * Place data in "data/[school].js" and a map at "data/[file]".
 */

// Data storage.
var data = {}