import { __extends } from "tslib";
import { GetStatementResultRequest, GetStatementResultResponse } from "../models/models_0";
import { deserializeAws_json1_1GetStatementResultCommand, serializeAws_json1_1GetStatementResultCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Fetches the temporarily cached result of an SQL statement.
 *        A token is returned to page through the statement results. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, GetStatementResultCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, GetStatementResultCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const command = new GetStatementResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStatementResultCommandInput} for command's `input` shape.
 * @see {@link GetStatementResultCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStatementResultCommand = /** @class */ (function (_super) {
    __extends(GetStatementResultCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetStatementResultCommand(input) {
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
    GetStatementResultCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftDataClient";
        var commandName = "GetStatementResultCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetStatementResultRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetStatementResultResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetStatementResultCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetStatementResultCommand(input, context);
    };
    GetStatementResultCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetStatementResultCommand(output, context);
    };
    return GetStatementResultCommand;
}($Command));
export { GetStatementResultCommand };
//# sourceMappingURL=GetStatementResultCommand.js.map