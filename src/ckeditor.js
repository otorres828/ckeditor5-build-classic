/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import Font from '@ckeditor/ckeditor5-font/src/font';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Font,
	CodeBlock,
	HtmlEmbed,
	SimpleUploadAdapter,
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	PictureEditing,
	Table,
	TableToolbar,
	TextTransformation
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'uploadImage',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo',
			'codeBlock',
			'htmlEmbed',
			'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
		]
	},
	fontColor: {
		colors: [
			{
				color: 'hsl(0, 0%, 0%)',
				label: 'Black'
			},
			{
				color: 'hsl(0, 0%, 30%)',
				label: 'Dim grey'
			},
			{
				color: 'hsl(0, 0%, 60%)',
				label: 'Grey'
			},
			{
				color: 'hsl(0, 0%, 90%)',
				label: 'Light grey'
			},
			{
				color: 'hsl(0, 0%, 100%)',
				label: 'White',
				hasBorder: true
			},
			{
				color: 'hsl(187, 100%, 50%)',
				label: 'Azul Celeste'
			},
			{
				color: 'hsl(337, 100%, 50%)',
				label: 'Futsia'
			},
			{
				color: 'hsl(337, 100%, 31%)',
				label: 'Rojo Carmesi'
			},
			{
				color: 'hsl(49, 100%, 31%)',
				label: 'Marron oscuro'
			},
			{
				color: 'hsl(65, 85%, 51%)',
				label: 'Verde Chillon'
			},
			{
				color: 'hsl(286, 23%, 51%)',
				label: 'Morado Opaco'
			},
			{
				color: 'hsl(314, 100%, 50%)',
				label: 'Morado'
			},
			{
				color: 'hsl(204, 100%, 50%)',
				label: 'Azul'
			},
			{
				color: 'hsl(30, 75%, 60%)',
				label: 'Orange'
			},
			{
				color: 'hsl(60, 75%, 60%)',
				label: 'Yellow'
			},
			{
				color: 'hsl(67, 86%, 51%)',
				label: 'Amarillo Manzana'
			},
			{
				color: 'hsl(90, 75%, 60%)',
				label: 'Light green'
			},
			{
				color: 'hsl(120, 75%, 60%)',
				label: 'Green'
			},
			// ...
		]
	},
	fontBackgroundColor: {
		colors: [
			{
				color: 'hsl(0, 0%, 30%)',
				label: 'Dim grey'
			},
			{
				color: 'hsl(0, 0%, 60%)',
				label: 'Grey'
			},
			{
				color: 'hsl(0, 0%, 90%)',
				label: 'Light grey'
			},
			{
				color: 'hsl(187, 100%, 50%)',
				label: 'Azul Celeste'
			},
			{
				color: 'hsl(337, 100%, 50%)',
				label: 'Futsia'
			},
			{
				color: 'hsl(337, 100%, 31%)',
				label: 'Rojo Carmesi'
			},
			{
				color: 'hsl(49, 100%, 31%)',
				label: 'Marron oscuro'
			},
			{
				color: 'hsl(65, 85%, 51%)',
				label: 'Verde Chillon'
			},
			{
				color: 'hsl(286, 23%, 51%)',
				label: 'Morado Opaco'
			},
			{
				color: 'hsl(314, 100%, 50%)',
				label: 'Morado'
			},
			{
				color: 'hsl(204, 100%, 50%)',
				label: 'Azul'
			},
			{
				color: 'hsl(30, 75%, 60%)',
				label: 'Orange'
			},
			{
				color: 'hsl(60, 75%, 60%)',
				label: 'Yellow'
			},
			{
				color: 'hsl(67, 86%, 51%)',
				label: 'Amarillo Manzana'
			},
			{
				color: 'hsl(90, 75%, 60%)',
				label: 'Light green'
			},
			{
				color: 'hsl(120, 75%, 60%)',
				label: 'Green'
			},

			// ...
		]
	},
	simpleUpload: {
		// The URL that the images are uploaded to.
		// uploadUrl: 'http://example.com',

		// Enable the XMLHttpRequest.withCredentials property.
		withCredentials: true,

		// Headers sent along with the XMLHttpRequest to the upload server.
		headers: {
			'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
			'Accept': 'application/json',
		}
	},
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
