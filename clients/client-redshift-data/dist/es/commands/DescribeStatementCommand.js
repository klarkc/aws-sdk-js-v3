import { __extends } from "tslib";
import { DescribeStatementRequest, DescribeStatementResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeStatementCommand, serializeAws_json1_1DescribeStatementCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the details about a specific instance when a query was run by the Amazon Redshift Data API. The information
 *       includes when the query started, when it finished, the query status, the number of rows returned, and the SQL
 *       statement. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, DescribeStatementCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, DescribeStatementCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const command = new DescribeStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStatementCommandInput} for command's `input` shape.
 * @see {@link DescribeStatementCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStatementCommand = /** @class */ (function (_super) {
    __extends(DescribeStatementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeStatementCommand(input) {
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
    DescribeStatementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftDataClient";
        var commandName = "DescribeStatementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeStatementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeStatementResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeStatementCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeStatementCommand(input, context);
    };
    DescribeStatementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeStatementCommand(output, context);
    };
    return DescribeStatementCommand;
}($Command));
export { DescribeStatementCommand };
//# sourceMappingURL=DescribeStatementCommand.js.map