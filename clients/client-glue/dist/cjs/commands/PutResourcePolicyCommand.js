"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutResourcePolicyCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Sets the Data Catalog resource policy for access control.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutResourcePolicyCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutResourcePolicyCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutResourcePolicyCommand extends smithy_client_1.Command {
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
        const commandName = "PutResourcePolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.PutResourcePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.PutResourcePolicyResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutResourcePolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutResourcePolicyCommand(output, context);
    }
}
exports.PutResourcePolicyCommand = PutResourcePolicyCommand;
//# sourceMappingURL=PutResourcePolicyCommand.js.map