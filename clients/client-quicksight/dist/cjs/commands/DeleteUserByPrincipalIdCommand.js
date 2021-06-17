"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserByPrincipalIdCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a user identified by its principal ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteUserByPrincipalIdCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteUserByPrincipalIdCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteUserByPrincipalIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserByPrincipalIdCommandInput} for command's `input` shape.
 * @see {@link DeleteUserByPrincipalIdCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteUserByPrincipalIdCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "QuickSightClient";
        const commandName = "DeleteUserByPrincipalIdCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteUserByPrincipalIdRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteUserByPrincipalIdResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DeleteUserByPrincipalIdCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DeleteUserByPrincipalIdCommand(output, context);
    }
}
exports.DeleteUserByPrincipalIdCommand = DeleteUserByPrincipalIdCommand;
//# sourceMappingURL=DeleteUserByPrincipalIdCommand.js.map