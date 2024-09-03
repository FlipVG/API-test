/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {PanelBody, ToggleControl} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
import metadata from './block.json';
/*Importamos el JS con el fetch al API y lo llamaos por el nombre de la const {Data} */
import { Data } from './scripts/dataapi.js'

export default function Edit(props) {
	/*creamos la const que almacene los BlockProps */
	const { className, ...blockProps } = useBlockProps();
	return (
		<>
		<section className = {`${className} `} {...blockProps}>
			{props.attributes.panelapi && <Data />}
		</section>
		
		
		<InspectorControls>
			<PanelBody title={__("Card info of players" , metadata.textdomain)}>
				<div class="container-flex">
					<ToggleControl 
					onChange={(isChecked) => {
						props.setAttributes({
							panelapi:
							isChecked,
						});
					}}
					checked={props.attributes.panelapi}
					/>
					<span>
						{__("Panel player" , metadata.textdomain)}
					</span>
					
				</div>
			</PanelBody>
		</InspectorControls>
		</>
	);
}
