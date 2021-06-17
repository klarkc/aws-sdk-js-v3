import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetCloudFormationStackRecordsRequest, GetCloudFormationStackRecordsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCloudFormationStackRecordsCommandInput extends GetCloudFormationStackRecordsRequest {
}
export interface GetCloudFormationStackRecordsCommandOutput extends GetCloudFormationStackRecordsResult, __MetadataBearer {
}
/**
 * <p>Returns the CloudFormation stack record created as a result of the <code>create cloud
 *         formation stack</code> operation.</p>
 *          <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail
 *       snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetCloudFormationStackRecordsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetCloudFormationStackRecordsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetCloudFormationStackRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCloudFormationStackRecordsCommandInput} for command's `input` shape.
 * @see {@link GetCloudFormationStackRecordsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCloudFormationStackRecordsCommand extends $Command<GetCloudFormationStackRecordsCommandInput, GetCloudFormationStackRecordsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetCloudFormationStackRecordsCommandInput;
    constructor(input: GetCloudFormationStackRecordsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCloudFormationStackRecordsCommandInput, GetCloudFormationStackRecordsCommandOutput>;
    private serialize;
    private deserialize;
}
