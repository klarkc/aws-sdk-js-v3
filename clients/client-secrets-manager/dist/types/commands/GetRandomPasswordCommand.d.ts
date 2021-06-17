import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { GetRandomPasswordRequest, GetRandomPasswordResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRandomPasswordCommandInput extends GetRandomPasswordRequest {
}
export interface GetRandomPasswordCommandOutput extends GetRandomPasswordResponse, __MetadataBearer {
}
/**
 * <p>Generates a random password of the specified complexity. This operation is intended for
 *       use in the Lambda rotation function. Per best practice, we recommend that you specify the
 *       maximum length and include every character type that the system you are generating a password
 *       for can support.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:GetRandomPassword</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, GetRandomPasswordCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, GetRandomPasswordCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new GetRandomPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRandomPasswordCommandInput} for command's `input` shape.
 * @see {@link GetRandomPasswordCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRandomPasswordCommand extends $Command<GetRandomPasswordCommandInput, GetRandomPasswordCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: GetRandomPasswordCommandInput;
    constructor(input: GetRandomPasswordCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRandomPasswordCommandInput, GetRandomPasswordCommandOutput>;
    private serialize;
    private deserialize;
}
