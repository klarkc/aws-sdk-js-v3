import { __extends } from "tslib";
import { UpdateWorkGroupInput, UpdateWorkGroupOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateWorkGroupCommand,
  serializeAws_json1_1UpdateWorkGroupCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the workgroup with the specified name. The workgroup's name cannot be
 *             changed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdateWorkGroupCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdateWorkGroupCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new UpdateWorkGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkGroupCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateWorkGroupCommand = /** @class */ (function (_super) {
  __extends(UpdateWorkGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateWorkGroupCommand(input) {
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
  UpdateWorkGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "UpdateWorkGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateWorkGroupInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateWorkGroupOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateWorkGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateWorkGroupCommand(input, context);
  };
  UpdateWorkGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateWorkGroupCommand(output, context);
  };
  return UpdateWorkGroupCommand;
})($Command);
export { UpdateWorkGroupCommand };
//# sourceMappingURL=UpdateWorkGroupCommand.js.map
