import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteRegistrationCodeRequest, DeleteRegistrationCodeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRegistrationCodeCommandInput extends DeleteRegistrationCodeRequest {
}
export interface DeleteRegistrationCodeCommandOutput extends DeleteRegistrationCodeResponse, __MetadataBearer {
}
/**
 * <p>Deletes a CA certificate registration code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteRegistrationCodeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteRegistrationCodeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteRegistrationCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRegistrationCodeCommandInput} for command's `input` shape.
 * @see {@link DeleteRegistrationCodeCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRegistrationCodeCommand extends $Command<DeleteRegistrationCodeCommandInput, DeleteRegistrationCodeCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteRegistrationCodeCommandInput;
    constructor(input: DeleteRegistrationCodeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRegistrationCodeCommandInput, DeleteRegistrationCodeCommandOutput>;
    private serialize;
    private deserialize;
}
