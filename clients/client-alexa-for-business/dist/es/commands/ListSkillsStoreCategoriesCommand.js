import { __extends } from "tslib";
import { ListSkillsStoreCategoriesRequest, ListSkillsStoreCategoriesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListSkillsStoreCategoriesCommand,
  serializeAws_json1_1ListSkillsStoreCategoriesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all categories in the Alexa skill store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListSkillsStoreCategoriesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListSkillsStoreCategoriesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ListSkillsStoreCategoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSkillsStoreCategoriesCommandInput} for command's `input` shape.
 * @see {@link ListSkillsStoreCategoriesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSkillsStoreCategoriesCommand = /** @class */ (function (_super) {
  __extends(ListSkillsStoreCategoriesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListSkillsStoreCategoriesCommand(input) {
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
  ListSkillsStoreCategoriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "ListSkillsStoreCategoriesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListSkillsStoreCategoriesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSkillsStoreCategoriesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListSkillsStoreCategoriesCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListSkillsStoreCategoriesCommand(input, context);
  };
  ListSkillsStoreCategoriesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListSkillsStoreCategoriesCommand(output, context);
  };
  return ListSkillsStoreCategoriesCommand;
})($Command);
export { ListSkillsStoreCategoriesCommand };
//# sourceMappingURL=ListSkillsStoreCategoriesCommand.js.map
