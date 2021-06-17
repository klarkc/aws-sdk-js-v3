import { AcceptGrantCommandInput, AcceptGrantCommandOutput } from "../commands/AcceptGrantCommand";
import { CheckInLicenseCommandInput, CheckInLicenseCommandOutput } from "../commands/CheckInLicenseCommand";
import { CheckoutBorrowLicenseCommandInput, CheckoutBorrowLicenseCommandOutput } from "../commands/CheckoutBorrowLicenseCommand";
import { CheckoutLicenseCommandInput, CheckoutLicenseCommandOutput } from "../commands/CheckoutLicenseCommand";
import { CreateGrantCommandInput, CreateGrantCommandOutput } from "../commands/CreateGrantCommand";
import { CreateGrantVersionCommandInput, CreateGrantVersionCommandOutput } from "../commands/CreateGrantVersionCommand";
import { CreateLicenseCommandInput, CreateLicenseCommandOutput } from "../commands/CreateLicenseCommand";
import { CreateLicenseConfigurationCommandInput, CreateLicenseConfigurationCommandOutput } from "../commands/CreateLicenseConfigurationCommand";
import { CreateLicenseManagerReportGeneratorCommandInput, CreateLicenseManagerReportGeneratorCommandOutput } from "../commands/CreateLicenseManagerReportGeneratorCommand";
import { CreateLicenseVersionCommandInput, CreateLicenseVersionCommandOutput } from "../commands/CreateLicenseVersionCommand";
import { CreateTokenCommandInput, CreateTokenCommandOutput } from "../commands/CreateTokenCommand";
import { DeleteGrantCommandInput, DeleteGrantCommandOutput } from "../commands/DeleteGrantCommand";
import { DeleteLicenseCommandInput, DeleteLicenseCommandOutput } from "../commands/DeleteLicenseCommand";
import { DeleteLicenseConfigurationCommandInput, DeleteLicenseConfigurationCommandOutput } from "../commands/DeleteLicenseConfigurationCommand";
import { DeleteLicenseManagerReportGeneratorCommandInput, DeleteLicenseManagerReportGeneratorCommandOutput } from "../commands/DeleteLicenseManagerReportGeneratorCommand";
import { DeleteTokenCommandInput, DeleteTokenCommandOutput } from "../commands/DeleteTokenCommand";
import { ExtendLicenseConsumptionCommandInput, ExtendLicenseConsumptionCommandOutput } from "../commands/ExtendLicenseConsumptionCommand";
import { GetAccessTokenCommandInput, GetAccessTokenCommandOutput } from "../commands/GetAccessTokenCommand";
import { GetGrantCommandInput, GetGrantCommandOutput } from "../commands/GetGrantCommand";
import { GetLicenseCommandInput, GetLicenseCommandOutput } from "../commands/GetLicenseCommand";
import { GetLicenseConfigurationCommandInput, GetLicenseConfigurationCommandOutput } from "../commands/GetLicenseConfigurationCommand";
import { GetLicenseManagerReportGeneratorCommandInput, GetLicenseManagerReportGeneratorCommandOutput } from "../commands/GetLicenseManagerReportGeneratorCommand";
import { GetLicenseUsageCommandInput, GetLicenseUsageCommandOutput } from "../commands/GetLicenseUsageCommand";
import { GetServiceSettingsCommandInput, GetServiceSettingsCommandOutput } from "../commands/GetServiceSettingsCommand";
import { ListAssociationsForLicenseConfigurationCommandInput, ListAssociationsForLicenseConfigurationCommandOutput } from "../commands/ListAssociationsForLicenseConfigurationCommand";
import { ListDistributedGrantsCommandInput, ListDistributedGrantsCommandOutput } from "../commands/ListDistributedGrantsCommand";
import { ListFailuresForLicenseConfigurationOperationsCommandInput, ListFailuresForLicenseConfigurationOperationsCommandOutput } from "../commands/ListFailuresForLicenseConfigurationOperationsCommand";
import { ListLicenseConfigurationsCommandInput, ListLicenseConfigurationsCommandOutput } from "../commands/ListLicenseConfigurationsCommand";
import { ListLicenseManagerReportGeneratorsCommandInput, ListLicenseManagerReportGeneratorsCommandOutput } from "../commands/ListLicenseManagerReportGeneratorsCommand";
import { ListLicenseSpecificationsForResourceCommandInput, ListLicenseSpecificationsForResourceCommandOutput } from "../commands/ListLicenseSpecificationsForResourceCommand";
import { ListLicenseVersionsCommandInput, ListLicenseVersionsCommandOutput } from "../commands/ListLicenseVersionsCommand";
import { ListLicensesCommandInput, ListLicensesCommandOutput } from "../commands/ListLicensesCommand";
import { ListReceivedGrantsCommandInput, ListReceivedGrantsCommandOutput } from "../commands/ListReceivedGrantsCommand";
import { ListReceivedLicensesCommandInput, ListReceivedLicensesCommandOutput } from "../commands/ListReceivedLicensesCommand";
import { ListResourceInventoryCommandInput, ListResourceInventoryCommandOutput } from "../commands/ListResourceInventoryCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { ListTokensCommandInput, ListTokensCommandOutput } from "../commands/ListTokensCommand";
import { ListUsageForLicenseConfigurationCommandInput, ListUsageForLicenseConfigurationCommandOutput } from "../commands/ListUsageForLicenseConfigurationCommand";
import { RejectGrantCommandInput, RejectGrantCommandOutput } from "../commands/RejectGrantCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateLicenseConfigurationCommandInput, UpdateLicenseConfigurationCommandOutput } from "../commands/UpdateLicenseConfigurationCommand";
import { UpdateLicenseManagerReportGeneratorCommandInput, UpdateLicenseManagerReportGeneratorCommandOutput } from "../commands/UpdateLicenseManagerReportGeneratorCommand";
import { UpdateLicenseSpecificationsForResourceCommandInput, UpdateLicenseSpecificationsForResourceCommandOutput } from "../commands/UpdateLicenseSpecificationsForResourceCommand";
import { UpdateServiceSettingsCommandInput, UpdateServiceSettingsCommandOutput } from "../commands/UpdateServiceSettingsCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1AcceptGrantCommand: (input: AcceptGrantCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CheckInLicenseCommand: (input: CheckInLicenseCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CheckoutBorrowLicenseCommand: (input: CheckoutBorrowLicenseCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CheckoutLicenseCommand: (input: CheckoutLicenseCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateGrantCommand: (input: CreateGrantCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateGrantVersionCommand: (input: CreateGrantVersionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateLicenseCommand: (input: CreateLicenseCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateLicenseConfigurationCommand: (input: CreateLicenseConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateLicenseManagerReportGeneratorCommand: (input: CreateLicenseManagerReportGeneratorCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateLicenseVersionCommand: (input: CreateLicenseVersionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateTokenCommand: (input: CreateTokenCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteGrantCommand: (input: DeleteGrantCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteLicenseCommand: (input: DeleteLicenseCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteLicenseConfigurationCommand: (input: DeleteLicenseConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand: (input: DeleteLicenseManagerReportGeneratorCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteTokenCommand: (input: DeleteTokenCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ExtendLicenseConsumptionCommand: (input: ExtendLicenseConsumptionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetAccessTokenCommand: (input: GetAccessTokenCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetGrantCommand: (input: GetGrantCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetLicenseCommand: (input: GetLicenseCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetLicenseConfigurationCommand: (input: GetLicenseConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetLicenseManagerReportGeneratorCommand: (input: GetLicenseManagerReportGeneratorCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetLicenseUsageCommand: (input: GetLicenseUsageCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetServiceSettingsCommand: (input: GetServiceSettingsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand: (input: ListAssociationsForLicenseConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListDistributedGrantsCommand: (input: ListDistributedGrantsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand: (input: ListFailuresForLicenseConfigurationOperationsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListLicenseConfigurationsCommand: (input: ListLicenseConfigurationsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListLicenseManagerReportGeneratorsCommand: (input: ListLicenseManagerReportGeneratorsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListLicensesCommand: (input: ListLicensesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListLicenseSpecificationsForResourceCommand: (input: ListLicenseSpecificationsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListLicenseVersionsCommand: (input: ListLicenseVersionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListReceivedGrantsCommand: (input: ListReceivedGrantsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListReceivedLicensesCommand: (input: ListReceivedLicensesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListResourceInventoryCommand: (input: ListResourceInventoryCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListTagsForResourceCommand: (input: ListTagsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListTokensCommand: (input: ListTokensCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListUsageForLicenseConfigurationCommand: (input: ListUsageForLicenseConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1RejectGrantCommand: (input: RejectGrantCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1TagResourceCommand: (input: TagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UntagResourceCommand: (input: UntagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateLicenseConfigurationCommand: (input: UpdateLicenseConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand: (input: UpdateLicenseManagerReportGeneratorCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand: (input: UpdateLicenseSpecificationsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateServiceSettingsCommand: (input: UpdateServiceSettingsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1AcceptGrantCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AcceptGrantCommandOutput>;
export declare const deserializeAws_json1_1CheckInLicenseCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CheckInLicenseCommandOutput>;
export declare const deserializeAws_json1_1CheckoutBorrowLicenseCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CheckoutBorrowLicenseCommandOutput>;
export declare const deserializeAws_json1_1CheckoutLicenseCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CheckoutLicenseCommandOutput>;
export declare const deserializeAws_json1_1CreateGrantCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateGrantCommandOutput>;
export declare const deserializeAws_json1_1CreateGrantVersionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateGrantVersionCommandOutput>;
export declare const deserializeAws_json1_1CreateLicenseCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateLicenseCommandOutput>;
export declare const deserializeAws_json1_1CreateLicenseConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateLicenseConfigurationCommandOutput>;
export declare const deserializeAws_json1_1CreateLicenseManagerReportGeneratorCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateLicenseManagerReportGeneratorCommandOutput>;
export declare const deserializeAws_json1_1CreateLicenseVersionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateLicenseVersionCommandOutput>;
export declare const deserializeAws_json1_1CreateTokenCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateTokenCommandOutput>;
export declare const deserializeAws_json1_1DeleteGrantCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteGrantCommandOutput>;
export declare const deserializeAws_json1_1DeleteLicenseCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteLicenseCommandOutput>;
export declare const deserializeAws_json1_1DeleteLicenseConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteLicenseConfigurationCommandOutput>;
export declare const deserializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteLicenseManagerReportGeneratorCommandOutput>;
export declare const deserializeAws_json1_1DeleteTokenCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteTokenCommandOutput>;
export declare const deserializeAws_json1_1ExtendLicenseConsumptionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ExtendLicenseConsumptionCommandOutput>;
export declare const deserializeAws_json1_1GetAccessTokenCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetAccessTokenCommandOutput>;
export declare const deserializeAws_json1_1GetGrantCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetGrantCommandOutput>;
export declare const deserializeAws_json1_1GetLicenseCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetLicenseCommandOutput>;
export declare const deserializeAws_json1_1GetLicenseConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetLicenseConfigurationCommandOutput>;
export declare const deserializeAws_json1_1GetLicenseManagerReportGeneratorCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetLicenseManagerReportGeneratorCommandOutput>;
export declare const deserializeAws_json1_1GetLicenseUsageCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetLicenseUsageCommandOutput>;
export declare const deserializeAws_json1_1GetServiceSettingsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetServiceSettingsCommandOutput>;
export declare const deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListAssociationsForLicenseConfigurationCommandOutput>;
export declare const deserializeAws_json1_1ListDistributedGrantsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListDistributedGrantsCommandOutput>;
export declare const deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListFailuresForLicenseConfigurationOperationsCommandOutput>;
export declare const deserializeAws_json1_1ListLicenseConfigurationsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListLicenseConfigurationsCommandOutput>;
export declare const deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListLicenseManagerReportGeneratorsCommandOutput>;
export declare const deserializeAws_json1_1ListLicensesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListLicensesCommandOutput>;
export declare const deserializeAws_json1_1ListLicenseSpecificationsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListLicenseSpecificationsForResourceCommandOutput>;
export declare const deserializeAws_json1_1ListLicenseVersionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListLicenseVersionsCommandOutput>;
export declare const deserializeAws_json1_1ListReceivedGrantsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListReceivedGrantsCommandOutput>;
export declare const deserializeAws_json1_1ListReceivedLicensesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListReceivedLicensesCommandOutput>;
export declare const deserializeAws_json1_1ListResourceInventoryCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListResourceInventoryCommandOutput>;
export declare const deserializeAws_json1_1ListTagsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_json1_1ListTokensCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTokensCommandOutput>;
export declare const deserializeAws_json1_1ListUsageForLicenseConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListUsageForLicenseConfigurationCommandOutput>;
export declare const deserializeAws_json1_1RejectGrantCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RejectGrantCommandOutput>;
export declare const deserializeAws_json1_1TagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_json1_1UntagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_json1_1UpdateLicenseConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateLicenseConfigurationCommandOutput>;
export declare const deserializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateLicenseManagerReportGeneratorCommandOutput>;
export declare const deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateLicenseSpecificationsForResourceCommandOutput>;
export declare const deserializeAws_json1_1UpdateServiceSettingsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateServiceSettingsCommandOutput>;
