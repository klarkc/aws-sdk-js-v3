import { __extends } from "tslib";
import { ListWorkGroupsInput, ListWorkGroupsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListWorkGroupsCommand,
  serializeAws_json1_1ListWorkGroupsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists available workgroups for the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListWorkGroupsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListWorkGroupsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListWorkGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkGroupsCommandInput} for command's `input` shape.
 * @see {@link ListWorkGroupsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListWorkGroupsCommand = /** @class */ (function (_super) {
  __extends(ListWorkGroupsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListWorkGroupsCommand(input) {
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
  ListWorkGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "ListWorkGroupsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListWorkGroupsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListWorkGroupsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListWorkGroupsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListWorkGroupsCommand(input, context);
  };
  ListWorkGroupsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListWorkGroupsCommand(output, context);
  };
  return ListWorkGroupsCommand;
})($Command);
export { ListWorkGroupsCommand };
//# sourceMappingURL=ListWorkGroupsCommand.js.map
