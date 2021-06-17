"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWebLoginTokenCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Create a JWT token to be used to login to Airflow Web UI with claims based Authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, CreateWebLoginTokenCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, CreateWebLoginTokenCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const command = new CreateWebLoginTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWebLoginTokenCommandInput} for command's `input` shape.
 * @see {@link CreateWebLoginTokenCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateWebLoginTokenCommand extends smithy_client_1.Command {
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
        const clientName = "MWAAClient";
        const commandName = "CreateWebLoginTokenCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateWebLoginTokenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateWebLoginTokenResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateWebLoginTokenCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateWebLoginTokenCommand(output, context);
    }
}
exports.CreateWebLoginTokenCommand = CreateWebLoginTokenCommand;
//# sourceMappingURL=CreateWebLoginTokenCommand.js.map