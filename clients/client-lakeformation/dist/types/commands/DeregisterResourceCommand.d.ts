import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { DeregisterResourceRequest, DeregisterResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterResourceCommandInput extends DeregisterResourceRequest {
}
export interface DeregisterResourceCommandOutput extends DeregisterResourceResponse, __MetadataBearer {
}
/**
 * <p>Deregisters the resource as managed by the Data Catalog.</p>
 *
 *          <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DeregisterResourceCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DeregisterResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new DeregisterResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterResourceCommandInput} for command's `input` shape.
 * @see {@link DeregisterResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterResourceCommand extends $Command<DeregisterResourceCommandInput, DeregisterResourceCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: DeregisterResourceCommandInput;
    constructor(input: DeregisterResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterResourceCommandInput, DeregisterResourceCommandOutput>;
    private serialize;
    private deserialize;
}
