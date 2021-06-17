import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetContainerAPIMetadataRequest, GetContainerAPIMetadataResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetContainerAPIMetadataCommandInput extends GetContainerAPIMetadataRequest {
}
export interface GetContainerAPIMetadataCommandOutput extends GetContainerAPIMetadataResult, __MetadataBearer {
}
/**
 * <p>Returns information about Amazon Lightsail containers, such as the current version of the
 *       Lightsail Control (lightsailctl) plugin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerAPIMetadataCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerAPIMetadataCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerAPIMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerAPIMetadataCommandInput} for command's `input` shape.
 * @see {@link GetContainerAPIMetadataCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetContainerAPIMetadataCommand extends $Command<GetContainerAPIMetadataCommandInput, GetContainerAPIMetadataCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetContainerAPIMetadataCommandInput;
    constructor(input: GetContainerAPIMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContainerAPIMetadataCommandInput, GetContainerAPIMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
