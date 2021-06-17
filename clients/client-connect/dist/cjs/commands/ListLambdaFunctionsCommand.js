"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLambdaFunctionsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all Lambda functions that display in the dropdown options in the
 *    relevant contact flow blocks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListLambdaFunctionsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListLambdaFunctionsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListLambdaFunctionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLambdaFunctionsCommandInput} for command's `input` shape.
 * @see {@link ListLambdaFunctionsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListLambdaFunctionsCommand extends smithy_client_1.Command {
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
        const clientName = "ConnectClient";
        const commandName = "ListLambdaFunctionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListLambdaFunctionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListLambdaFunctionsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListLambdaFunctionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListLambdaFunctionsCommand(output, context);
    }
}
exports.ListLambdaFunctionsCommand = ListLambdaFunctionsCommand;
//# sourceMappingURL=ListLambdaFunctionsCommand.js.map