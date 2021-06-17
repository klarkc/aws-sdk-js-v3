import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { RegisterUserRequest, RegisterUserResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterUserCommandInput extends RegisterUserRequest {
}
export interface RegisterUserCommandOutput extends RegisterUserResponse, __MetadataBearer {
}
/**
 * <p>Creates an Amazon QuickSight user, whose identity is associated with the AWS Identity
 * 			and Access Management (IAM) identity or role specified in the request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, RegisterUserCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, RegisterUserCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new RegisterUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterUserCommandInput} for command's `input` shape.
 * @see {@link RegisterUserCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterUserCommand extends $Command<RegisterUserCommandInput, RegisterUserCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: RegisterUserCommandInput;
    constructor(input: RegisterUserCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterUserCommandInput, RegisterUserCommandOutput>;
    private serialize;
    private deserialize;
}
