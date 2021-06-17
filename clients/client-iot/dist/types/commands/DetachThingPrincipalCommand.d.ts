import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DetachThingPrincipalRequest, DetachThingPrincipalResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetachThingPrincipalCommandInput extends DetachThingPrincipalRequest {
}
export interface DetachThingPrincipalCommandOutput extends DetachThingPrincipalResponse, __MetadataBearer {
}
/**
 * <p>Detaches the specified principal from the specified thing. A principal can be X.509
 * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * 			identities.</p>
 * 		       <note>
 * 			         <p>This call is asynchronous. It might take several seconds for the detachment to
 * 				propagate.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DetachThingPrincipalCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DetachThingPrincipalCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DetachThingPrincipalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachThingPrincipalCommandInput} for command's `input` shape.
 * @see {@link DetachThingPrincipalCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetachThingPrincipalCommand extends $Command<DetachThingPrincipalCommandInput, DetachThingPrincipalCommandOutput, IoTClientResolvedConfig> {
    readonly input: DetachThingPrincipalCommandInput;
    constructor(input: DetachThingPrincipalCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachThingPrincipalCommandInput, DetachThingPrincipalCommandOutput>;
    private serialize;
    private deserialize;
}
