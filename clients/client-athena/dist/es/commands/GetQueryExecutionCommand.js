import { __extends } from "tslib";
import { GetQueryExecutionInput, GetQueryExecutionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetQueryExecutionCommand,
  serializeAws_json1_1GetQueryExecutionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a single execution of a query if you have access to the
 *             workgroup in which the query ran. Each time a query executes, information about the
 *             query execution is saved with a unique ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetQueryExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetQueryExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new GetQueryExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQueryExecutionCommandInput} for command's `input` shape.
 * @see {@link GetQueryExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetQueryExecutionCommand = /** @class */ (function (_super) {
  __extends(GetQueryExecutionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetQueryExecutionCommand(input) {
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
  GetQueryExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "GetQueryExecutionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetQueryExecutionInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetQueryExecutionOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetQueryExecutionCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetQueryExecutionCommand(input, context);
  };
  GetQueryExecutionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetQueryExecutionCommand(output, context);
  };
  return GetQueryExecutionCommand;
})($Command);
export { GetQueryExecutionCommand };
//# sourceMappingURL=GetQueryExecutionCommand.js.map
