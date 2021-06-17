import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { GetComponentRequest, GetComponentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetComponentCommandInput extends GetComponentRequest {
}
export interface GetComponentCommandOutput extends GetComponentResponse, __MetadataBearer {
}
/**
 * <p>Gets the recipe for a version of a component. Core devices can call this operation to
 *       identify the artifacts and requirements to install a component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, GetComponentCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, GetComponentCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new GetComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComponentCommandInput} for command's `input` shape.
 * @see {@link GetComponentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetComponentCommand extends $Command<GetComponentCommandInput, GetComponentCommandOutput, GreengrassV2ClientResolvedConfig> {
    readonly input: GetComponentCommandInput;
    constructor(input: GetComponentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetComponentCommandInput, GetComponentCommandOutput>;
    private serialize;
    private deserialize;
}
