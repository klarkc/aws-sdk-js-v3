import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { AddApplicationReferenceDataSourceRequest, AddApplicationReferenceDataSourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddApplicationReferenceDataSourceCommandInput extends AddApplicationReferenceDataSourceRequest {
}
export interface AddApplicationReferenceDataSourceCommandOutput extends AddApplicationReferenceDataSourceResponse, __MetadataBearer {
}
/**
 * <p>Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.</p>
 *          <p>Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an
 *       in-application table within your application. In the request, you provide the source (S3
 *       bucket name and object key name), name of the in-application table to create, and the
 *       necessary mapping information that describes how data in an Amazon S3 object maps to columns
 *       in the resulting in-application table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationReferenceDataSourceCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationReferenceDataSourceCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new AddApplicationReferenceDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddApplicationReferenceDataSourceCommandInput} for command's `input` shape.
 * @see {@link AddApplicationReferenceDataSourceCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddApplicationReferenceDataSourceCommand extends $Command<AddApplicationReferenceDataSourceCommandInput, AddApplicationReferenceDataSourceCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: AddApplicationReferenceDataSourceCommandInput;
    constructor(input: AddApplicationReferenceDataSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddApplicationReferenceDataSourceCommandInput, AddApplicationReferenceDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
