"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFunctionDefinitionVersionsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * Lists the versions of a Lambda function definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListFunctionDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListFunctionDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListFunctionDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFunctionDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionDefinitionVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListFunctionDefinitionVersionsCommand extends smithy_client_1.Command {
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
        const clientName = "GreengrassClient";
        const commandName = "ListFunctionDefinitionVersionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListFunctionDefinitionVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListFunctionDefinitionVersionsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListFunctionDefinitionVersionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListFunctionDefinitionVersionsCommand(output, context);
    }
}
exports.ListFunctionDefinitionVersionsCommand = ListFunctionDefinitionVersionsCommand;
//# sourceMappingURL=ListFunctionDefinitionVersionsCommand.js.map