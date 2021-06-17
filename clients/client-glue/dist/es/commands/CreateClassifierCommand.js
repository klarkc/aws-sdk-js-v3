import { __extends } from "tslib";
import { CreateClassifierRequest, CreateClassifierResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateClassifierCommand, serializeAws_json1_1CreateClassifierCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an
 *         <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>,
 *       depending on which field of the request is present.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateClassifierCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateClassifierCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateClassifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClassifierCommandInput} for command's `input` shape.
 * @see {@link CreateClassifierCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateClassifierCommand = /** @class */ (function (_super) {
    __extends(CreateClassifierCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateClassifierCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateClassifierCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "CreateClassifierCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateClassifierRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateClassifierResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateClassifierCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateClassifierCommand(input, context);
    };
    CreateClassifierCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateClassifierCommand(output, context);
    };
    return CreateClassifierCommand;
}($Command));
export { CreateClassifierCommand };
//# sourceMappingURL=CreateClassifierCommand.js.map