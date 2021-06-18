import { __extends } from "tslib";
import { GetWorkGroupInput, GetWorkGroupOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetWorkGroupCommand,
  serializeAws_json1_1GetWorkGroupCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the workgroup with the specified name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetWorkGroupCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetWorkGroupCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new GetWorkGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkGroupCommandInput} for command's `input` shape.
 * @see {@link GetWorkGroupCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetWorkGroupCommand = /** @class */ (function (_super) {
  __extends(GetWorkGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetWorkGroupCommand(input) {
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
  GetWorkGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "GetWorkGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetWorkGroupInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetWorkGroupOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetWorkGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetWorkGroupCommand(input, context);
  };
  GetWorkGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetWorkGroupCommand(output, context);
  };
  return GetWorkGroupCommand;
})($Command);
export { GetWorkGroupCommand };
//# sourceMappingURL=GetWorkGroupCommand.js.map
