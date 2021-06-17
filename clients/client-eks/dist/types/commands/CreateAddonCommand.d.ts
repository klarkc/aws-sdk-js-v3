import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { CreateAddonRequest, CreateAddonResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAddonCommandInput extends CreateAddonRequest {
}
export interface CreateAddonCommandOutput extends CreateAddonResponse, __MetadataBearer {
}
/**
 * <p>Creates an Amazon EKS add-on.</p>
 *         <p>Amazon EKS add-ons help to automate the provisioning and lifecycle management of common
 *             operational software for Amazon EKS clusters. Amazon EKS add-ons can only be used with Amazon EKS
 *             clusters running version 1.18 with platform version <code>eks.3</code> or later because
 *             add-ons rely on the Server-side Apply Kubernetes feature, which is only available in
 *             Kubernetes 1.18 and later.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateAddonCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateAddonCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new CreateAddonCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAddonCommandInput} for command's `input` shape.
 * @see {@link CreateAddonCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAddonCommand extends $Command<CreateAddonCommandInput, CreateAddonCommandOutput, EKSClientResolvedConfig> {
    readonly input: CreateAddonCommandInput;
    constructor(input: CreateAddonCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAddonCommandInput, CreateAddonCommandOutput>;
    private serialize;
    private deserialize;
}
