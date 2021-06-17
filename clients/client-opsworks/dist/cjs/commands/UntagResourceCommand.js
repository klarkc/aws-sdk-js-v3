"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UntagResourceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Removes tags from a specified stack or layer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, UntagResourceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, UntagResourceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new UntagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagResourceCommandInput} for command's `input` shape.
 * @see {@link UntagResourceCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UntagResourceCommand extends smithy_client_1.Command {
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
        const clientName = "OpsWorksClient";
        const commandName = "UntagResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UntagResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UntagResourceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UntagResourceCommand(output, context);
    }
}
exports.UntagResourceCommand = UntagResourceCommand;
//# sourceMappingURL=UntagResourceCommand.js.map