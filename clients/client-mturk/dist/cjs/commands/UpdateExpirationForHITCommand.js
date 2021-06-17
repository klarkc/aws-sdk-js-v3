"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExpirationForHITCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             The <code>UpdateExpirationForHIT</code> operation allows you update the expiration time of a HIT.
 *             If you update it to a time in the past, the HIT will be immediately expired.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateExpirationForHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateExpirationForHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new UpdateExpirationForHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateExpirationForHITCommandInput} for command's `input` shape.
 * @see {@link UpdateExpirationForHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateExpirationForHITCommand extends smithy_client_1.Command {
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
        const clientName = "MTurkClient";
        const commandName = "UpdateExpirationForHITCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateExpirationForHITRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateExpirationForHITResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateExpirationForHITCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateExpirationForHITCommand(output, context);
    }
}
exports.UpdateExpirationForHITCommand = UpdateExpirationForHITCommand;
//# sourceMappingURL=UpdateExpirationForHITCommand.js.map