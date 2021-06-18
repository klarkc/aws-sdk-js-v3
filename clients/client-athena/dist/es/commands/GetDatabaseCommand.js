import { __extends } from "tslib";
import { GetDatabaseInput, GetDatabaseOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetDatabaseCommand,
  serializeAws_json1_1GetDatabaseCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a database object for the specified database and data catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetDatabaseCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetDatabaseCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new GetDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDatabaseCommandInput} for command's `input` shape.
 * @see {@link GetDatabaseCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDatabaseCommand = /** @class */ (function (_super) {
  __extends(GetDatabaseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetDatabaseCommand(input) {
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
  GetDatabaseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "GetDatabaseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetDatabaseInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetDatabaseOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetDatabaseCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetDatabaseCommand(input, context);
  };
  GetDatabaseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetDatabaseCommand(output, context);
  };
  return GetDatabaseCommand;
})($Command);
export { GetDatabaseCommand };
//# sourceMappingURL=GetDatabaseCommand.js.map
