"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetVariablesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets all of the variables or the specific variable. This is a
 *          paginated API. Providing null <code>maxSizePerPage</code> results in retrieving maximum of
 *          100 records per page. If you provide <code>maxSizePerPage</code> the value must be between
 *          50 and 100. To get the next page result, a provide a pagination token from
 *         <code>GetVariablesResult</code> as part of your request. Null pagination token
 *          fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetVariablesCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetVariablesCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetVariablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVariablesCommandInput} for command's `input` shape.
 * @see {@link GetVariablesCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetVariablesCommand extends smithy_client_1.Command {
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
        const clientName = "FraudDetectorClient";
        const commandName = "GetVariablesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetVariablesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetVariablesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetVariablesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetVariablesCommand(output, context);
    }
}
exports.GetVariablesCommand = GetVariablesCommand;
//# sourceMappingURL=GetVariablesCommand.js.map