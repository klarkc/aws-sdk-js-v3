import { BulkPublishCommandInput, BulkPublishCommandOutput } from "../commands/BulkPublishCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "../commands/DeleteDatasetCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "../commands/DescribeDatasetCommand";
import { DescribeIdentityPoolUsageCommandInput, DescribeIdentityPoolUsageCommandOutput } from "../commands/DescribeIdentityPoolUsageCommand";
import { DescribeIdentityUsageCommandInput, DescribeIdentityUsageCommandOutput } from "../commands/DescribeIdentityUsageCommand";
import { GetBulkPublishDetailsCommandInput, GetBulkPublishDetailsCommandOutput } from "../commands/GetBulkPublishDetailsCommand";
import { GetCognitoEventsCommandInput, GetCognitoEventsCommandOutput } from "../commands/GetCognitoEventsCommand";
import { GetIdentityPoolConfigurationCommandInput, GetIdentityPoolConfigurationCommandOutput } from "../commands/GetIdentityPoolConfigurationCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import { ListIdentityPoolUsageCommandInput, ListIdentityPoolUsageCommandOutput } from "../commands/ListIdentityPoolUsageCommand";
import { ListRecordsCommandInput, ListRecordsCommandOutput } from "../commands/ListRecordsCommand";
import { RegisterDeviceCommandInput, RegisterDeviceCommandOutput } from "../commands/RegisterDeviceCommand";
import { SetCognitoEventsCommandInput, SetCognitoEventsCommandOutput } from "../commands/SetCognitoEventsCommand";
import { SetIdentityPoolConfigurationCommandInput, SetIdentityPoolConfigurationCommandOutput } from "../commands/SetIdentityPoolConfigurationCommand";
import { SubscribeToDatasetCommandInput, SubscribeToDatasetCommandOutput } from "../commands/SubscribeToDatasetCommand";
import { UnsubscribeFromDatasetCommandInput, UnsubscribeFromDatasetCommandOutput } from "../commands/UnsubscribeFromDatasetCommand";
import { UpdateRecordsCommandInput, UpdateRecordsCommandOutput } from "../commands/UpdateRecordsCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1BulkPublishCommand: (input: BulkPublishCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteDatasetCommand: (input: DeleteDatasetCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeDatasetCommand: (input: DescribeDatasetCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeIdentityPoolUsageCommand: (input: DescribeIdentityPoolUsageCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeIdentityUsageCommand: (input: DescribeIdentityUsageCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetBulkPublishDetailsCommand: (input: GetBulkPublishDetailsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetCognitoEventsCommand: (input: GetCognitoEventsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetIdentityPoolConfigurationCommand: (input: GetIdentityPoolConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListDatasetsCommand: (input: ListDatasetsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListIdentityPoolUsageCommand: (input: ListIdentityPoolUsageCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListRecordsCommand: (input: ListRecordsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1RegisterDeviceCommand: (input: RegisterDeviceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1SetCognitoEventsCommand: (input: SetCognitoEventsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1SetIdentityPoolConfigurationCommand: (input: SetIdentityPoolConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1SubscribeToDatasetCommand: (input: SubscribeToDatasetCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UnsubscribeFromDatasetCommand: (input: UnsubscribeFromDatasetCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateRecordsCommand: (input: UpdateRecordsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1BulkPublishCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BulkPublishCommandOutput>;
export declare const deserializeAws_restJson1DeleteDatasetCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteDatasetCommandOutput>;
export declare const deserializeAws_restJson1DescribeDatasetCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeDatasetCommandOutput>;
export declare const deserializeAws_restJson1DescribeIdentityPoolUsageCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeIdentityPoolUsageCommandOutput>;
export declare const deserializeAws_restJson1DescribeIdentityUsageCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeIdentityUsageCommandOutput>;
export declare const deserializeAws_restJson1GetBulkPublishDetailsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetBulkPublishDetailsCommandOutput>;
export declare const deserializeAws_restJson1GetCognitoEventsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetCognitoEventsCommandOutput>;
export declare const deserializeAws_restJson1GetIdentityPoolConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetIdentityPoolConfigurationCommandOutput>;
export declare const deserializeAws_restJson1ListDatasetsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListDatasetsCommandOutput>;
export declare const deserializeAws_restJson1ListIdentityPoolUsageCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListIdentityPoolUsageCommandOutput>;
export declare const deserializeAws_restJson1ListRecordsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListRecordsCommandOutput>;
export declare const deserializeAws_restJson1RegisterDeviceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RegisterDeviceCommandOutput>;
export declare const deserializeAws_restJson1SetCognitoEventsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SetCognitoEventsCommandOutput>;
export declare const deserializeAws_restJson1SetIdentityPoolConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SetIdentityPoolConfigurationCommandOutput>;
export declare const deserializeAws_restJson1SubscribeToDatasetCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SubscribeToDatasetCommandOutput>;
export declare const deserializeAws_restJson1UnsubscribeFromDatasetCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UnsubscribeFromDatasetCommandOutput>;
export declare const deserializeAws_restJson1UpdateRecordsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateRecordsCommandOutput>;
