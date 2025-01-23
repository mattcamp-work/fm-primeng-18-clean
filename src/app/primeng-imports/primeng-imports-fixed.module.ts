import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CompRowComponent  } from '~app/site-components/comp-row/comp-row.component';

//Icons


//Forms
import { AutoComplete } from 'primeng/autocomplete';
import { CascadeSelect } from 'primeng/cascadeselect';
import { Checkbox } from 'primeng/checkbox';
import { ColorPicker } from 'primeng/colorpicker';
import { DatePicker } from 'primeng/datepicker';
import { Editor } from 'primeng/editor';
import { FloatLabel } from 'primeng/floatlabel';
import { IconField } from 'primeng/iconfield';
import { IftaLabel } from 'primeng/iftalabel';
import { InputGroup } from 'primeng/inputgroup';
import { InputMask } from 'primeng/inputmask';
import { InputNumber } from 'primeng/inputnumber';
import { InputOtp } from 'primeng/inputotp';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilter } from 'primeng/keyfilter';
import { Knob } from 'primeng/knob';
import { Listbox } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RadioButton } from 'primeng/radiobutton';
import { Rating } from 'primeng/rating';
import { Select } from 'primeng/select';
import { SelectButton } from 'primeng/selectbutton';
import { Slider } from 'primeng/slider';
import { Textarea } from 'primeng/textarea';
import { ToggleButton } from 'primeng/togglebutton';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { TreeSelect } from 'primeng/treeselect';

// ButtonModule Components
import { ButtonModule } from 'primeng/button';
import { SpeedDial } from 'primeng/speeddial';
import { SplitButton } from 'primeng/splitbutton';

// Data Components
import { DataView } from 'primeng/dataview';
import { OrderList } from 'primeng/orderlist';
import { OrganizationChart } from 'primeng/organizationchart';
import { Paginator } from 'primeng/paginator';
import { PickList } from 'primeng/picklist';
import { TableModule } from 'primeng/table';
import { Timeline } from 'primeng/timeline';
import { Tree } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { Scroller } from 'primeng/scroller';

// Panel Components
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { Divider } from 'primeng/divider';
import { Fieldset } from 'primeng/fieldset';
import { Panel } from 'primeng/panel';
import { ScrollPanel } from 'primeng/scrollpanel';
import { Splitter } from 'primeng/splitter';
import { StepperModule } from 'primeng/stepper';
import { TabsModule } from 'primeng/tabs';
import { Toolbar } from 'primeng/toolbar';

// Overlay Components
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { Dialog } from 'primeng/dialog';
import { DrawerModule } from 'primeng/drawer';
import { DynamicDialog } from 'primeng/dynamicdialog';
import { Popover } from 'primeng/popover';
import { Tooltip } from 'primeng/tooltip';

// File Components
import { FileUpload } from 'primeng/fileupload';

// Menu Components
import { Breadcrumb } from 'primeng/breadcrumb';
import { ContextMenu } from 'primeng/contextmenu';
import { Dock } from 'primeng/dock';
import { Menu } from 'primeng/menu';
import { Menubar } from 'primeng/menubar';
import { MegaMenu } from 'primeng/megamenu';
import { PanelMenu } from 'primeng/panelmenu';
import { StepsModule } from 'primeng/steps';
import { TieredMenu } from 'primeng/tieredmenu';

// Chart Components
import { ChartModule } from 'primeng/chart';

// Messages Components
import { Message } from 'primeng/message';
import { ToastModule } from 'primeng/toast';

// Media Components
import { Carousel } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { Image } from 'primeng/image';
import { ImageCompareModule } from 'primeng/imagecompare';

// Miscellaneous Components
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { AutoFocus } from 'primeng/autofocus';
import { Avatar } from 'primeng/avatar';
import { AvatarGroup } from 'primeng/avatargroup';
import { Badge } from 'primeng/badge';
import { BlockUI } from 'primeng/blockui';
import { Chip } from 'primeng/chip';
import { FocusTrap } from 'primeng/focustrap';
import { Fluid } from 'primeng/fluid';
import { Inplace } from 'primeng/inplace';
import { MeterGroup } from 'primeng/metergroup';
import { ScrollTop } from 'primeng/scrolltop';
import { Skeleton } from 'primeng/skeleton';
import { ProgressBar } from 'primeng/progressbar';
import { ProgressSpinner } from 'primeng/progressspinner';
import { Ripple } from 'primeng/ripple';
import { StyleClass } from 'primeng/styleclass';
import { Tag } from 'primeng/tag';
import { Terminal } from 'primeng/terminal';

//To Organize: 
import { InputIcon } from 'primeng/inputicon';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';


// // Utility Services
// import { FilterService } from 'primeng/api';


