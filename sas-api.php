<?php
/**
 * Plugin Name:       Sas Api
 * Description:       Herramientas para conección con APIS
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Felipe VargasG 
 * Author URI:		  https://google.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sas-api
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_sas_api_block_init() {
	register_block_type( __DIR__ . '/build/block/player-card' );
}
add_action( 'init', 'create_block_sas_api_block_init' );
