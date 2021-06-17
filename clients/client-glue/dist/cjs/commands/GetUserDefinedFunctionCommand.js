"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserDefinedFunctionCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves a specified function definition from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetUserDefinedFunctionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetUserDefinedFunctionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetUserDefinedFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserDefinedFunctionCommandInput} for command's `input` shape.
 * @see {@link GetUserDefinedFunctionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetUserDefinedFunctionCommand extends smithy_client_1.Command {
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
        const clientName = "GlueClient";
        const commandName = "GetUserDefinedFunctionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.GetUserDefinedFunctionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.GetUserDefinedFunctionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetUserDefinedFunctionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetUserDefinedFunctionCommand(output, context);
    }
}
exports.GetUserDefinedFunctionCommand = GetUserDefinedFunctionCommand;
//# sourceMappingURL=GetUserDefinedFunctionCommand.js.map