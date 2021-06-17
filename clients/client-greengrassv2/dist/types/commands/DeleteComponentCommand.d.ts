import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { DeleteComponentRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteComponentCommandInput extends DeleteComponentRequest {
}
export interface DeleteComponentCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a version of a component from AWS IoT Greengrass.</p>
 *          <note>
 *             <p>This operation deletes the component's recipe and artifacts. As a result, deployments
 *         that refer to this component version will fail. If you have deployments that use this
 *         component version, you can remove the component from the deployment or update the deployment
 *         to use a valid version.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, DeleteComponentCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, DeleteComponentCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new DeleteComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteComponentCommandInput} for command's `input` shape.
 * @see {@link DeleteComponentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteComponentCommand extends $Command<DeleteComponentCommandInput, DeleteComponentCommandOutput, GreengrassV2ClientResolvedConfig> {
    readonly input: DeleteComponentCommandInput;
    constructor(input: DeleteComponentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteComponentCommandInput, DeleteComponentCommandOutput>;
    private serialize;
    private deserialize;
}
