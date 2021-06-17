import { __extends } from "tslib";
import { CreateAnalysisRequest, CreateAnalysisResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateAnalysisCommand, serializeAws_restJson1CreateAnalysisCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an analysis in Amazon QuickSight.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateAnalysisCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateAnalysisCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAnalysisCommandInput} for command's `input` shape.
 * @see {@link CreateAnalysisCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAnalysisCommand = /** @class */ (function (_super) {
    __extends(CreateAnalysisCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAnalysisCommand(input) {
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
    CreateAnalysisCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "CreateAnalysisCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAnalysisRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAnalysisResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAnalysisCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateAnalysisCommand(input, context);
    };
    CreateAnalysisCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateAnalysisCommand(output, context);
    };
    return CreateAnalysisCommand;
}($Command));
export { CreateAnalysisCommand };
//# sourceMappingURL=CreateAnalysisCommand.js.map