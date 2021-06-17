"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCodeSigningConfigsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code
 *         signing configurations</a>. A request returns up to 10,000 configurations per
 *       call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListCodeSigningConfigsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListCodeSigningConfigsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListCodeSigningConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCodeSigningConfigsCommandInput} for command's `input` shape.
 * @see {@link ListCodeSigningConfigsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListCodeSigningConfigsCommand extends smithy_client_1.Command {
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
        const clientName = "LambdaClient";
        const commandName = "ListCodeSigningConfigsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListCodeSigningConfigsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListCodeSigningConfigsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListCodeSigningConfigsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListCodeSigningConfigsCommand(output, context);
    }
}
exports.ListCodeSigningConfigsCommand = ListCodeSigningConfigsCommand;
//# sourceMappingURL=ListCodeSigningConfigsCommand.js.map