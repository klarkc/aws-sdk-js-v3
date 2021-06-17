import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DeleteAddonRequest, DeleteAddonResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAddonCommandInput extends DeleteAddonRequest {
}
export interface DeleteAddonCommandOutput extends DeleteAddonResponse, __MetadataBearer {
}
/**
 * <p>Delete an Amazon EKS add-on.</p>
 *         <p>When you remove the add-on, it will also be deleted from the cluster. You can always
 *             manually start an add-on on the cluster using the Kubernetes API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteAddonCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteAddonCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DeleteAddonCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAddonCommandInput} for command's `input` shape.
 * @see {@link DeleteAddonCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAddonCommand extends $Command<DeleteAddonCommandInput, DeleteAddonCommandOutput, EKSClientResolvedConfig> {
    readonly input: DeleteAddonCommandInput;
    constructor(input: DeleteAddonCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAddonCommandInput, DeleteAddonCommandOutput>;
    private serialize;
    private deserialize;
}
