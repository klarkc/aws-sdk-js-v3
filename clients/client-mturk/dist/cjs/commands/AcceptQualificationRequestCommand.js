"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptQualificationRequestCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification.
 *         </p>
 *         <p>
 *             Only the owner of the Qualification type can grant a Qualification request for that	type.
 *         </p>
 *         <p>
 *             A successful request for the <code>AcceptQualificationRequest</code> operation
 *             returns with no errors and an empty body.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, AcceptQualificationRequestCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, AcceptQualificationRequestCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new AcceptQualificationRequestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptQualificationRequestCommandInput} for command's `input` shape.
 * @see {@link AcceptQualificationRequestCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AcceptQualificationRequestCommand extends smithy_client_1.Command {
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
        const commandName = "AcceptQualificationRequestCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AcceptQualificationRequestRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AcceptQualificationRequestResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AcceptQualificationRequestCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AcceptQualificationRequestCommand(output, context);
    }
}
exports.AcceptQualificationRequestCommand = AcceptQualificationRequestCommand;
//# sourceMappingURL=AcceptQualificationRequestCommand.js.map