@NgModule({
  imports: [
    //forms
    AutoComplete,
    CascadeSelect,
    Checkbox,
    ColorPicker,
    DatePicker,
    Editor,
    FloatLabel,
    IconField,
    IftaLabel,
    InputGroup,
    InputMask,
    InputNumber,
    InputOtp,
    InputTextModule,
    KeyFilter,
    Knob,
    Listbox,
    MultiSelectModule,
    PasswordModule,
    RadioButton,
    Rating,
    Select,
    SelectButton,
    Slider,
    Textarea,
    ToggleButton,
    ToggleSwitch,
    TreeSelect,
    // ButtonModule Components
    ButtonModule,
    SpeedDial,
    SplitButton,
    // Data Components
    DataView,
    OrderList,
    OrganizationChart,
    Paginator,
    PickList,
    TableModule,
    Timeline,
    Tree,
    TreeTableModule,
    Scroller,
    // Panel Components
    AccordionModule,
    CardModule,
    Divider,
    Fieldset,
    Panel,
    ScrollPanel,
    Splitter,
    StepperModule,
    TabsModule,
    Toolbar,
    // Overlay Components
    ConfirmDialog,
    ConfirmPopupModule,
    Dialog,
    DrawerModule,
    DynamicDialog,
    Popover,
    Tooltip,
    // File Components
    FileUpload,
    // Menu Components
    Breadcrumb,
    ContextMenu,
    Dock,
    Menu,
    Menubar,
    MegaMenu,
    PanelMenu,
    StepsModule,
    TieredMenu,
    // Chart Components
    ChartModule,
    // Messages Components
    Message,
    ToastModule,
    // Media Components
    Carousel,
    GalleriaModule,
    Image,
    ImageCompareModule,
     // Miscellaneous Components
    AnimateOnScroll,
    AutoFocus,
    Avatar,
    AvatarGroup,
    Badge,
    BlockUI,
    Chip,
    FocusTrap,
    Fluid,
    Inplace,
    MeterGroup,
    ScrollTop,
    Skeleton,
    ProgressBar,
    ProgressSpinner,
    Ripple,
    StyleClass,
    Tag,
    Terminal,

    //site components
    CompRowComponent,

    //angular utilities
    FormsModule,
    ReactiveFormsModule,

    //To Organize
    InputIcon,
    InputGroupAddonModule,
  ],
  exports: [
    AutoComplete,
    CascadeSelect,
    Checkbox,
    ColorPicker,
    DatePicker,
    Editor,
    FloatLabel,
    IconField,
    IftaLabel,
    InputGroup,
    InputMask,
    InputNumber,
    InputOtp,
    InputTextModule,
    KeyFilter,
    Knob,
    Listbox,
    MultiSelectModule,
    PasswordModule,
    RadioButton,
    Rating,
    Select,
    SelectButton,
    Slider,
    Textarea,
    ToggleButton,
    ToggleSwitch,
    TreeSelect,
    // ButtonModule Components
    ButtonModule,
    SpeedDial,
    SplitButton,
    // Data Components
    DataView,
    OrderList,
    OrganizationChart,
    Paginator,
    PickList,
    TableModule,
    Timeline,
    Tree,
    TreeTableModule,
    Scroller,
    // Panel Components
    AccordionModule,
    CardModule,
    Divider,
    Fieldset,
    Panel,
    ScrollPanel,
    Splitter,
    StepperModule,
    TabsModule,
    Toolbar,
    // Overlay Components
    ConfirmDialog,
    ConfirmPopupModule,
    Dialog,
    DrawerModule,
    DynamicDialog,
    Popover,
    Tooltip,
    // File Components
    FileUpload,
    // Menu Components
    Breadcrumb,
    ContextMenu,
    Dock,
    Menu,
    Menubar,
    MegaMenu,
    PanelMenu,
    StepsModule,
    TieredMenu,
    // Chart Components
    ChartModule,
    // Messages Components
    Message,
    ToastModule,
    // Media Components
    Carousel,
    GalleriaModule,
    Image,
    ImageCompareModule,
    AnimateOnScroll,
    AutoFocus,
    Avatar,
    AvatarGroup,
    Badge,
    BlockUI,
    Chip,
    FocusTrap,
    Fluid,
    Inplace,
    MeterGroup,
    ScrollTop,
    Skeleton,
    ProgressBar,
    ProgressSpinner,
    Ripple,
    StyleClass,
    Tag,
    Terminal,

    //Site Components
    CompRowComponent,

    //Angular Utilties
    FormsModule,
    ReactiveFormsModule,

    //To Organize
    InputIcon,
    InputGroupAddonModule,
  ],
  providers: [
     //FilterService,
  ]
})
// export class ImportsModule {}



export class PrimengImportsModule {}
