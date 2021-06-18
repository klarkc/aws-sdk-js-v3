import { __extends } from "tslib";
import { GetNamedQueryInput, GetNamedQueryOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetNamedQueryCommand,
  serializeAws_json1_1GetNamedQueryCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a single query. Requires that you have access to the
 *             workgroup in which the query was saved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetNamedQueryCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetNamedQueryCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new GetNamedQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNamedQueryCommandInput} for command's `input` shape.
 * @see {@link GetNamedQueryCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetNamedQueryCommand = /** @class */ (function (_super) {
  __extends(GetNamedQueryCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetNamedQueryCommand(input) {
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
  GetNamedQueryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "GetNamedQueryCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetNamedQueryInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetNamedQueryOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetNamedQueryCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetNamedQueryCommand(input, context);
  };
  GetNamedQueryCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetNamedQueryCommand(output, context);
  };
  return GetNamedQueryCommand;
})($Command);
export { GetNamedQueryCommand };
//# sourceMappingURL=GetNamedQueryCommand.js.map
