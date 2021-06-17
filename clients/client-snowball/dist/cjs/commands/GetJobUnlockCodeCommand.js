"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetJobUnlockCodeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the <code>UnlockCode</code> code value for the specified job. A particular
 *         <code>UnlockCode</code> value can be accessed for up to 360 days after the associated job
 *       has been created.</p>
 *
 *          <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric
 *       characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed
 *       along with the manifest to the Snow device through the Snowball client when the client is started
 *       for the first time.</p>
 *
 *          <p>As a best practice, we recommend that you don't save a copy of the
 *         <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these
 *       separately helps prevent unauthorized parties from gaining access to the Snow device associated
 *       with that job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetJobUnlockCodeCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetJobUnlockCodeCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new GetJobUnlockCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobUnlockCodeCommandInput} for command's `input` shape.
 * @see {@link GetJobUnlockCodeCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetJobUnlockCodeCommand extends smithy_client_1.Command {
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
        const clientName = "SnowballClient";
        const commandName = "GetJobUnlockCodeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetJobUnlockCodeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetJobUnlockCodeResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetJobUnlockCodeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetJobUnlockCodeCommand(output, context);
    }
}
exports.GetJobUnlockCodeCommand = GetJobUnlockCodeCommand;
//# sourceMappingURL=GetJobUnlockCodeCommand.js.map