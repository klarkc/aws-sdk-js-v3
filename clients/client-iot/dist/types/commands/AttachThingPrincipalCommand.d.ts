import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { AttachThingPrincipalRequest, AttachThingPrincipalResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AttachThingPrincipalCommandInput extends AttachThingPrincipalRequest {
}
export interface AttachThingPrincipalCommandOutput extends AttachThingPrincipalResponse, __MetadataBearer {
}
/**
 * <p>Attaches the specified principal to the specified thing. A principal can be X.509
 * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * 			identities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AttachThingPrincipalCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AttachThingPrincipalCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new AttachThingPrincipalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachThingPrincipalCommandInput} for command's `input` shape.
 * @see {@link AttachThingPrincipalCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AttachThingPrincipalCommand extends $Command<AttachThingPrincipalCommandInput, AttachThingPrincipalCommandOutput, IoTClientResolvedConfig> {
    readonly input: AttachThingPrincipalCommandInput;
    constructor(input: AttachThingPrincipalCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachThingPrincipalCommandInput, AttachThingPrincipalCommandOutput>;
    private serialize;
    private deserialize;
}
