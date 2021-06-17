import { __extends } from "tslib";
import { CreateParallelDataRequest, CreateParallelDataResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateParallelDataCommand, serializeAws_json1_1CreateParallelDataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a parallel data resource in Amazon Translate by importing an input file from
 *       Amazon S3. Parallel data files contain examples of source phrases and their translations from
 *       your translation memory. By adding parallel data, you can influence the style, tone, and word
 *       choice in your translation output.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, CreateParallelDataCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, CreateParallelDataCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new CreateParallelDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateParallelDataCommandInput} for command's `input` shape.
 * @see {@link CreateParallelDataCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateParallelDataCommand = /** @class */ (function (_super) {
    __extends(CreateParallelDataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateParallelDataCommand(input) {
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
    CreateParallelDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranslateClient";
        var commandName = "CreateParallelDataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateParallelDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateParallelDataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateParallelDataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateParallelDataCommand(input, context);
    };
    CreateParallelDataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateParallelDataCommand(output, context);
    };
    return CreateParallelDataCommand;
}($Command));
export { CreateParallelDataCommand };
//# sourceMappingURL=CreateParallelDataCommand.js.map